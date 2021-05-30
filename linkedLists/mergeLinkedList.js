/*
Write a function that takes in the head of two Singly Linked Lists that are in sorted order.
The function should merge the lists in place and return the head of the merged list.
*/

class LinkedList {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

function mergeLinkedLists(headOne, headTwo) {
    let iterList = headOne.value > headTwo.value ? headOne : headTwo;
    let inPlace = headOne.value > headTwo.value ? headTwo : headOne;
    let inPlacePointer = headOne.value > headTwo.value ? headTwo : headOne;
    while (iterList !== null) {
        if (inPlacePointer.value <= iterList.value && (inPlacePointer.next === null || inPlacePointer.next.value > iterList.value)) {
                prevNext = inPlacePointer.next;
                inPlacePointer.next = new LinkedList(iterList.value);
                inPlacePointer.next.next = prevNext;
                iterList = iterList.next;
        } else {
            inPlacePointer = inPlacePointer.next;
        }
    }
    return inPlace;
}

let headOne = new LinkedList(2);
headOne.next = new LinkedList(6);
headOne.next.next = new LinkedList(7);
headOne.next.next.next = new LinkedList(8);
let headTwo = new LinkedList(1);
headTwo.next = new LinkedList(3);
headTwo.next.next = new LinkedList(4);
headTwo.next.next.next = new LinkedList(5);
headTwo.next.next.next.next = new LinkedList(9);
headTwo.next.next.next.next.next = new LinkedList(10);
console.log(mergeLinkedLists(headOne, headTwo));
// 1 -> 2 -> 3 -> 4 -> 5 -> 6 -> 7 -> 8 -> 9 -> 10
