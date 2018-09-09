function narcissistic(value) {
    // Code me
    var digits = value.toString().split('').map(Number);
    var valLength = value.toString().length;
    var result = 0;

    console.log(digits);
    console.log(valLength);

    for (let i = 0; i < digits.length; i++) {
        result += Math.pow(digits[i], valLength);
    }

    if (result === value) {
        return true;
    }

    else {
        return false;
    }
}

narcissistic(11116743);