/*
You are given a 2 d array of a 9x9 partially filled Sudoku board. Write a function that returns the solved sudoku board.
*/

function solveSudoku(board) {
    let frozenBoard = generateFrozenBoard(board);

    // loop through board find non frozen parts
    for (let i = 0; i < 9; i++) {
        if ( i === 4) {
            console.log('hello');
        }
        for (let j = 0; j < 9; j++) {
            if (frozenBoard[i][j] !== '*') { // if not frozen
                let x = 1;
                while (x <= 10) { // try each number and see if valid;
                    while (x === 10) { // this means that it did not find a valid point and we need to go back
                        let returnPoint = goBack(frozenBoard, i, j);
                        console.log(returnPoint, 'returnPoint');
                        board[i][j] = 0;
                        i = returnPoint[0];
                        j = returnPoint[1];
                        x = board[i][j] === 9 ? 10 : board[i][j] + 1;
                    }
                    if (isValidAtPosition(x, i, j, board) && x <= 9) {
                        board[i][j] = x;
                        frozenBoard[i][j] = x;
                        x = 10;
                    }
                    x++;
                }
            }
        }
    }
    return board;
}

function goBack(frozenBoard, row, col) {
    for (let i = row; i >= 0; i--) {
        if (i < row) col = 8;
        for (let j = col; j >= 0; j--) {
            if (frozenBoard[i][j] !== '*') {
                if (!(i === row && j === col)) {
                    return [i, j];
                }
            }
        }
    }
    return [-1, -1];
}

function generateFrozenBoard(board) {
    let frozenBoard = [...Array(9)].map(() => Array(9));
    for (let a = 0; a < 9; a++) {
        for (let b = 0; b < 9; b++) {
            frozenBoard[a][b] = board[a][b] === 0 ? 0 : '*';
        }
    }
    return frozenBoard;
}

function isValidAtPosition(value, row, col, board) {
    let r = isValidAtRowColumn(value, row, col, board);
    let square = isValidAtSquare(value, row, col, board);
    if (r === true && square === true) {
        return true;
    }
    return false;
}

function isValidAtRowColumn(value, row, col,  board) {
    for (let i = 0; i < 9; i++) {
        if (board[row][i] === value || board[i][col] === value) {
            return false;
        } 
    }
    return true;
}

function isValidAtSquare(value, row, col, board) {
    let i = Math.floor(row / 3);
    let j = Math.floor(col / 3);
    let iRange = 0;
    let jRange = 0;
    if (i === 0) iRange = [0, 2];
    if (i === 1) iRange = [3, 5];
    if (i === 2 || i === 3) iRange = [6, 8];
    if (j === 0) jRange = [0, 2];
    if (j === 1) jRange = [3, 5];
    if (j === 2 || j === 3) jRange = [6, 8];

    for (let a = iRange[0]; a < iRange[1]+1; a++) {
        for (let b = jRange[0]; b < jRange[1]+1; b++) {
            if (board[a][b] === value) {
                return false;
            }
        }
    }
    return true;
}

let board = [
    [7, 8, 0, 4, 0, 0, 1, 2, 0],
    [6, 0, 0, 0, 7, 5, 0, 0, 9],
    [0, 0, 0, 6, 0, 1, 0, 7, 8],
    [0, 0, 7, 0, 4, 0, 2, 6, 0],
    [0, 0, 1, 0, 5, 0, 9, 3, 0],
    [9, 0, 4, 0, 6, 0, 0, 0, 5],
    [0, 7, 0, 3, 0, 0, 0, 1, 2],
    [1, 2, 0, 0, 0, 7, 4, 0, 0],
    [0, 4, 9, 2, 0, 6, 0, 0, 7],
  ];

console.log(solveSudoku(board));
/*
[
  [7, 8, 5, 4, 3, 9, 1, 2, 6],
  [6, 1, 2, 8, 7, 5, 3, 4, 9],
  [4, 9, 3, 6, 2, 1, 5, 7, 8],
  [8, 5, 7, 9, 4, 3, 2, 6, 1],
  [2, 6, 1, 7, 5, 8, 9, 3, 4],
  [9, 3, 4, 1, 6, 2, 7, 8, 5],
  [5, 7, 8, 3, 9, 4, 6, 1, 2],
  [1, 2, 6, 5, 8, 7, 4, 9, 3],
  [3, 4, 9, 2, 1, 6, 8, 5, 7],
]
*/
