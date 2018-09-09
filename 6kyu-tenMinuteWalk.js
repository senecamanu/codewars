function isValidWalk(walk) {
    //insert brilliant code here

    //basic propositions



    var position = [0, 0];
    for (let i = 0; i < walk.length; i++) {
        switch (walk[i]) {
            case 'n':
                position[0]++;
                break;
            case 's':
                position[0]--;
                break;
            case 'e':
                position[1]++;
                break;
            case 'w':
                position[1]--;
                break;
        }
    }

    if (walk.length != 10) {
        return false;
    }
    
    else if (position[0] === 0 && position[1] === 0) {
        return true;
    }

    else {
        return false;
    }
}