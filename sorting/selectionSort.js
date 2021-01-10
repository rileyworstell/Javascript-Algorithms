// Selection Sort Algorithm (lowest to greatest)
const selectionSort = (arr) => { 
    var l = [...arr].length;
    var index = null;
    var resultArr = [];
    var min = null;
    while (resultArr.length < l) {
        for (var x = 0; x < arr.length; x++)  {
            if (min === null || min > arr[x]) {
                min = arr[x];
                index = x;
            }
        }
        resultArr.push(min);
        arr.splice(index, 1);
        min = null;
        index = null;
    }
    console.log(resultArr);
    return resultArr;
}

arrToSort = [5, 2, 8, 11, 9, 3, 4, 5, 22, 99, 88, 100, -12, -22, -44, 4, 2, 1, 3, 5, -1199, -2222]

selectionSort(arrToSort);
