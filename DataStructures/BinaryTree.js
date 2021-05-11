class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}
class BinaryTree {
    constructor() {
        this.root = null;
    }

    insert(value) {
        if (this.root === null) {
            this.root = new Node(value);
            return this;
        }
        let currentNode = this.root;
        while (currentNode.value !== null) {
            if (value >= currentNode.value) { // go right
                if (currentNode.right !== null) {
                    currentNode = currentNode.right;
                } else {
                    currentNode.right = new Node(value);
                    return this;
                }
            } else { // go left
                if (currentNode.left !== null) {
                    currentNode = currentNode.left;
                } else {
                    currentNode.left = new Node(value);
                    return this;
                }
            }
        }
    };

    lookup(value) {
        if (this.root === null) {
            return;
        }
        let currentNode = this.root;
        if (value === currentNode.value) { return value; }
        while (currentNode !== null) {
            if (value === currentNode.value) { return value; }
            if (value >= currentNode.value) {
                if (currentNode.right === null) {
                    return;
                } else {
                    currentNode = currentNode.right;
                }
            }  else {
                if (currentNode.left === null) {
                    return;
                } else {
                    currentNode = currentNode.left;
                }
            }
        }
    }

    remove(value)  {
        if (!this.root) {
            return false;
        }
        let currentNode = this.root;
        let parentNode = null;
        while (currentNode) {
            if (value < currentNode.value) {
                parentNode = currentNode;
                currentNode = currentNode.left;
            } else if (value > currentNode.value) {
                parentNode = currentNode;
                currentNode = currentNode.right;
            } else if (currentNode.value === value) {

                if (currentNode.right === null) {
                    if (parentNode === null) {
                        this.root = currentNode.left;
                    } else {
                        if (currentNode.value < parentNode.value) {
                            parentNode.left = currentNode.left;
                        } else if (currentNode.value > parentNode.value) {
                            parentNode.right = currentNode.left;
                        }
                    }
                } else if (currentNode.right.left === null) {
                    if (parentNode === null) {
                        this.root = currentNode.left;
                    } else {
                        currentNode.right.left = currentNode.left;
                        if (currentNode.value < parentNode.value) {
                            parentNode.left = currentNode.right;
                        } else if (currentNode.value > parentNode.value) {
                            parentNode.right = currentNode.right;
                        }
                    }
                } else {
                    let leftmost = currentNode.right.left;
                    let leftmostParent = currentNode.right;
                    while(leftmost.left !== null) {
                        leftmostParent = leftmost;
                        leftmost = leftmost.left;
                    }
                    leftmostParent.left = leftmost.right;
                    leftmost.left = currentNode.left;
                    leftmost.right = currentNode.right;
                    if (parentNode === null) {
                        this.root = leftmost;
                    } else {
                        if (currentNode.value < parentNode.value) {
                            parentNode.left = leftmost;
                        } else if (currentNode.value > parentNode.value) {
                            parentNode.right = leftmost;
                        }
                    }
                }   
                return true;
            }
        }
    }

    traverse(node, height=0) {
        console.log('value: ', node.value, ' height: ', height);
        if (node.left) { console.log('left: ', node.left.value) };
        if (node.right) { console.log('right: ', node.right.value)};
        console.log('-----------------');
        if (node.left) { this.traverse(node.left, height+1);}
        if (node.right) { this.traverse(node.right, height+1);}
    }

}



let BST = new BinaryTree();
BST.insert(11);
BST.insert(2);
BST.insert(33);
BST.insert(36);
BST.insert(4);
BST.insert(6);
BST.insert(10);
console.log('\n\n\n\n');
BST.traverse(BST.root);
BST.remove(6);
console.log('\n\n\n\n');
BST.traverse(BST.root);
