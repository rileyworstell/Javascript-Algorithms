// return true if string is a palindrome (this must be done recursively) (that is a string is equal to itself reversed);

// Note Javascript has built in features to reverse an array.
// if (string === string.split('').reverse().join('')) 
// So yes you could just reverse it and compare :)
function isPalindrome(string) {
    if (string.length <= 1) {
        return true;
    }
    if (string[0] === string[string.length-1]) {
        return isPalindrome(string.slice(1, string.length-1));
    } 
    return false;
}


console.log(isPalindrome('this is false')); // false
console.log(isPalindrome('racecar')); // true
console.log(isPalindrome('A whole bunch of stuff')); // false
console.log(isPalindrome('12345677654321')); // true
console.log(isPalindrome('123456777654321')); // true
