//write a function that takes in a non-empty array of distinct integers and an integer representing a target sum. function should find all quadruplets in the array that sum up to the target sum and return a 2d array of all these in no particular order
const fourNumberSum = (array, target) => {
    let myDict = {};
    let answer = [];
    for (var i = 0 ; i < array.length; i++) {
        let rPointer = i + 1;
        let lPointer = i - 1;
        while (rPointer <= array.length) {
            if ((target - (array[i] + array[rPointer])) in myDict) {
                let dict = myDict[(target - (array[i] + array[rPointer]))];
                for (var j = 0; j < dict.length; j++) {
                    answer.push([dict[j][0], dict[j][1], array[i], array[rPointer]]);
                }
            }
            rPointer++;
        }
        while (lPointer > -1) {
            if ((array[i] + array[lPointer]) in myDict) {
            myDict[array[i] + array[lPointer]].push([array[i], array[lPointer]]);
            }
            else {
                myDict[array[i] + array[lPointer]] = [[array[i], array[lPointer]]];
            }
            lPointer--;
        }
    }
    return answer;
}

let array = [5, -5, -2, 2, 3, -3];
let target = 0;
console.log(fourNumberSum(array,target));
// [[7, 6, 4, -1], [7, 6, 1, 2]]
