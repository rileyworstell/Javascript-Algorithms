// Quick Sort Algorithm (smallest to greatest)
const partition = (arr, low, high) => {
    var i = (low-1);
    var pivot = arr[high];

    for (var j = low; j < high; j++) {
        if (arr[j] <= pivot) {
            i++;
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
    }
    [arr[i+1], arr[high]] = [arr[high], arr[i+1]];
    return(i+1);
}

const quickSort = (arr, low, high) => {
    if (arr.length === 1) {
        return arr;
    }
    if (low < high) {
        p = partition(arr, low, high);

        quickSort(arr, low, p-1);
        quickSort(arr, p+1, high);

    }
    return arr;
}
