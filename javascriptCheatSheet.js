// Javascript Cheat Sheet :)

// let assigns a variable, const is for immutable 
let myNumber = 123;
const aValue = "123";

// .toString() converts something into a string
console.log(myNumber.toString());

// parseInt() converts to int
myNumber = parseInt(myNumber);
console.log(typeof myNumber);

// toLowerCase() lowercases a string
let aString = "A String";
aString.toLowerCase();

// ************************************************ \\
// ******** This is the Arrays Section ************ \\
// ************************************************ \\

// array.sort() sorts an array
let x = [4, 3, 2, 1];
x.sort();
console.log(x); // returns [1, 2, 3, 4]

// array.push() adds the contents to the end of the array
x.push(2);

// array.pop() removes the last element from the array
x.pop();

// array.shift() removes the first element and shifts the rest of the elements down an index in the array
x.shift();

// array.unshift() adds a new element to an array at the begining and shifts the rest of the elements up an index
x.unshift(11);

// array[index] if we want to access an element at an index
console.log(x[2]);

// array.length gets the length of the array and returns it
console.log(x.length);

// `delete array[index]` to delete an element in an array at an index without shifting the rest of the items
delete x[0];

// Splicing an Array
// The (2) defines the position where new elements will be inserted. The (0) defines how many elements to be removed
// The rest of the paramets are to be added.
x.splice(2, 0, "A Bear", "A Small Dog");

// array.splice(0, 1) to remove the firste element in an array
x.splice(0, 1);

// array1.concat(array2) to join two arrays Note: you have to reasign this it doesn't save the result of the action automatically
let y = ["joined", "with"];
x = x.concat(y);

// array.slice(1) : slicing pulls a piece of the array out and creates a new array
// The below starts at the first index and returns until the end of the array
let z = x.slice(1);

// The below starts at index one and goes up to but not including index 3
let w = x.slice(1,3);


// ************************************************ \\
// ******** This is the Sorting Section ************ \\
// ************************************************ \\

x = [3, 2, 1, 987, 22, 15, 74, 345];

x.sort();

// array.reverse() reverses the array
x.reverse(); 

// to sort an array with int values do the following. This reassigns the sorted array to x
x.sort((a, b) => a - b);

// Sorting Object Arrays
x = [
    {type: "Volvo", year:1999},
    {type: "ford", year:2020},
    {type: "Bmw", year:2015}
];
// sort x by year on car.
x.sort((a, b) => a.year - b.year);


// comparing string values (via alphabetically), The conditional below says if the a value is higher return 1 if not return -1
x.sort((a, b) => (a.type.toLowerCase() > b.type.toLowerCase()) ? 1 : -1);

