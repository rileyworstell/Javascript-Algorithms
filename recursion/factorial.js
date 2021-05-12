// Find Factorial
const factorial = (number, answer=1) => {
    if (number > 1) {
        answer = number * factorial(number-1);
    }
    return answer
}


console.log(factorial(0));
console.log(factorial(1));
console.log(factorial(2));
console.log(factorial(3));
console.log(factorial(4));
console.log(factorial(5));
