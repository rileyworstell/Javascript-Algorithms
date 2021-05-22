/*
Write a function that takes in a Binary Tree and returns a list of its branch sums ordered
from leftmost branch sum to rightmost branch sum.
*/

class BinaryTree {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

function branchSums(root) {
    let sums = [];
    let currentSum = 0;
    branchHelper(root, currentSum, sums);

    return sums;
}

function branchHelper(root, currentSum, sums) {
    if (root === null) {
        return;
    }
    currentSum += root.value;
    if (root.left === null && root.right === null) {
        sums.push(currentSum);
    }
    else if (root.left !== null && root.right === null) {
        branchHelper(root.left, currentSum, sums);
    } else if (root.right !== null && root.left === null) {
        branchHelper(root.right, currentSum, sums);
    } else {
        branchHelper(root.left, currentSum, sums);
        branchHelper(root.right, currentSum, sums);
    }
}


const root = new BinaryTree(1);
root.left = new BinaryTree(2);
root.right = new BinaryTree(3);
root.right.left = new BinaryTree(6);
root.right.right = new BinaryTree(7);
root.left.right = new BinaryTree(5);
root.left.left = new BinaryTree(4);
root.left.left.left = new BinaryTree(8);
root.left.left.right = new BinaryTree(9);
root.left.right.left = new BinaryTree(10);
console.log(branchSums(root)); // [15, 16, 18, 10, 11]


/*
        1 
      2   3
    4   5  6  7
  8  9 10
*/
