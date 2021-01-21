// given a string, return longest palindromic substring.

const longestPalindromicSubstring = (string) => {
    let longest = '';
    for (let i = 0; i < string.length; i++) {
        for (let j = i; j < string.length; j++) {
            const substring = string.slice(i, j+1);
            if (substring.length > longest.length && isPalindrome(substring)) {
                longest = substring;
            }
        }
    }
    return longest;
}

const isPalindrome = (string) => {
    let lPointer,rPointer;
    if (string.length % 2 === 1) {
        lPointer = Math.floor(string.length / 2) - 1;
        rPointer = (Math.floor(string.length / 2)) + 1;
    } else {
        lPointer = (string.length / 2) - 1;
        rPointer = (string.length / 2);
    }
    while (lPointer > -1) {
        if (string[lPointer] !== string[rPointer]) {
            return false;
        }
        lPointer--;
        rPointer++;
    }
    return true;   
}

let string = 'z234a5abbba54a32z';
console.log(longestPalindromicSubstring(string));
