var countBits = function (input) {
    // Program Me
    var binary = input.toString(2), result = 0;
    for (let i = 0; i < binary.length; i++) {
        if (binary[i] == 1) {
            result++;
        }
    }
    return result;
};

console.log(countBits(1234));
