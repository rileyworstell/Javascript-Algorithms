/*
Write a function that takes in a string of lowercase letters and returns the index of the string's first non-repeating character.
*/

// O(n) time && O(1) space
function firstNonRepeatingCharacter(string) {
    let letters = {};
    for (let i = 0; i < string.length; i++) {
        if (letters[string[i]] === undefined) {
            letters[string[i]] = 1;
        } else {
            letters[string[i]] += 1;
        }
    }
    for (let j = 0; j < string.length; j++) {
        if (letters[string[j]] === 1) {
            return j;
        }
    }
    return -1;
}

console.log(firstNonRepeatingCharacter('abcdcaf')); // 1 b
