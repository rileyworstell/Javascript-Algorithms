// given a string of length 12 or smaller, containing digits only. write a fuction taht returns all the possible IP addresses that can be created by inserting three `.`s in the string
// an ip address is a seq of 4 positive ints that are separated by .s, where each individual integer is within the range 0-255 inclusive.

const validIPAddress = (string) => {
    let periodIndexes = [1, 2, 3];
    let answers = [];

    for (let a = 1; a < string.length; a++) {
        for (let b = 2; b < string.length; b++) {
            for (let c = 3; c < string.length; c++) {
                if ((a !== b) && (b !== c) && (c !== a)) {
                let out = [string.slice(0, a), string.slice(a, b), string.slice(b,c), string.slice(c)].join('.');
                if (isThisIPValid(out)) {
                    answers.push(out);
                }
            }
            }
        }
    }
    return answers;
    
}

const isThisIPValid = (string) => {
    let arr = string.split('.');
    let r = true;
    if (arr.length !== 4) {
        r = false;
    }
    arr.map(x => {
        if (x === '') {
            r = false;
        }
        if ((x.length > 1) && (x[0] === '0')) {
            r = false;
        }
        let y = parseInt(x);
        if ((y < 0) || (y > 255)) {
            r = false;
        }
    });

    return r;
}

let string = '1921690';

console.log(validIPAddress(string));
// console.log(isThisIPValid('19216..21.690'));
