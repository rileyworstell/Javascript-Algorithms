// function that takes in non-empty array of distinct integers and an integer representing a target sum. If any two numbers in the input array sum up to the target, the function should return them in an array, in any order, otherwise return an empty array.

const twoNumberSum = (array, targetSum) => {
    var containsArr = []; 
    for (var i = 0; i < array.length; i++) {
        if (containsArr.includes(targetSum-array[i]) === true) {
            return [targetSum-array[i], array[i]];
        }else {
            containsArr.push(array[i]);
        }
    }
    return [];
}

var arr = [3, 5, -4, 8, 11, 1, -1, 6];
var targetSum = 10;
console.log(twoNumberSum(arr, targetSum));