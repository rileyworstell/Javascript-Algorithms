/*
function that takes in a non-empty array of arbitrary intervals, merges any overlapping intervals,
and returns the new intervals in no particular order.
back to back are not overlapping so [1, 5] and [6, 7] are not 
but [1, 6] and [6, 7] are overlapping.
each beginning of any interval is stricly less than the end of that interval.
*/

function mergeOverlappingIntervals(array) {
    let sortedArr = array.sort((a, b) => a[0] - b[0]);
    for (let i = 0; i < sortedArr.length; i++) {
        if ((i !== sortedArr.length-1) && sortedArr[i][1] >= sortedArr[i+1][0]) {
            if (sortedArr[i][1] > sortedArr[i+1][1]) {
                sortedArr[i] = [sortedArr[i][0], sortedArr[i][1]];
            } else {
                sortedArr[i] = [sortedArr[i][0], sortedArr[i+1][1]];
            }
            sortedArr.splice(i+1, 1);
            i--;
        }
    };
    return sortedArr;
}

let intervals = [[1, 2], [3, 5], [4, 7], [6, 8], [9, 10]];
console.log(mergeOverlappingIntervals(intervals));
// [1, 2], [3, 8], [9, 10] in any order
