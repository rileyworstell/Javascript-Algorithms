/*
Return true if the given tree is balanced and false if it is not.
*/

class BinaryTree {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

// O(n) time && O(h) space where h is height and n is number of nodes
function heightBalancedBinaryTree(tree) {
    return helper(tree, tree)[0];
}

function helper(tree, root) {
    if (tree.left === null && tree.right === null) return [true, 1];
    let leftTree = tree.left !== null ? helper(tree.left, root) : [true, 0];
    let rightTree = tree.right !== null ? helper(tree.right, root) : [true, 0];
    if (leftTree[0] === true && rightTree[0] === true) {
        if (tree.value === root.value && leftTree[0] === true && rightTree[0] === true &&
                (((Math.abs(rightTree[1] - leftTree[1]) === 0) || (Math.abs(rightTree[1] - leftTree[1]) === 1) ))){ return [true, 1];}
        if (Math.abs(rightTree[1] - leftTree[1]) === 0) {
            return [true, Math.max(leftTree[1], rightTree[1]) + 1];
        } else if (Math.abs(rightTree[1] - leftTree[1]) === 1) {
            return [true, Math.max(leftTree[1], rightTree[1]) + 1];
        } else {
            return [false, 0];
        }
    }
    return [false, 0];
}


let myTree = new BinaryTree(1);
myTree.left = new BinaryTree(2);
myTree.left.left = new BinaryTree(4);
myTree.right = new BinaryTree(3);
myTree.left.right = new BinaryTree(5);
myTree.left.right.left = new BinaryTree(7);
myTree.left.right.right = new BinaryTree(8);
myTree.right.right = new BinaryTree(6);
console.log(heightBalancedBinaryTree(myTree));
// True
