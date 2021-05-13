// reverse string. You must use recursion for this requirements of this problem. 

// yes you can reverse a string with 'hello'.split('').reverse().join('')
function reverseString(string, idx=0, answer='') {
    if (idx === string.length-1) {
        return answer + string[string.length-1];
    }
    answer = answer + reverseString(string, idx+1, answer);
    return answer + string[idx];
}

console.log(reverseString('hello'));
