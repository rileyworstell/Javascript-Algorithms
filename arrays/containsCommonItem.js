// Lets a user know whether the two arrays contain a common element or not. Returns a bool

// O(m+n) Time & O(m) Space
const containsCommonItemHash = (array1, array2) => {
    myHash = {};
    array1.forEach((item) => {
        myHash[item] = true;
    });
    // not using forEach below because you cannot break out of a forEach :)
    for (let i = 0; i < array2.length; i++) {
        if (myHash[array2[i]] === true) {
            return true;
        }
    };
    return false;
}

// O(1) Space
const containsCommonItemOneLine = (array1, array2) => {
    return array1.some(item => array2.includes(item));
}



const array2 = ['a', 'b', 'c', 'x', 'c'];
const array1 = ['z', 'y', 'i', 'c'];

console.log(containsCommonItemHash(array1, array2));
console.log(containsCommonItemOneLine(array1, array2));
