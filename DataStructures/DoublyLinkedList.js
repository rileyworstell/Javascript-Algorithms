// Doubly Linked List
class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}
class DoublyLinkedList {
    constructor(value) {
        this.head = new Node(value);
        this.tail = this.head;
        this.length = 1;
    }

    append(value) {
        this.tail.next = new Node(value);
        let prevTail = {...this.tail};
        this.tail = this.tail.next;
        this.tail.prev = prevTail;
        this.length++;
        return this;
    }

    prepend(value) {
        const newNode = new Node(value);
        newNode.next = this.head;
        this.head.prev = newNode;
        this.head = newNode;
        this.length++;
        return this;
    }

    printForward() {
        let returnString = 'null <-- ';
        returnString = returnString + this.head.value;
        let val = this.head.next;
        while (val !== null) {
            returnString = returnString + ' <--> ' + val.value;
            val = val.next;
        }
        returnString = returnString + ' --> ' + 'null';
        console.log(returnString);
    }

    printReverse() {
        let goingReverse = '';
        let cNode = this.tail;
        while (cNode.prev !== null) {
            goingReverse = goingReverse + ' <--> ' + cNode.value.toString();
            cNode = cNode.prev;
        }
        goingReverse = goingReverse + ' <--> ' + cNode.value.toString();
        console.log('null', goingReverse, 'null');
    }

}

let dLinkedList = new DoublyLinkedList(4);
dLinkedList.prepend(3);
dLinkedList.append(5);
dLinkedList.prepend(10);
dLinkedList.append(6);
dLinkedList.append(7);
dLinkedList.append(8);
dLinkedList.prepend(2);

console.log('------');
dLinkedList.printForward();
dLinkedList.printReverse();
/*
null <-- 2 <--> 10 <--> 3 <--> 4 <--> 5 <--> 6 <--> 7 <--> 8 --> null
null  <--> 8 <--> 7 <--> 6 <--> 5 <--> 4 <--> 3 <--> 10 <--> 2 null
*/
