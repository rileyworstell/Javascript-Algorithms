/*
Write a function that takes a binary tree as well as a node contained in that 
tree and returns the given node's successor. A node's succesor is the next node to be visited when
traversing its tree uning in-order traversal.
A node has no successor if it's the last node to be visited.
*/

class BinaryTree {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
        this.parent = null;
    }
}

// O(h) time && O(1) space where h is the height of the binary tree.
function findSuccessor(tree, node) {
    if (node.right !== null) return getLeftChild(node.right);
    return getRightParent(node);
}

function getLeftChild(node) {
    let currentNode = node;
    while (currentNode.left !== null) {
        currentNode = currentNode.left;
    }
    return currentNode;
}

function getRightParent(node) {
    let currentNode = node;
    while (currentNode.parent !== null && currentNode.parent.right === currentNode) {
        currentNode = currentNode.parent;
    }
    return currentNode.parent;
}


const tree = new BinaryTree(1);
tree.right = new BinaryTree(3);
tree.left = new BinaryTree(2);
tree.left.right = new BinaryTree(5);
tree.left.left = new BinaryTree(4);
tree.left.left.left = new BinaryTree(6);
const node = 5;
console.log(findSuccessor(tree, node)); // 1


/*
        1
      2    3
    4   5
  6
*/
