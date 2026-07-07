figma.showUI(__html__, { width: 450, height: 550 });

const REPO_OWNER = "NapatKulnarong";
const REPO_NAME = "DesignTokenSync";
const FILE_PATH = "DESIGN.md";

figma.ui.onmessage = async (msg) => {
    // Save token securely when submitted from UI
    if (msg.type === 'SAVE_TOKEN') {
        await figma.clientStorage.setAsync('gh_token', msg.token);
        figma.notify("Token saved securely to local storage!");
        return;
      }

    // 1. FETCH FROM GITHUB
    if (msg.type === 'FETCH_FROM_GITHUB') {
        const url = `https://api.github.com/repos/${REPO_OWNER}/${REPO_NAME}/contents/${FILE_PATH}`;
        try {
            // Pull token from secure local storage dynamically
            const secureToken = await figma.clientStorage.getAsync('gh_token');
            if (!secureToken) {
                throw new Error("Missing Token! Please enter your GitHub PAT in the input box below.");
            }

            const response = await fetch(url, {
                method: 'GET',
                headers: { 
                    'Authorization': `Bearer ${secureToken}`,
                    'Accept': 'application/vnd.github.v3+json',
                    'User-Agent': 'Figma-Token-Sync-Plugin'
                }
            });

            if (response.status === 401) {
                throw new Error("401 Unauthorized: The token stored in Figma is invalid or expired.");
            } else if (response.status !== 200) {
                throw new Error(`GitHub returned status code ${response.status}`);
            }

            const data = await response.json();
            figma.ui.postMessage({ type: 'GITHUB_FETCH_SUCCESS', payload: data });
        } catch (err) {
            figma.ui.postMessage({ type: 'ERROR', message: String(err) });
        }
    }

    // 2. EXTRACT ALL COLLECTIONS COMBINED
    if (msg.type === 'EXTRACT_ALL_TOKENS') {
        try {
            const variables = await figma.variables.getLocalVariablesAsync();
            const collections = await figma.variables.getLocalVariableCollectionsAsync();

            const extractedTokens = [];
            for (const variable of variables) {
                if (variable.resolvedType === 'COLOR') {
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

    // 3. PUSH TO GITHUB
    if (msg.type === 'PUSH_TO_GITHUB') {
        const url = `https://api.github.com/repos/${REPO_OWNER}/${REPO_NAME}/contents/${FILE_PATH}`;
        try {
            const secureToken = await figma.clientStorage.getAsync('gh_token');
            const response = await fetch(url, {
                method: 'PUT',
                headers: { 
                    'Authorization': `Bearer ${secureToken}`, 
                    'Content-Type': 'application/json',
                    'Accept': 'application/vnd.github.v3+json',
                    'User-Agent': 'Figma-Token-Sync-Plugin'
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