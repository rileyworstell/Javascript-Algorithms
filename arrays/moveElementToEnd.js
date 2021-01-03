// given an array of integers and an integer. write a function that moves all instances fo that integer in the array to the end of the array and returns that array.
// The function should perform this in place and doesn't need to maintain the orders of the other integers.

const moveElementToEnd = (array, toMove) => {
    let rPointer = array.length - 1;
    let lPointer = 0;
    while (rPointer > lPointer) {
        if (array[rPointer] === toMove) {
            rPointer--;
        }
        else if (array[lPointer] === toMove) {
            [array[lPointer], array[rPointer]] = [array[rPointer], array[lPointer]];
            lPointer++;
        } else {
            lPointer++;
        }
    }
    return array;
}

let array = [2, 1, 2, 2, 2, 3, 4, 2];
let toMove = 2;
// [1, 3, 4, 2, 2, 2, 2, 2]
console.log(moveElementToEnd(array,toMove));