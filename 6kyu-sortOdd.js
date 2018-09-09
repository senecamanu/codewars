function sortArray(array) {
    // Return a sorted array.
    var evenIndex = [], evenNums = [], oddNums = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 === 1) {
            oddNums.push(array[i]);
        }
        else if (array[i] % 2 === 0 || array[i] === 0) {
            evenIndex.push(i);
            evenNums.push(array[i]);
        }
    }
    
    function sortNumber(a, b) {
        return a - b;
    }

    oddNums = oddNums.sort(sortNumber);

    for (let i = 0; i < evenNums.length; i++) {
        oddNums.splice(evenIndex[i], 0, evenNums[i]);
    }

    return oddNums;
}



sortArray([5, 3, 2, 8, 1, 4]) //[1, 3, 2, 8, 5, 4];