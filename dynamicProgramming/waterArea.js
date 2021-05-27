/*
    Given an array of non-negative integers where each non-zero integer represents the height of a pillar of width 1.
    Imagine water being poured over all of the pillars; write a function that returns the surface area of the water
    trapped between the pillars viewed from the front. Spilled water should be ignored.
*/

// O(n) time & O(n) space where n is length of heights array
function waterArea(heights) {
    let leftMax = [...Array(heights.length).keys()].map(() => null);
    let rightMax = [...Array(heights.length).keys()].map(() => null);
    let localLeftMax = 0;
    let localRightMax = 0;
    let j = heights.length-1;
    for (let i = 0; i < heights.length; i++) {
        j = heights.length-1 - i;

        leftMax[i] = localLeftMax;
        localLeftMax = Math.max(localLeftMax, heights[i]);

        rightMax[j] = localRightMax;
        localRightMax = Math.max(localRightMax, heights[j]);
    }
    let water = [];
    let minHeight = 0;

    for (let x = 0; x < heights.length; x++) {
        minHeight = Math.min(leftMax[x], rightMax[x]);
        if (heights[x] < minHeight) {
            water.push(minHeight - heights[x]);
        } else {
            water.push(0);
        }
    }
    if (water.length === 0) return 0;
    return water.reduce((a, b) => a + b);
}

let heights = [0, 8, 0, 0, 5, 0, 0, 10, 0, 0, 1, 1, 0, 3];
console.log(waterArea(heights));

/*
48

// Below is a visual representation of the sample input.
// The dots and vertical lines represent trapped water and pillars, respectively.
// Note that there are 48 dots.
//        |
//        |
//  |.....|
//  |.....|
//  |.....|
//  |..|..|
//  |..|..|
//  |..|..|.....|
//  |..|..|.....|
// _|..|..|..||.|
*/
