var fizzBuzz = function () {

	var i;
	for (i = 1; i <= 100; i += 1) {

		if (i % 3 === 0 && i % 5 === 0) {
			console.log('fizzbuzz');
		} else if (i % 3 === 0) {
			console.log('fizz');
		} else if (i % 5 === 0) {
			console.log('buzz');
		} else {
			console.log(i);
		}

	}

};

fizzBuzz();