//write a function that takes in a non-empty array of integers and returns an array of the same length, where each element in the output array is equal to the product of every other number in the input arrray.
// no division allowed.

const arrayOfProducts = (array) => {
    let answer = [];
    for (var i = 0; i < array.length; i++) {
        let total = 1;
        let lPointer = i - 1;
        let rPointer = i + 1;
        while (lPointer > -1) {
            total = total * array[lPointer];
            lPointer--;
        }
        while (rPointer < array.length) {
            total = total * array[rPointer];
            rPointer++;
        }
        answer.push(total);
    }
    return answer;
}

let array = [5, 1, 4, 2]; // [8, 40, 10, 20]
console.log(arrayOfProducts(array));