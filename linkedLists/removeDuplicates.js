/* 
You're given the head of a Singly linked list whose nodes are in sorted order.
Return a modified version of that list that doesn't contain any duplicates.
*/

class LinkedList {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

// O(n) time, O(1) space
function removeDuplicatesFromLinkedList(linkedList) {
    let currentNode = linkedList;
    while (currentNode.next !== null) {
        while ((currentNode.next !== null) && (currentNode.value === currentNode.next.value)) {
            currentNode.next = currentNode.next.next;
        }
        if (currentNode.next === null) {
            return linkedList;
        }
        currentNode = currentNode.next;
    }
    return linkedList;
}

let myLinkedList = new LinkedList(1);
myLinkedList.next = new LinkedList(1);
myLinkedList.next.next = new LinkedList(1);
myLinkedList.next.next.next = new LinkedList(2);
myLinkedList.next.next.next.next = new LinkedList(3);
myLinkedList.next.next.next.next.next = new LinkedList(3);
myLinkedList.next.next.next.next.next.next = new LinkedList(3);
console.log(removeDuplicatesFromLinkedList(myLinkedList));
// 1 -> 2 -> 3 -> null
