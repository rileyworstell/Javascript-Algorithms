// Binary Search Algorithm
const binarySearch = (arr, target) => {
    var low = 0;
    var high = arr.length;
    var i = true;
    while (i === true) {
        if ((high === low) || ((high-1) === low)) {
            return 'The target does not exist in this array';
        }
        var mid = Math.floor(((high - low) /2)+low);
        if (arr[mid] >= target) {
            high = mid;
            
        }
        else {
            low = mid;
        }
        if (target === arr[low]) {
            return low;
        }
        else if (target === arr[high]) {
            return high;
        }
    }
}
