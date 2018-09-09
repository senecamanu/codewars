function DNAStrand(input) {
    var result = '';
    for (let i = 0; i < input.length; i++) {
        switch (input[i]) {
            case 'T':
                result += 'A';
                break;
            case 'A':
                result += 'T';
                break;
            case 'C':
                result += 'G';
                break;
            case 'G':
                result += 'C';
        }
    }
    return result;
}