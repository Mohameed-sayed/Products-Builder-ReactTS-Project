/**
 * 
 * @param {string} txt -The input text to be slice
 * @param {number} [maxlen=50] -The Maximum length before Sliced
 * @returns -text after sliced with (...)
 */
export function txtslicer(txt: string, maxlen: number = 50) {
    if (txt.length >= maxlen) return `${txt.slice(0, maxlen)} ...`;
    return txt
}