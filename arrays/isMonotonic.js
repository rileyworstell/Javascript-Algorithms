// write a function that takes in an array of integers and returns a boolean representing whether the array is monotonic.
// an array is monotonic if its elements, from the left to right, are entirely non-increasing or entirely non-decreasing.

const isMonotonic = (array) => {
    let x = 0;
    while (array[x] === array[x+1]) {
        if (x >= array.length) {
            return true;
        }
        x++;
    }
    if (array[x] > array[x+1]) {
        for (var i = 0; i < array.length-1; i++) {
            if (array[i] < array[i+1]) {
                return false;
            }
        }
    } else if (array[x] < array[x+1]) {
        for (var i = 0; i < array.length-1; i++) {
            if (array[i] > array[i+1]) {
                return false;
            }            
        }
    }
    return true;
}

let array = [-1, 5, -10, -100, -1111];
console.log(isMonotonic(array));