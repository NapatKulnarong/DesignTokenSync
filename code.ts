figma.showUI(__html__, { width: 450, height: 550 });

// CRITICAL SECURITY LINK CONFIGURATION (Handled safely in backend)
const GITHUB_TOKEN = "ghp_YOUR_MASTER_TOKEN_HERE"; // Put YOUR Personal Access Token here
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
    // 1. FETCH ROUTINE FROM GITHUB
    if (msg.type === 'FETCH_FROM_GITHUB') {
        const url = `https://api.github.com/repos/${REPO_OWNER}/${REPO_NAME}/contents/${FILE_PATH}`;
        try {
            const response = await (figma as any).network.requestAsync({
                url: url,
                method: 'GET',
                headers: { 'Authorization': `token ${GITHUB_TOKEN}`, 'User-Agent': 'Figma-Plugin' }
            });

            if (response.status !== 200) {
                throw new Error(`GitHub returned status ${response.status}`);
            }

            const data = JSON.parse(response.text);
            figma.ui.postMessage({ type: 'GITHUB_FETCH_SUCCESS', payload: data });
        } catch (err) {
            figma.ui.postMessage({ type: 'ERROR', message: 'GitHub Fetch Failed: ' + String(err) });
        }
    }

    // 2. EXTRACT FIGMA VARIABLES ROUTINE
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

    // 3. PUSH ROUTINE TO GITHUB
    if (msg.type === 'PUSH_TO_GITHUB') {
        const url = `https://api.github.com/repos/${REPO_OWNER}/${REPO_NAME}/contents/${FILE_PATH}`;
        try {
            const response = await (figma as any).network.requestAsync({
                url: url,
                method: 'PUT',
                headers: { 
                    'Authorization': `token ${GITHUB_TOKEN}`, 
                    'Content-Type': 'application/json',
                    'User-Agent': 'Figma-Plugin'
                },
                body: JSON.stringify({
                    message: msg.commitMessage,
                    content: msg.content,
                    sha: msg.sha
                })
            });

            if (response.status === 200 || response.status === 201) {
                figma.ui.postMessage({ type: 'GITHUB_PUSH_SUCCESS' });
                figma.notify('HackMD documentation sync completed!');
            } else {
                throw new Error(`GitHub rejected save with status ${response.status}`);
            }
        } catch (err) {
            figma.ui.postMessage({ type: 'ERROR', message: 'GitHub Push Failed: ' + String(err) });
        }
    }
};