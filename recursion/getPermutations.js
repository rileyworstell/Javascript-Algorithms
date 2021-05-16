
/* 
Write a function that takes in an array of unique ints and
returns an array of all permutations of those integers in no particular order.
*/

function getPermutations(arr) {
    let result = [];
    let current = [];
    permutationHelper(result, current, arr);
    return result;
}

function permutationHelper(result, current, arr) {
    // if the array is empty it means we have a valid permutation
    if (arr.length === 0) {
        result.push(current);
    } else {
        for (let i = 0 ; i < arr.length; i++) {
            // create new array with the index from the above loop removed
            // ex: [2, 3], [1, 3], [1, 2]
            let newArr = arr.slice(0, i).concat(arr.slice(i+1));
            // take your current array and add what was left out from the above
            let newPerm = current.concat(arr[i]);
            permutationHelper(result, newPerm, newArr);

        }
        return current;
    }
}

console.log(getPermutations([1, 2, 3]));
//[[1, 2, 3], [1, 3, 2], [2, 1, 3], [2, 3, 1], [3, 1, 2], [3, 2, 1]]


// function getAll(arr) {
//     let results = [];
//     for (x of arr) {
//         for (y of arr) {
//             for (z of arr) {
//                 if (x !== y && y !== z && x !== z) {
//                     results.push([x, y, z]);
//                 }
//             }
            
//         }
//     }
//     return results;
// }
// console.log(getAll([1, 2, 3]));