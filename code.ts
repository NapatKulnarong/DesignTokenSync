figma.showUI(__html__, { width: 450, height: 550 });

// SECURITY DATA LINK CONFIGURATION
const GITHUB_TOKEN = "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"; 
const REPO_OWNER = "NapatKulnarong";
const REPO_NAME = "DesignTokenSync";
const FILE_PATH = "DESIGN.md";

async function loadCollections() {
    try {
        const collections = await figma.variables.getLocalVariableCollectionsAsync();
        const collectionNames = collections.map(c => ({ id: c.id, name: c.name }));
        figma.ui.postMessage({ type: 'COLLECTIONS_LOADED', payload: collectionNames });
    } catch (err) {
        figma.ui.postMessage({ type: 'ERROR', message: 'Failed to load collections: ' + String(err) });
    }
}
loadCollections();

figma.ui.onmessage = async (msg) => {
    // 1. SAFE NATIVE FETCH FROM GITHUB (With fixed Basic Auth headers)
    if (msg.type === 'FETCH_FROM_GITHUB') {
        const url = `https://api.github.com/repos/${REPO_OWNER}/${REPO_NAME}/contents/${FILE_PATH}`;
        try {
            const response = await fetch(url, {
                method: 'GET',
                headers: { 
                    'Authorization': 'Basic ' + figma.base64Encode(`${REPO_OWNER}:${GITHUB_TOKEN}`),
                    'Accept': 'application/vnd.github.v3+json'
                }
            });

            if (response.status !== 200) {
                throw new Error(`GitHub returned status code ${response.status}`);
            }

            const data = await response.json();
            figma.ui.postMessage({ type: 'GITHUB_FETCH_SUCCESS', payload: data });
        } catch (err) {
            figma.ui.postMessage({ type: 'ERROR', message: 'GitHub Fetch Failed: ' + String(err) });
        }
    }

    // 2. FIGMA EXTRACTION LOOP
    if (msg.type === 'EXTRACT_TOKENS') {
        try {
            const variables = await figma.variables.getLocalVariablesAsync();
            const collections = await figma.variables.getLocalVariableCollectionsAsync();
            const targetCollectionId = msg.collectionId;

            const extractedTokens = [];
            for (const variable of variables) {
                if (variable.resolvedType === 'COLOR' && variable.variableCollectionId === targetCollectionId) {
                    const collection = collections.find(c => c.id === variable.variableCollectionId);
                    const collectionName = collection ? collection.name : "unknown";
                    
                    const formattedValues: { [key: string]: string } = {};
                    Object.entries(variable.valuesByMode).forEach(([modeId, rawValue]) => {
                        if (rawValue && (rawValue as any).type === "VARIABLE_ALIAS") {
                            const parentVar = variables.find(v => v.id === (rawValue as any).id);
                            formattedValues[modeId] = parentVar ? `{${parentVar.name.replace(/\//g, '.')}}` : `{alias}`;
                        } else if (rawValue && (rawValue as any).r !== undefined) {
                            const toHex = (n: number) => Math.round(n * 255).toString(16).padStart(2, '0').toUpperCase();
                            const c = rawValue as RGB;
                            formattedValues[modeId] = `#${toHex(c.r)}${toHex(c.g)}${toHex(c.b)}`;
                        }
                    });
                    
                    extractedTokens.push({
                        name: variable.name,
                        collection: collectionName,
                        values: formattedValues
                    });
                }
            }
            figma.ui.postMessage({ type: 'TOKENS_EXTRACTED', payload: extractedTokens });
        } catch (err) {
            figma.ui.postMessage({ type: 'ERROR', message: String(err) });
        }
    }

    // 3. SAFE NATIVE PUSH TO GITHUB (With fixed Basic Auth headers)
    if (msg.type === 'PUSH_TO_GITHUB') {
        const url = `https://api.github.com/repos/${REPO_OWNER}/${REPO_NAME}/contents/${FILE_PATH}`;
        try {
            const response = await fetch(url, {
                method: 'PUT',
                headers: { 
                    'Authorization': 'Basic ' + figma.base64Encode(`${REPO_OWNER}:${GITHUB_TOKEN}`),
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    message: msg.commitMessage,
                    content: msg.content,
                    sha: msg.sha
                })
            });

            if (response.status === 200 || response.status === 201) {
                figma.ui.postMessage({ type: 'GITHUB_PUSH_SUCCESS' });
                figma.notify('HackMD documentation sync completed successfully!');
            } else {
                throw new Error(`GitHub rejected updates with status ${response.status}`);
            }
        } catch (err) {
            figma.ui.postMessage({ type: 'ERROR', message: 'GitHub Push Failed: ' + String(err) });
        }
    }
};