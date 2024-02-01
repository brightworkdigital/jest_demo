export let developers = ["Abhijeet","Ayushraj","Divin","Edmund","Esra","Rui","Hannah","John","Joshua","Kadri","Maria","Maxwell","Rais","Roney","Samuel","Solonas","Stewart","Thomas"];

/**
 * Randomizes the order of an array.
 * @param originalArray The array to randomize.
 * @returns {*[]} Randomized array.
 */
export function shuffleArray(originalArray) {
    let array = [...originalArray];
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

/**
 * Returns an array of names constituting the class roster.
 * @returns {string[]} Array containing class roster names.
 */
export function getRoster() {
    // return shuffleArray(developers);
    return developers;
}
