const threeNumberSum = (array, targetSum) => {
    array.sort(intSort);
    let lPointer;
    let rPointer;
    let currentSum;
    let answer = [];
    for (var i = 0; i < array.length; i++) {
        lPointer = i + 1;
        rPointer = array.length - 1;
        while (rPointer > lPointer) {
            currentSum = array[i] + array[lPointer] + array[rPointer];
            if (currentSum === targetSum) {
                answer.push([array[i], array[lPointer], array[rPointer]]);
                lPointer++;
                rPointer--;
            }
            else if (currentSum < targetSum) {
                lPointer++;
            }
            else if (currentSum > targetSum) {
                rPointer--;
            }
            
        }
        
    }
    return answer;
}

const intSort = (a, b) => {
    return a - b;
}

var arr = [12, 3, 1, 2, -6, 5, -8, 6];
var targetSum = 0;
console.log(threeNumberSum(arr, targetSum));
// [[-8, 2, 6], [-8, 3, 5], [-6, 1, 5]]

