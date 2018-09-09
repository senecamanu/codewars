//UNFINISHED

function orderWeight(str) {
    // your code
    var strArr = str.split(' '), result;

    for (let i = 0; i < str.length; i++) {
        var tempStr = 0;
        for (let c = 0; c < str[i].length; c++) {
            tempStr += Number(str[i][c]);
        }
        strArr[i] = tempStr;
    }

    return str;
}

console.log(orderWeight("103 123 4444 99 2000")) //"2000 103 123 4444 99"
console.log(orderWeight("2000 10003 1234000 44444444 9999 11 11 22 123")) //"11 11 2000 10003 22 123 1234000 44444444 9999"
