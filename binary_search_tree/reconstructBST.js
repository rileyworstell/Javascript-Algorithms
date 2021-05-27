/*
Given non-empty array of integers representing the pre-order traversal of a BST, write a 
function that creates the relevant BST and returns its root node.
*/

class BST {
    constructor(value, left = null, right = null) {
        this.value = value;
        this.left = left;
        this.right = right;
    }
}

function reconstructBst(preOrderTraversalValues) {
    if (preOrderTraversalValues.length === 1) return new BST(preOrderTraversalValues[0]);
    return bstHelper(preOrderTraversalValues);
}

function bstHelper(values, parentNode=null) {
    if (parentNode === null) return bstHelper(values.slice(1), new BST(values[0]))
    if (values.length === 0) return;
    let currentVal = parentNode.value;
    let i = 0;
    while (currentVal > values[i]) {
        i++;
    }
    if (i > 0) {
        parentNode.left = new BST(values[0])
        bstHelper(values.slice(1, i), parentNode.left);
    }
    if (i < values.length) {
        parentNode.right = new BST(values[i]);
        bstHelper(values.slice(i+1), parentNode.right);
    }

    return parentNode;
}

let vals = [10, 4, 2, 1, 5, 17, 19, 18];
// let vals = [10, 4, 2, 17, 18];
console.log(reconstructBst(vals));
// returns BST of the arr
