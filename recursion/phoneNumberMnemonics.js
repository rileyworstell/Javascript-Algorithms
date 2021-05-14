/* Based on the following Keypad... list all mnemonics that can be made from a phone number.
All Digits will be represented by the letters on them except for 0 and 1 which are represented by their digit.
  ------ ------ -----
  |     |     |     |
  |  1  |  2  |  3  |
  |     | abc | def |
   ----- ----- -----
  |     |     |     |
  |  4  |  5  |  6  |
  | ghi | jkl | mno |
   ----- ----- -----
  |     |     |     |
  |  7  |  8  |  9  |
  | pqrs| tuv | wxyz|
   ----- ----- -----
        |     |
        |  0  |
        |     |
         -----
*/

function phoneNumberMnemonics(phoneNumber) {
    let current = [...Array(phoneNumber.length - 1).keys()].map(() => 0);
    let found = []
    phoneHelper(0, phoneNumber, current, found)
    return found;
}

function phoneHelper(idx, phoneNumber, current, found) {
    if (idx === phoneNumber.length) {
        found.push(current.join(''));
    } else {
        let digit = parseInt(phoneNumber[idx]);
        let letters = DIGIT_LETTERS[digit];
        console.log(letters);
        for (letter of letters) {
            current[idx] = letter;
            phoneHelper(idx + 1, phoneNumber, current, found);
        }
    }
}

const DIGIT_LETTERS = {
    0: ['0'],
    1: ['1'],
    2: ['a', 'b', 'c'],
    3: ['d', 'e', 'f'],
    4: ['g', 'h', 'i'],
    5: ['j', 'k', 'l'],
    6: ['m', 'n', 'o'],
    7: ['p', 'q', 'r', 's'],
    8: ['t', 'u', 'v'],
    9: ['w', 'x', 'y', 'z'],
}

console.log(phoneNumberMnemonics('1905'));
/*
[
    "1w0j",
    "1w0k",
    "1w0l",
    "1x0j",
    "1x0k",
    "1x0l",
    "1y0j",
    "1y0k",
    "1y0l",
    "1z0j",
    "1z0k",
    "1z0l",
]
*/