/*
Write a function that takes in the head of a Singly Linked list, and reverses the list in place.
*/

class LinkedList {
    constructor(value) {
        this.value = value;
        this.next = null
    }
}

function reverseLinkedList(head) {
    let arr = [];
    let currentNode = head;
    while (currentNode !== null) {
        arr.push(currentNode.value);
        currentNode = currentNode.next;
    }
    arr.reverse();
    let wholeLinkedList = head;
    currentNode = head;
    let i = 0;
    while (currentNode !== null) {
        currentNode.value = arr[i];
        i++;
        currentNode = currentNode.next;
    }
    return wholeLinkedList;
}

let myLinkedList = new LinkedList(0);
myLinkedList.next = new LinkedList(1);
myLinkedList.next.next = new LinkedList(2);
myLinkedList.next.next.next = new LinkedList(3);
myLinkedList.next.next.next.next = new LinkedList(4);
myLinkedList.next.next.next.next.next = new LinkedList(5);
console.log(reverseLinkedList(myLinkedList));
// 5 -> 4 -> 3 -> 2 -> 1 -> 0
