// function that takes a astring and returns its longest substring without duplicate characters.
const longestSubstringWithoutDuplication = (string) => {
    let longestSubstring = '';
    let answer = [0, 1];
    let dict = {};
    let pointer = 0;
    for (let i = 0; i < string.length-1; i++) {
        dict = {};
        dict[string[i]] = 'yes';
        longestSubstring = string[i];
        pointer = i+1;
        while (!(dict.hasOwnProperty(string[pointer]))) {
            dict[string[pointer]] = 'yes';
            pointer++;
            if ((answer[1] - answer[0]) < (pointer - i)) {
                answer = [i, pointer];
            }
            
        }
    }
    for (let x = answer[0]; x < answer[1]; x++) {
        if (x !== string.length) {
        longestSubstring = longestSubstring + string[x];
        }
    }
    return longestSubstring;

}
let string = 'cdcabefghs';
console.log(longestSubstringWithoutDuplication(string));
