function digital_root(n) {
    // ...
    var arrN = n.toString(10).split("").map(function (t) { return parseInt(t) }), result = 0;
    for (let i = 0; i < arrN.length; i++) {
        result += arrN[i];
    }
    
    if (result.toString().length  > 1) {
        return digital_root(result);
    }
}

console.log(digital_root(16)); //7
console.log(digital_root(456)); //6