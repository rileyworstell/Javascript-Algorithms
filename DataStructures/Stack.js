// Stack LIFO
class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Stack {
    constructor(value) {
        this.top = null;
        this.bottom = null;
        this.length = 0;
    }

    push(value) {
        const newNode = new Node(value);
        if (this.length === 0) {
            this.top = newNode;
            this.bottom = newNode;
        } else {
            const pointer = this.top;
            this.top = newNode;
            this.top.next = pointer;
        }
        this.length++;
        return this;
    }

    pop() {
        if (!this.top) {
            return null;
        }
        if (this.top === this.bottom) {
            this.bottom = null;
        }
        this.top = this.top.next;
        this.length--;
        return this;
    }

    peek() {
        return this.top;
    } 
}

let myStack = new Stack();
myStack.push(1);
myStack.push(2);
myStack.push(3);
myStack.push(4);
myStack.pop();
console.log(myStack);

