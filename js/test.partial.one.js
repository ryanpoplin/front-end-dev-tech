var palindromeChecker = function (word) {

    // fix this shit...

    // if (word !== typeof String()) {

    //     // return 'You\'ve got to send a string of text...';

    //     console.log('You\'ve got to send a string of text...');

    // } else {

        var originalWord = word;

        var wordToCheck = word;

        var palindromeHopeful = wordToCheck.split('').reverse().join('');

        if (originalWord === palindromeHopeful) {

            // return 'You\'ve got yourself a palindrome there!';

            console.log('You\'ve got yourself a palindrome there!');

        } else {

            // return 'You\'ve got no palindrome...';

            console.log('You\'ve got no palindrome...');

        }

    // }

};

palindromeChecker('aba');
palindromeChecker('Ryan');