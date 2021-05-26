/*
An array of integers is said to represent the binary search tree obtained by inserting each int in the array, from left to 
right, into the BST.
Write a function that takes two arrays of integers and determines whether these arrays represent the same BST.
*/


// O(n^2) time & O(n^2) space where n is the number of nodes in each array
function sameBsts(arrayOne, arrayTwo) {
    if (arrayOne.length !== arrayTwo.length) return false;
    if (arrayOne.length === 0 && arrayTwo.length === 0) return true;
    if (arrayOne[0] !== arrayTwo[0]) return false;
    let arrLesserOne = [];
    let arrLesserTwo = [];
    let arrGreaterOne = [];
    let arrGreaterTwo = [];
    for (let i = 1; i < arrayOne.length; i++) {
        if (arrayOne[i] < arrayOne[0]) arrLesserOne.push(arrayOne[i]);
        if (arrayTwo[i] < arrayTwo[0]) arrLesserTwo.push(arrayTwo[i]);
        if (arrayOne[i] >= arrayOne[0]) arrGreaterOne.push(arrayOne[i]);
        if (arrayTwo[i] >= arrayTwo[0]) arrGreaterTwo.push(arrayTwo[i]);
    }
    return sameBsts(arrLesserOne, arrLesserTwo) && sameBsts(arrGreaterOne, arrGreaterTwo);
}

let arrayOne = [10, 15, 8, 12, 94, 81, 5, 2, 11];
let arrayTwo = [10, 8, 5, 15, 2, 12, 11, 94, 81];
console.log(sameBsts(arrayOne, arrayTwo));
// true
