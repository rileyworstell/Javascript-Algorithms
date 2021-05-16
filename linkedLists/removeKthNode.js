// remove kth node from ends of singly linked list

class LinkedList {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

// O(n) time && O(1) space
function removeKthNodeFromEnd(head, k) {
    let length = 1;
    let currentNode = head;
    while (currentNode.next !== null) {
        currentNode = currentNode.next;
        length++;
    }
    if (length <= k) {
        head.value = head.next.value;
        head.next = head.next.next;
        return head;
    }

    let newLength = length - k;
    currentNode = head;
    let counter = 1;
    while (counter < newLength) {
        currentNode = currentNode.next;
        counter++;
    }
    
    if (currentNode.next !== null && currentNode.next.next !== null) {
        currentNode.next = currentNode.next.next;
    }
    else {
        currentNode.next = null;
    }

    return head;
}

let myLinkedList = new LinkedList(0);
myLinkedList.next = new LinkedList(1);
myLinkedList.next.next = new LinkedList(2);
myLinkedList.next.next.next = new LinkedList(3);
myLinkedList.next.next.next.next = new LinkedList(4);
myLinkedList.next.next.next.next.next = new LinkedList(5);
console.log(removeKthNodeFromEnd(myLinkedList, 6));
console.log(myLinkedList);
