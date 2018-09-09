function alphabetPosition(input) {
    var alphabet = ' abcdefghijklmnopqrstuvwxyz', result = '', input2;
    input2 = input.replace(/\s/g, '');

    for (let i = 0; i < input2.length; i++) {
        if (alphabet.indexOf(input2[i] != -1)) {
            result += alphabet.indexOf(input[i]) + ' ';
        }
    }
}