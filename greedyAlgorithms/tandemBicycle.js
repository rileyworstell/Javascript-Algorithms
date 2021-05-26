/* Question from algoexpert.io (tried to paraphrase below).
A tandem Bicycle is one that is operated by two people, represented as A and B.
Both Pedal, but the person who pedals faster dictates the speed. tandemSpeed = max(speedA, speedB);
Given two lists of positive ints of the same length, one for A (red shirts) and one for B (blue shirts) the
goal is to pair every rider wearing a red shirt with a rider wearing a blue shirt to operate.
The function must return the maximum possible total speed or minimum possible total speed of all of the tandem bicycles being ridden based on the input parameter.
If the input parameter of 'fastest' is true it should return the max total speed, otherwise it whould return minimum total speed.
Total Speed is defined as the sum of the speeds of all the bicycles being ridden.
*/

function tandemBicycle(redShirtSpeeds, blueShirtSpeeds, fastest) {
    redShirtSpeeds.sort((a,b) => a - b);
    blueShirtSpeeds.sort((a,b) => a - b);

    if (!fastest) {
        redShirtSpeeds.reverse();
    }
    let totalSpeed = 0;
    for (let idx = 0; idx < redShirtSpeeds.length; idx++) {
        const rider1 = redShirtSpeeds[idx];
        const rider2 = blueShirtSpeeds[blueShirtSpeeds.length - idx - 1];
        totalSpeed += Math.max(rider1, rider2);
    }
    return totalSpeed;
}

let redShirtSpeeds = [5, 5, 3, 9, 2];
let blueShirtSpeeds = [3, 6, 7, 2, 1];
let fastest = true;
console.log(tandemBicycle(redShirtSpeeds, blueShirtSpeeds, fastest));
// 32 is the expected response.
