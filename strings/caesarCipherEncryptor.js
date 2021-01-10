// non-empty string of lowercase letters and a non negative int, write a function that returns a new string obtained by shifting every letter in the input string by k positions in the alphabet.
const caesarCipherEncryptor = (string, k) => {
    let alph = 'abcdefghijklmnopqrstuvwxyz';
    let answer = '';
    for (let i = 0; i < string.length; i++) {
        let index = alph.indexOf(string[i]);
        let newIndex = index + k;
        while (newIndex > 25) {
            newIndex = newIndex - 26;
        }
        answer = answer + alph[newIndex].toString();
    }
    return answer;
}

let array = 'xyz';
let k = 5;
console.log(caesarCipherEncryptor(array, k));
