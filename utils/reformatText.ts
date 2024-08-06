export function replacePlaceholdersWithList(str: string, values: any[], formatValues: any[]): string {
    let result = str;
    for (let i = 0; i < formatValues.length; i++) {
        const placeholder = formatValues[i];
        result = result.replace(placeholder, values[i]);
    }
    return result;
}
