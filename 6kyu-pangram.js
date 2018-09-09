function isPangram(string) {
    //...
    var alphabet = 'abcdefghijklmnopqrstuvwxyz';
    for (let i = 0; i < string.length; i++) {
        if (string[i] != ' ') {
            alphabet = alphabet.replace(`${string[i].toLowerCase()}`, '');
        }
    }
    console.log(alphabet);
    if (alphabet.length === 0) {
        return true;
    }

    else {
        return false;
    }
}

console.log(isPangram('ABCD45EFGH,IJK,LMNOPQR56STUVW3XYZ'));
console.log(isPangram('Cwm fjord bank glyphs vext quiz'));