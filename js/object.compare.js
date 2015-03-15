(function () {

	'use strict';

	// edge cases: {}'s as props., NaN, undefined, etc...
	// you'll need to spend some extra time testing these, or use Lo-Dash/underscore...

	var objA = {
		one: 1,
		two: 2
	};

	var objB = {
		one: 1,
		two: 2
	};

	console.log(objA === objB);

	var refObjA = objA;

	console.log(refObjA === objA);

	function objEquiv (a, b) {

		var aProps = Object.getOwnPropertyNames(a);
		console.log(aProps);
		var bProps = Object.getOwnPropertyNames(b);
		console.log(bProps);

		if (aProps.length !== bProps.length) {
			console.log('Objects a and b do not have equal property sums');
			// return false;
		}

		var i;
		for (i = 0; i < aProps.length; i += 1) {
			var propName = aProps[i];
			if (a[propName] !== b[propName]) {
				console.log('Objects a and b are not equivalent...');
				// return false;
			}
		}

		console.log('Objects a and b are equivalent...');
		// return true;

	}

	objEquiv(objA, objB);

}());