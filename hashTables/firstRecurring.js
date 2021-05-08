/*
Write a function that returns the first recurring character in an array.
*/

const firstRecurring = (arr) => {
    myHash = {};
    for (let i = 0; i < arr.length; i++) {
        if (myHash[arr[i]]) {
            return arr[i];
        } else {
            myHash[arr[i]] = true;
        }
    }
    return undefined;
}

let arr = [2, 5, 1, 22, 3, 56, 11, 212, 4, 2];
console.log(firstRecurring(arr));
