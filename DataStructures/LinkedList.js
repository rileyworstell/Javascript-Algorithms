class LinkedList {
    constructor(value) {
        this.head = {
            value: value,
            next: null
        };
        this.tail = this.head;
        this.length = 1;
    }

    append(value) {
        this.tail.next = {
            value: value,
            next: null
        };
        this.tail = this.tail.next;
        this.length++;
    }

    prepend(value) {
        this.insertAt(value, 1);
    }

    insertAt(value, index) {
        if (index === this.length + 1) {
            this.append(value);
            return;
        }
        let currentIndex = 0;
        let currentNode = this.head;
        while (currentIndex !== index - 1) {
            if (currentNode.next === null) {
                return false;
            }
            currentNode = currentNode.next;
            currentIndex++;
        }
        let placeHolderNode = {...currentNode};
        currentNode.value = value;
        currentNode.next = placeHolderNode;
        this.length++;
    }

    remove(index) {
        if (index > this.length - 1) {
            return;
        }
        if (index === 0) {
            this.head = this.head.next;
            this.length--;
            return;
        }
        let currentIndex = 0;
        let currentNode = this.head;
        while (currentIndex !== index - 1) {
            if (currentNode.next === null) {
                return false;
            }
            currentNode = currentNode.next;
            currentIndex++;
        }
        currentNode.next = currentNode.next.next;
        this.length--;
    }

    printAll() {
        let returnString = '';
        returnString = this.head.value;
        let val = this.head.next;
        while (val !== null) {
            returnString = returnString + ' --> ' + val.value;
            val = val.next;
        }
        returnString = returnString + ' --> ' + 'null';
        console.log(returnString);
    }

}

const linkedList = new LinkedList(10);
console.log(linkedList.head);
console.log(linkedList.append(5));
console.log(linkedList.append(6));
console.log(linkedList.append(7));
console.log(linkedList.length);
console.log(linkedList.prepend(4));
linkedList.printAll();
console.log('---------------');
console.log(linkedList.remove(0));
linkedList.printAll();

