/* 
Given two positive integers representing the height of a staircase and the max number of steps
you can advance at any given time, write a function the returns the number of ways in which you can climb the stairs.
maxSteps <= height is always true.
*/

// O(k^n) time n is height of tree. O(n) space from the stack
// function staircaseTraversal(height, maxSteps) {
//     let count = 0;
//     count = stairHelper(height, maxSteps, count);
//     return count;
// }

// function stairHelper(height, maxSteps, count) {
//     if (height <= 1) {
//         count = 1;
//     } else {
//         let adder = 0;
//         for (let i = 1; i < maxSteps+1; i++) {
//             adder = adder + stairHelper(height - i, maxSteps, count);
//         }
//         count = count + adder;
//     }
//     return count;
// }

// O(k*n) time ITERATIVE APPROACH
function staircaseTraversal(height, maxSteps) {
    let current = [...Array(height+1).keys()].map(() => 0);
    current[0] = 1;
    current[1] = 1;
    for(let i = 2; i < current.length; i++) {
        let newVal = 0;
        for(let j=1; j < maxSteps+1; j++) {
            if (i >= j) {
                newVal += current[i-j];
            }
        }
        current[i] = newVal;
    }
    return current[height];
}



console.log(staircaseTraversal(1 ,2)); // height of 1 - [1] - 1
console.log(staircaseTraversal(2 ,2)); // height of 2 - [1, 1] [2] - 2 -- 2 ^ 2
console.log(staircaseTraversal(3 ,2)); // height of 3 - [1, 1, 1], [2, 1], [1, 2] - 3
console.log(staircaseTraversal(4 ,2)); // height of 3 - [1, 1, 1, 1], [2, 1, 1], [1, 1, 2], [2, 2], [1, 2, 1] - 5
console.log(staircaseTraversal(4 ,3));
