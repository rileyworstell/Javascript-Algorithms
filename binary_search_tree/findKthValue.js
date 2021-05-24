/*
write function that takes in a BST and positive int k and returns the kth largest int
contained in the BST. You can assume that there will only be integer values in the BST 
and that k is less than or equal to the  number of nodes in the tree.
duplicate integers will be treated as distinct values.
*/

class BST {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

// O(n) time && O(n) space, where n is number of nodes in the tree
function findKthLargestValueInBst(tree, k) {
    let currentNode = tree;
    let bstArr = calculateBSTArr(tree);
    let val = bstArr.length - k;
    return bstArr[val];
}

function calculateBSTArr(tree, arr=[]) {
    if (tree === null) { return; }
    calculateBSTArr(tree.left, arr);
    arr.push(tree.value);
    calculateBSTArr(tree.right, arr);
    return arr;
}

let k = 3;
let tree = new BST(15);
tree.right = new BST(20);
tree.right.right = new BST(22);
tree.right.left = new BST(17);
tree.left = new BST(5);
tree.left.right = new BST(5);
tree.left.left = new BST(2);
tree.left.left.right = new BST(3);
tree.left.left.left = new BST(1);
console.log(findKthLargestValueInBst(tree, k));

/* BST from above
            15
        5         20
    2       5   17    22
1       3
*/

