// write a function that takes in an n x m 2d array and returns a one dimensional array of all the arrays elements in a spiral order.
// spiral order starts at the top left corner of the 2d array, goes right, and proceeds in a spiral pattern all the way until evdry element has been visited.

const spiralTraverse = (matrix) => {
    let startingRow = 0;
    let startingColumn = 0;
    let endingRow = matrix.length - 1;
    let endingColumn = matrix[0].length - 1;
    let total = (endingRow+1) * (endingColumn+1);
    let answer = [];
    let r = 0;
    let c = 0;
    let direction = 'right';
    let offset = 0;

    while (answer.length < total) {
        answer.push(matrix[r][c]);
        if (direction === 'right') {
            if (c === endingColumn - offset) {
                direction = 'down';
                r++;
            }else {
                c++;
            }
        }
        else if (direction === 'down') {
            if (r === endingRow - offset) {
                direction = 'left';
                c--;
            } else {
                r++;
            }
        }
        else if (direction === 'left') {
            if (c === startingColumn + offset) {
                direction = 'up';
                offset++;
                r--;
            } else {
                c--;
            }
        } 
        else if (direction === 'up') {
            if (r === startingRow + offset) {
                direction = 'right';
                c++;
            } else {
                r--;
            }
        }
    }

    return answer;

}

let matrix = [
    [1, 2, 3, 4],
    [12, 13, 14, 5],
    [11, 16, 15, 6],
    [10, 9, 8, 7],
];
console.log(spiralTraverse(matrix));
