// Insertion Sort Algorithm (lowest to greatest)
const insertionSort = (arr) => {
    var prevArr = [...arr];
    var b = false;
    while (b !== true) {
        for (var i = 0; i < arr.length; i++) {
            if (arr[i] > arr[i+1]) {
                arr.unshift(arr[i+1]); 
                arr.splice(i+2, 1);   
            }
        }
        if (JSON.stringify(arr) == JSON.stringify(prevArr)) {
            console.log(arr);
            return arr;
        }
        prevArr = [...arr];
    }
}

arrToSort = [5, 2, 8, 11, 9, 3, 4, 5, 22, 99, 88, 100, -12, -22, -44, 4, 2, 1, 3, 5, -1199, -2222]

insertionSort(arrToSort);
