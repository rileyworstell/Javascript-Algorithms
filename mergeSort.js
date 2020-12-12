// Merge Sort algorithm (lowest to greatest)
const mergeSort = (arr) => {

    if (arr.length > 1) {
        mid = Math.floor(arr.length/2)
        var arrCopy = [...arr];
        var arrCopy2 = [...arr];
        var L = arrCopy2.splice(0, mid);
        var R = arrCopy.splice(mid);


        mergeSort(L);

        mergeSort(R);

        var i = 0, j = 0, k = 0;

        while ((i < L.length) && (j < R.length)) {
            if (L[i] < R[j]) {
                arr[k] = L[i];
                i++;
            } 
            else {
                arr[k] = R[j];
                j++;
            }
            k++;
        }
        while (i < L.length) {
            arr[k] = L[i];
            i++;
            k++;
        }
        while (j < R.length) {
            arr[k] = R[j];
            j++;
            k++;
        }
        
    }
    return arr;
    
}
