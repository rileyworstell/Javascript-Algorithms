/*
Given an array of positive integers representing coin denominations and a 
single non-negative integer n representing a target amount of money, write a function that
returns the smallest number of coins needed to make change for that target.
*/


// O(nd) time & O(n) space
function minNumberOfCoinsForChange(n, denoms) {
    let arr = [...Array(n+1).keys()].map(() => null);
    arr[0] = 0;
    for (let i = 0; i < denoms.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (denoms[i] <= j) {
                let numOfCoins = null;
                let remainder = j - denoms[i];
                if (arr[remainder] !== null) {
                    numOfCoins = 1 + arr[remainder];
                }
                if (arr[j] === null){
                    arr[j] = numOfCoins;
                } else {
                    if (numOfCoins !== null) arr[j] = Math.min(arr[j], numOfCoins);
                }
            }
        }
    }
    if (arr[n] === null) return -1;
    return arr[n];
}

let n = 7;
let denoms = [1, 5, 10];
console.log(minNumberOfCoinsForChange(n, denoms));
// 3 2x1 + 1x5
