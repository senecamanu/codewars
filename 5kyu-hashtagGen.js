function generateHashtag(str) {
    let result = str.trim().split(' ').join('')
    console.log(str)

    //error handling
    if (result.length > 140 || result.length < 1) {
        return false;
    }

    return '#' + result;
}