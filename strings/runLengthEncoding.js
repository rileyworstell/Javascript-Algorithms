// write a function that takes non empty string and returns its run-length encoding.
// run length encoding is a form of lossless data compression in which runs of data are stored as a single data balue and cound, rather than as an original run. "aaa" would be '3a'
const runLengthEncoding = (string) => {

    let answer = '';
    let q = string[0];
    let lPointer = 0;
    let nums = [];
    let qLength;
    while (lPointer  < string.length) {
        lPointer++;
        nums = [];
        if (string[lPointer] === q[0]) {
            q = q + string[lPointer];
        }
        else {
            if (q.length <= 9) {
                nums.push(q.length);
            } else {
                qLength = q.length;
            while (qLength > 9) {
                nums.push(9);
                qLength -= 9;
            } 
            nums.push(qLength);
        }
            for (let i = 0; i < nums.length; i++) {
                answer = answer + (nums[i] + q[0]);
            }

            q = string[lPointer];
        }
        
    }
    return answer;
}

let string = 'AAAAAAAAAABB';
console.log(runLengthEncoding(string));
