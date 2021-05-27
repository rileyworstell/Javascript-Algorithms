/*
Write a function that takes in the head of a Singly Linked List that contains a loop
The function should return the node from which the loop originates in constant space.
Each LinkedList node has an integer value as well as a next node.
*/

class LinkedList {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

// O(n) time & O(1) Space
function findLoop(head) {
    onePointer = head.next;
    twoPointer = head.next.next;
    while  (onePointer !== twoPointer) {
        onePointer = onePointer.next;
        twoPointer = twoPointer.next.next;
    }
    onePointer = head;
    while (onePointer !== twoPointer) {
        onePointer = onePointer.next;
        twoPointer = twoPointer.next;
    }
    return twoPointer;
}

let myLinkedList = new LinkedList(0);
myLinkedList.next = new LinkedList(1);
myLinkedList.next.next = new LinkedList(2);
myLinkedList.next.next.next = new LinkedList(3);
myLinkedList.next.next.next.next = new LinkedList(4);
myLinkedList.next.next.next.next.next = new LinkedList(5);
myLinkedList.next.next.next.next.next.next = new LinkedList(6);
myLinkedList.next.next.next.next.next.next.next = new LinkedList(7);
myLinkedList.next.next.next.next.next.next.next.next = new LinkedList(8);
myLinkedList.next.next.next.next.next.next.next.next.next = new LinkedList(9);
myLinkedList.next.next.next.next.next.next.next.next.next.next = myLinkedList.next.next.next.next;
console.log(findLoop(myLinkedList));
// returns node at 4
