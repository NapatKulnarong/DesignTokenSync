figma.showUI(__html__, { width: 450, height: 550 });

// Send the available collections to the UI immediately upon opening
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
    if (msg.type === 'EXTRACT_TOKENS') {
        try {
            const variables = await figma.variables.getLocalVariablesAsync();
            const collections = await figma.variables.getLocalVariableCollectionsAsync();
            
            // Filter variables down strictly to the single collection the user chose in the UI dropdown
            const targetCollectionId = msg.collectionId;

            const extractedTokens = [];
            for (const variable of variables) {
                if (variable.resolvedType === 'COLOR' && variable.variableCollectionId === targetCollectionId) {
                    const collection = collections.find(c => c.id === variable.variableCollectionId);
                    const collectionName = collection ? collection.name : "unknown";
                    
                    const formattedValues: { [key: string]: string } = {};
                    Object.entries(variable.valuesByMode).forEach(([modeId, rawValue]) => {
                        if (rawValue && (rawValue as any).type === "VARIABLE_ALIAS") {
                            // Find parent name fallback
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
    
    if (msg.type === 'NOTIFY') {
        figma.notify(msg.message);
    }
};