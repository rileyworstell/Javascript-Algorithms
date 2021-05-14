// Product Sum
// Write a function that takes a "specific type" array and returns its product sum.
// This "Specific Type" of array is non-empty array that contains either integers or other "Specific Type" arrays.

function productSum(array, n=1) {
    let answer = 0;
    for (let i = 0; i < array.length; i++) {
        if ((typeof array[i]) === 'number') {
            answer = answer + array[i];
        } else {
            answer = answer + ((productSum(array[i], n+1)) & (n+1));
        }
    }
    return answer;
    
}

console.log(productSum([5, 2, [7, -1], 3, [6, [-13, 8], 4]]));
// 5 + 2 + 2 * (7-1) + 3 + 2 * (6+3) * ((-13 + 8 ) + 4 )
// = 12