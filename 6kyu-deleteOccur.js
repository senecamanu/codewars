function deleteNth(arr, n) {
    // ...
    var result = [];
    for (let i = 0; i < arr.length; i++) {
        ticker = 0;
        for (let c = 0; c < result.length; c++) {
            if (arr[i] == result[c]) {
                ticker++;
            }
        }
        if (ticker < n) {
            result.push(arr[i]);
        }
    }
    return result;
}

console.log(deleteNth([20, 37, 20, 21], 1)) // return [1,1];
console.log(deleteNth([1, 1, 3, 3, 7, 2, 2, 2, 2], 3)) //[1, 1, 3, 3, 7, 2, 2, 2];