export function getClientId (url: string): number {
    return parseInt(url.split('/').at(-2)!, 10);
}

export function ToCapitalize(word: string) {
    if (!word) return word;
    return word[0].toUpperCase() + word.substring(1, word.length).toLowerCase();
}

export function formatDate(date: Date|string) {
    if (typeof date === "string") {
        date = new Date(date);
    }
    
    var d = date,
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

    if (month.length < 2)
        month = '0' + month;
    if (day.length < 2)
        day = '0' + day;

    return [day, month, year].join('/');
}