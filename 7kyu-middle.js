function getMiddle(input) {
    //Code goes here!
    var result = '';
    var counter = Math.floor(input.length / 2);

    if (input.length % 2 == 1) {
        
        return input[counter];
    }

    else {
        return input[counter] + input[counter++];
    }
}

getMiddle('test');
getMiddle('testing');