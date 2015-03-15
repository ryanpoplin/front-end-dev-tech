// scope...
global = 'A nasty global variable...';
(function (boss) {

	'use strict';

	// caching...
	var local;

	console.log(boss);
	console.log(global);
	local = 'local';
	console.log(local);

	function Programmer (fullName, age, favLangs) {
		this.fullName = fullName;
		this.age = age;
		this.favLangs = favLangs;
	}

	// prototypes...
	// also .__proto__, ...
	Programmer.prototype.doSomething = function () {
		console.log(this.fullName + ' ' + 'is cool...');
	};

	(function () {

		// scope...
		var local, poplinProgrammer;

		local = 'anotherLocal';

		console.log(local);

		console.log(global);

		poplinProgrammer = new Programmer('Ryan Poplin', 24, ['JavaScript', 'Swift']);

		console.log(poplinProgrammer);
		console.log(poplinProgrammer.doSomething());

		(function () {

			// a closure is the local variables for a function - kept alive after the function has returned, or
			// a closure is a stack-frame which is not deallocated when the function returns. (as if a 'stack-frame' were malloc'ed instead of being on the stack!)
			console.log(boss);

		}());

	}());


}('Boss...'));