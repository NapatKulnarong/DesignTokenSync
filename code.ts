figma.showUI(__html__, { width: 400, height: 500 });

figma.ui.onmessage = async (msg) => {
    if (msg.type === 'EXTRACT_TOKENS') {
        try {
            const variables = await figma.variables.getLocalVariablesAsync();
            const collections = await figma.variables.getLocalVariableCollectionsAsync();
            
            if (variables.length === 0) {
                figma.ui.postMessage({
                    type: 'ERROR',
                    message: 'Zero local variables found in this Figma file.'
                });
                return;
            }

            // Create a quick lookup map of ID -> Name to resolve aliases instantly
            const variableMap = new Map<string, string>();
            variables.forEach(v => {
                const collection = collections.find(c => c.id === v.variableCollectionId);
                const colPrefix = collection ? collection.name.toLowerCase().replace(/\s+/g, '-') : '';
                // Standardize naming mapping format to track paths
                variableMap.set(v.id, `${colPrefix}.${v.name.replace(/\//g, '.')}`);
            });

            // Helper function to process values and catch embedded aliases
            const resolveTokenValue = (val: any) => {
                if (val && val.type === "VARIABLE_ALIAS") {
                    const mappedName = variableMap.get(val.id);
                    return mappedName ? `{${mappedName}}` : `{alias_ref_id: ${val.id}}`;
                }
                // Return fallback RGB logic
                if (val && val.r !== undefined) {
                    const toHex = (n: number) => {
                        const hex = Math.round(n * 255).toString(16);
                        return hex.length === 1 ? '0' + hex : hex;
                    };
                    return `#${toHex(val.r)}${toHex(val.g)}${toHex(val.b)}`.toUpperCase();
                }
                return String(val);
            };

            const extractedTokens = [];
            for (const variable of variables) {
                if (variable.resolvedType === 'COLOR') {
                    const collection = collections.find(c => c.id === variable.variableCollectionId);
                    const collectionName = collection ? collection.name : "unknown";
                    
                    // Remap modes cleanly
                    const formattedValues: { [key: string]: string } = {};
                    Object.entries(variable.valuesByMode).forEach(([modeId, rawValue]) => {
                        formattedValues[modeId] = resolveTokenValue(rawValue);
                    });
                    
                    extractedTokens.push({
                        name: variable.name,
                        collection: collectionName,
                        values: formattedValues
                    });
                }
            }

            figma.ui.postMessage({
                type: 'TOKENS_EXTRACTED',
                payload: extractedTokens
            });

        } catch (err) {
            const errorMessage = err instanceof Error ? err.message : String(err);
            figma.ui.postMessage({
                type: 'ERROR',
                message: 'Backend crashed: ' + errorMessage
            });
        }
    }
};