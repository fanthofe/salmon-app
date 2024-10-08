export function getClientId (url: string): number {
    return parseInt(url.split('/').at(-2)!, 10);
}

export function ToCapitalize(word: string) {
    if (!word) return word;
    return word[0].toUpperCase() + word.substring(1, word.length).toLowerCase();
}