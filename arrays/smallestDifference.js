//
// function that takes 2 non empty arrays of integers
// finds the pair of numbers (one from each array) whose
// absolute difference is closest to zero, and returns an array containing these two numbers
// with the number from the first array in the first position.

const smallestDifference = (arrayOne, arrayTwo) => {
    arrayOne.sort((a, b) => a - b);
    arrayTwo.sort((a, b) => a - b);
    let pointerOne = 0;
    let pointerTwo = 0;
    let answer;
    let sum = 10000000;
    while ((pointerOne < arrayOne.length) && (pointerTwo < arrayTwo.length)) {

        if (sum > Math.abs(arrayOne[pointerOne] - arrayTwo[pointerTwo])) {
            answer = [arrayOne[pointerOne], arrayTwo[pointerTwo]];
            sum = Math.abs(arrayOne[pointerOne] - arrayTwo[pointerTwo]);
        }
        // increment either pointerOne or pointerTwo
        if (arrayOne[pointerOne] < arrayTwo[pointerTwo]) {
            pointerOne++;
        } else {
            pointerTwo++;
        }
        
    }
    return answer;
}

let arrayOne = [-1, 5, 10, 20, 28, 3];
let arrayTwo = [26, 134, 135, 15, 17];
console.log(smallestDifference(arrayOne,arrayTwo)); // 28, 26
