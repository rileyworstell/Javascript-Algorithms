/*
Write a function that takes in an array of words and returns the smallest 
array of characters needed to forma ll of the words. The characters do not need to be in any order.
*/

function minimumCharactersForWords(words) {
    let totalChars = {};
    let arr = [];
    for (const word of words) {
        let localChars = {};
        for (let i = 0; i < word.length; i++) {
            localChars[word[i]] = localChars[word[i]] === undefined ? 1 : localChars[word[i]] + 1;
        }
        // loop object
        for (const [key, value] of Object.entries(localChars)) {
            if (totalChars[key] === undefined) {
                totalChars[key] = localChars[key];
            } else if (totalChars[key] < localChars[key]) {
                totalChars[key] = localChars[key];
            }
        }
    }
    for (const [key, value] of Object.entries(totalChars)) {
        for (let i = 0; i < value; i++) {
            arr.push(key);
        }
    }
    return arr;
}

let words = ['this', 'that', 'did', 'deed', 'them!', 'a'];
console.log(minimumCharactersForWords(words));
