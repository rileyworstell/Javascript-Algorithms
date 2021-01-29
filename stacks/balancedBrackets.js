// write a function that takes in a string made up of brackets ( (, [, {, ), ], } ) and other optional chars. 
// the function should return a bool representing whether the string is balanced
 
const balancedBrackets = (string) => {
    let stack = [string[0]];
    let brackets = ' (){}[] ';
    let i = 1;
    while (i < string.length) {
        if (brackets.includes(string[i])) {
            if ((brackets[(brackets.indexOf(stack[stack.length-1])) + 1] === string[i]) || 
            (brackets[(brackets.indexOf(stack[stack.length-1])) - 1] === string[i])) {
                stack.pop();
            } else {
                stack.push(string[i]);
            } 
    }
        i++;
    }
    if (stack.length > 0) {
        return false;
    }
    return true;
}

let string = '([])(){}(())()()';
console.log(balancedBrackets(string));
