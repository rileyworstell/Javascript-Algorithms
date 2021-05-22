/*
Given two lined lists, where each list represents a non-negative number and the first node
always represents the least significant digit of the integer.
Write a function that returns the head of a new linked list that represents the sum of the 
integers represented from the first two linked lists.
*/

class LinkedList {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

function sumOfLinkedLists(linkedListOne, linkedListTwo) {
    let arr1 = linkedListToArr(linkedListOne);
    let arr2 = linkedListToArr(linkedListTwo);
    let num1 = parseInt(arr1.join().replace(/,/gi, ''));
    let num2 = parseInt(arr2.join().replace(/,/gi, ''));
    let targetNum = num1 + num2;
    let arr = [...targetNum.toString()];
    arr.reverse();
    let returnNode = new LinkedList(parseInt(arr[0]));
    let currentNode = returnNode;
    for (let i = 1; i < arr.length; i++) {
        currentNode.next = new LinkedList(parseInt(arr[i]));
        currentNode = currentNode.next;
    }
    return returnNode;
}

function linkedListToArr(linkedList) {
    let arr = [];
    let currentNode = linkedList;
    while (currentNode.next !== null) {
        arr.push(currentNode.value);
        currentNode = currentNode.next;
    }
    arr.push(currentNode.value);
    arr.reverse();
    return arr;
}


const llOne = new LinkedList(2);
llOne.next = new LinkedList(4);
llOne.next.next = new LinkedList(7);
llOne.next.next.next = new LinkedList(1);

const llTwo = new LinkedList(9);
llTwo.next = new LinkedList(4);
llTwo.next.next = new LinkedList(5);

console.log(sumOfLinkedLists(llOne, llTwo));
// returns 1 -> 9 -> 2 -> 2
// 1742 + 549 = 2291
