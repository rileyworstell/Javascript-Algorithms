// given 2 non-empty arrays of integers write a function that 
// tells if the second array is a subsequence of the first.

const isValidSubsequence = (array, subsequence) => {
    let x = -1;
    let lPointer = 0;
    let arrPointer = 0
    while (lPointer < subsequence.length) {
        if (x === lPointer) {
            return false;
        }
        x = lPointer;
        for (var i = arrPointer; i < array.length; i++) {
            if (subsequence[lPointer] === array[i]) {
                lPointer++;
                arrPointer = i+1;
                i = array.length;
            }
        }
    }
    return true;
}

var arr = [5, 1, 22, 25, 6, -1, 8, 10];
var subseq = [1, 6, -1, -1];
var subseq1 = [1, 6, -1, 10];
console.log(isValidSubsequence(arr, subseq)); // false
console.log(isValidSubsequence(arr, subseq1)); // true
