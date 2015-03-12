var palindromeChecker = function (word) {

    if (typeof word !== typeof String()) {

        console.log('You\'ve got to send a string of text...');

    } else {

        var originalWord = word;

        var wordToCheck = word;

        var palindromeHopeful = wordToCheck.split('').reverse().join('');

        if (originalWord === palindromeHopeful) {

            console.log('You\'ve got yourself a palindrome there!');

        } else {

            console.log('You\'ve got no palindrome...');

        }

    }

};

palindromeChecker('aba');
palindromeChecker('Ryan');
palindromeChecker(24);