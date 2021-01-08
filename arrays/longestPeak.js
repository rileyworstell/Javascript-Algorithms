// write a function that takes an array of integers and returns the length of the longest peak in the array.
// a peak is defined as adjacent integers in the array that are strictly increasing until they rach a tip
// for example 1, 4, 10, 2 form a peak, but the integers 4, 0, 10 don't.

const longestPeak = (array) => {
    let answer = 0;
    for (var i = 1; i < array.length -1; i++) {
        let lPointer = i -1;
        let rPointer = i + 1;
        let lBeg = rBeg = -1;
        let notAPeak = false;
        if ((array[lPointer] >= array[i]) || (array[rPointer] >= array[i])) {
            notAPeak = true;
        }
        
        while (lBeg === -1 && notAPeak === false) {
            if ((array[lPointer] > array[lPointer-1]) && (lPointer >= 0)) {
                lPointer--;
            } 
            else {
                lBeg = lPointer;
            }
        }
        while (rBeg === -1 && notAPeak === false) {
            if ((array[rPointer] > array[rPointer+1]) && (rPointer <= array.length-1)) {
                rPointer++;
            }
            else {
                rBeg = rPointer;
            }
        }

        if ((notAPeak === false) && ((rPointer - lPointer) > answer)) {
            answer = rPointer - lPointer + 1;
        }
    }
    return answer;
}

let array = [1, 2, 3, 3, 4, 0, 10, 6, 5, -1, -3, 2, 3];
console.log(longestPeak(array)); // 6