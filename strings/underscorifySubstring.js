/*
Write a function that takes in two strings: a main string and a potential substring of the main string.
The function should return a version of the main string with every instance of the substring in it 
wrapped between underscores.
If two or more instances of the substring in the main string overlap or sit side by side, only the outside should
have underscores.
*/

// This one needs to be improved ^__^ 
function underscorifySubstring(string, substring) {
    let range = substring.length;
    let locations = [];
    for (let i = 0; i < string.length; i++) {
        if (string.slice(i, i + range) === substring) locations.push([i, i + range]);
    }

    for (let i = 0; i < locations.length; i++) {
        if (i !== locations.length - 1 && locations[i][1] >= locations[i+1][0]) {
            locations[i][1] = locations[i+1][1];
            locations.splice(i+1, 1);
            i = -1;
        }
    }
    let underscores = []
    for (const arr of locations) {
        underscores.push(arr[0]);
        underscores.push(arr[1]);
    }

    let adder = 0;
    for (let i = 0; i < underscores.length; i++) {
        string = string.slice(0, underscores[i] + adder) + '_' + string.slice(underscores[i] + adder);
        adder = adder + 1;
    }
    return string;
}

let string = 'testthis is a testtest to see if testestest it works';
let substring = 'test';
console.log(underscorifySubstring(string, substring)); 
// '_test_this is a _testtest_ to see if _testestest_ it works'
