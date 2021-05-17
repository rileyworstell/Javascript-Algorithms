/*
Given an array of positive integers representing values of coins in your possession,
write a functions that returns the minimum amount of change that you cannot create.
Given coins can have any positive integer value and you can have multiple coins of same value.
*/

// O(nlogn) time && O(1) space
function nonConstructibleChange(coins) {
    let sortedCoins = coins.sort((a, b) => a-b);
    let currentMinimum = 0;
    for (let i = 0; i < sortedCoins.length; i++) {
        if (sortedCoins[i] > currentMinimum + 1) return currentMinimum + 1;
        currentMinimum += sortedCoins[i];
    }
    return currentMinimum + 1;
}

let arr = [5, 7, 1, 1, 2, 3, 22];
console.log(nonConstructibleChange(arr));
// 20
