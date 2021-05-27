// Binary Heap
/*
    Max Heap and  min heap - every node on the top level is higher than every node on the next level.
    Disimilar to Binary Tree because Left vs right doesn't matter.
    These are useful for comparative operations.
*/
class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}
class BinaryHeap {
    constructor() {
        this.root = null;
    }
    insert(value) {
        if (!this.root) {
            this.root = new Node(value);
        }
        else {
            
        }
    }
}

let myHeap = new BinaryHeap();
myHeap.insert(100);
console.log(myHeap);

