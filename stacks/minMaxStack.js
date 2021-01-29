// write minmaxstack class. this should support pushing and popping values on and off the stack
// peeking at the value at the top
// getting the min and max values on the stack at any point.

class MinMaxStack {
    constructor() {
        this.stack = [];
        this.minMax = [{}];
    }
    peek() {
        return this.stack[this.stack.length-1]
    }

    pop() {
        this.minMax.pop();
        return this.stack.pop();
    }

    push(number) {  
        const setMinMax = {
            min: number,
            max: number
        };
        if (this.stack.length) {
            const prevMinMax = this.minMax[this.minMax.length-1];
            setMinMax.min = Math.min(prevMinMax.min, number);
            setMinMax.max = Math.max(prevMinMax.max, number);
        }
        this.stack.push(number);
        this.minMax.push(setMinMax);
    }

    getMin() {
        return this.minMax[this.minMax.length-1].min
    }

    getMax() {
        return this.minMax[this.minMax.length-1].max
    }
}

myStack = new MinMaxStack;
myStack.push(5);

console.log(myStack);