function validBraces(braces) {
    //TODO 
    if (braces.length % 2 == 1) {
        return false;
    }

    else {
        var middleNum = braces.length % 2;
        var duplicate = false;
        for (let i = 0; i < middleNum; i++) {
            if (braces[i] !== braces[braces.length - (i)]) {
                duplicate = true;
                break;
            }
            else {
            }
        }

        if (duplicate == true) {
            return false;
        }
        else {
            return true;
        }
    }
}