// write a function that takes in a non empty string and returns a boolean representing whether it is a palindrome.
const isPalindrome = (array) => {
    let lPointer,rPointer;
    if (array.length % 2 === 1) {
        lPointer = Math.floor(array.length / 2) - 1;
        rPointer = (Math.floor(array.length / 2)) + 1;
    } else {
        lPointer = (array.length / 2) - 1;
        rPointer = (array.length / 2);
    }
    while (lPointer > -1) {
        if (array[lPointer] !== array[rPointer]) {
            return false;
        }
        lPointer--;
        rPointer++;
    }
    return true;   
}
let string = 'ab';
console.log(isPalindrome(string));
