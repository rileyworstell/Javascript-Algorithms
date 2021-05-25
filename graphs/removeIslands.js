/*
you're give a two-dimensional array of potentially unequal height
and width containing only 0s and 1s. The matrix represents a 
two-toned image, where each 1 represents black and each 0 represents 
white. An island is defined as any number of 1s that are horizontally 
or vertically adjacent (not diagonal) that don't touch the border.
*/

function removeIslands(matrix) {
    for (let i = 0; i < matrix.length-1; i++) {
        for (let j = 0; j < matrix[0].length-1; j++) {
            let point = [i, j]
            if (matrix[i][j] === 1) {
                let x = isIsland(matrix, point);
                if (typeof x === 'object') {
                    matrix = removeCurrentIsland(matrix, x);
                }
            } 
        }
    }
    return matrix;
}

function isIsland(matrix, point, returnValue=true) {
    // get edges so if i or j === 0 or i or j is === matrix.length - 1 or j === matrix[0].length - 1
    let queue = [point];
    let prevVisited = {};
    while (queue.length !== 0 && returnValue === true) {
        point = queue[0];
        prevVisited[`${point[0]},${point[1]}`] = true;
        if (point[0] === 0 || point[0] === matrix.length-1 || 
            point[1] === 0 || point[1] === matrix[0].length-1) {
                returnValue = false;
            } else {
                if (point[0] - 1 >= 0 && matrix[point[0]-1][point[1]] === 1 && prevVisited[`${point[0]-1},${point[1]}`] !== true) { 
                    queue.push([point[0]-1, point[1]]); 
                } // up
                if (point[0] + 1 <= matrix.length - 1 && matrix[point[0]+1][point[1]] === 1 && prevVisited[`${point[0]+1},${point[1]}`] !== true) {
                    queue.push([point[0]+1, point[1]]);
                } // down
                if (point[1] - 1 >= 0 && matrix[point[0]][point[1]-1] === 1 && prevVisited[`${point[0]},${point[1]-1}`] !== true) {
                    queue.push([point[0], point[1]-1]);
                } // right
                if (point[1] + 1 <= matrix[0].length - 1 && matrix[point[0]][point[1]+1] === 1 && prevVisited[`${point[0]},${point[1]+1}`] !== true) {
                    queue.push([point[0], point[1]+1]);
                } // left
            }
            queue.shift();
    }
    if (returnValue === true) {
        return [returnValue, prevVisited];
    }
    return returnValue;
}

function removeCurrentIsland(matrix, pointDict) {
    let x = pointDict[1];
    for (var property in x) {
        let index = property.indexOf(',');
        let num1 = parseInt(property.slice(0, index));
        let num2 = parseInt(property.slice(index+1));
        matrix[num1][num2] = 0;
    }
    return matrix;
}


let matrix = [
    [1, 0, 0, 0, 0, 0],
    [0, 1, 0, 1, 1, 1],
    [0, 0, 1, 0, 1, 0],
    [1, 1, 0, 0, 1, 0],
    [1, 0, 1, 1, 0, 0],
    [1, 0, 0, 0, 0, 1],
];
console.log(removeIslands(matrix));
/* Return Value Expected
[
  [ 1, 0, 0, 0, 0, 0 ],
  [ 0, 0, 0, 1, 1, 1 ],
  [ 0, 0, 0, 0, 1, 0 ],
  [ 1, 1, 0, 0, 1, 0 ],
  [ 1, 0, 0, 0, 0, 0 ],
  [ 1, 0, 0, 0, 0, 1 ]
]
*/
