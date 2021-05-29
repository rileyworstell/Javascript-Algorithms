/*
Given an array of buildings and a direction that all of the buildings face, 
return an array of the indices of the buildings that can see the sunset.
A building at index i thus has a height denoted by buildings[i].
All of the buildings face the same direction, and this is either east or west.
*/


function sunsetView(buildings, direction) {
    const cBuildings = [];
    const startIdx = direction === 'EAST' ? 0 : buildings.length - 1;
    const step = direction === 'EAST' ? 1 : -1;

    let idx = startIdx;
    while (idx >= 0 && idx < buildings.length) {
        const buildingHeight = buildings[idx];

        while (cBuildings.length > 0 && buildings[cBuildings[cBuildings.length - 1]] <= buildingHeight) {
            cBuildings.pop();
        }
        cBuildings.push(idx);
        idx = idx + step;
    }
    if (direction === 'WEST') cBuildings.reverse();
    return cBuildings;
}

let buildings = [3, 5, 4, 4, 3, 1, 3, 2];
direction = "EAST";
console.log(sunsetView(buildings, direction)); // [1, 3, 6, 7]
