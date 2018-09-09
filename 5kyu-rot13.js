function rot13(message) {
    //your code here
    let result = '';
    let alphabet = 'abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz';
    let alphabetC = 'ABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYZ'
    message = message.split('');

    for (let i = 0; i < message.length; i++) {
        
        
        // ' '
        if (message[i] === ' ') {

        }

        // UPPERCASE
        else if (message[i].toUpperCase() === message[i]) {
            let pos = alphabetC.indexOf(message[i]);
            message[i] = alphabetC[pos + 13];
        }

        // lowercase
        else {
            let pos = alphabet.indexOf(message[i]);
            message[i] = alphabet[pos + 13];
        }
    }
    return message.join('');
}