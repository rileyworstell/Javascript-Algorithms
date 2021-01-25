//write a function that takes in an array of strings and groups anagrams together.
// anagrams are strings made up of exactlu the same letters, where order doesn't matter.

const groupAnagrams = (words) => {
    if (words.length === 0) {
        return [];
    }
    let newWords = [];
    for (let i = 0; i < words.length; i++) {
        newWords.push([words[i], i]);
    }
    let sorted = [];
    newWords.map(x => {
        sorted.push([x[0].split('').sort().join(''), x[1]]);
    });
    sorted.sort();
    let answer = [];
    let currentWord = sorted[0][0];
    let currentSubIndex = 0;
    answer.push([words[sorted[0][1]]]);
    for (let j = 1; j < words.length; j++) {
        if (sorted[j][0] === currentWord) {
            answer[currentSubIndex].push(words[sorted[j][1]]);
        } else {
            currentSubIndex++;
            currentWord = sorted[j][0];
            answer.push([]);
            answer[currentSubIndex].push(words[sorted[j][1]]);
        }
    }
    return answer;
}

// let words = ['yo', 'act', 'flop', 'tac', 'foo', 'cat', 'oy', 'olfp'];
let words = ["yo", "act", "flop", "tac", "foo", "cat", "oy", "olfp"];
// [[yo, oy], [flop, olfp], [act, tac, cat]]
console.log(groupAnagrams(words));
