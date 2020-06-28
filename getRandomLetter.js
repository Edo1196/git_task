function getRandomLetter() {
    var randomChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    var result = randomChars.charAt(Math.floor(Math.random() * randomChars.length));
    
    return result;
}

getRandomLetter();
getRandomLetter();
getRandomLetter();
