// given an array of integers between 1 and n, inclusive, where n is the length of the array, write a function that returns the first integer that appears more than once (when the array is read from left to right)

// const firstDuplicateValue = (array) => {
//     let checker = [];
//     for (var i = 0; i < array.length; i++) {
//         if (checker.includes(array[i])) {
//             return array[i]
//         } else {
//             checker.push(array[i]);
//         }
//     }
//     return -1;
// }

const firstDuplicateValue = (array) => {
    let index;
    for (var i = 0; i < array.length; i++) {
        index = Math.abs(array[i]) - 1;
        if (array[index] < 0) {
            return Math.abs(array[i]);
        }
        array[index]= array[index]*-1;
    }
    return -1;
}

let array = [2, 1, 5, 2, 3, 3, 4];
console.log(firstDuplicateValue(array));
