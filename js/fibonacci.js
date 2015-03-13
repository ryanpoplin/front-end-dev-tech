(function () {

	'use strict';

	var fibonacci = [];

	fibonacci[0] = 0;
	fibonacci[1] = 1;
	fibonacci[2] = 2;

	for (var i = 3; i < 10; i += 1) {
		fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
	}

	for (var j = 1; j < fibonacci.length; j += 1) {
		console.log(fibonacci[j]);
	}

	console.log(fibonacci);

}());