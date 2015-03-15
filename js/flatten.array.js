(function () {

	'use strict';

	var obj = { a: 1, b: 2, c: 3 };
	var arr = [];
	var i;
	for (i in obj) {
   		
   		var e = {};

   		// a:, b:, c:, ...
   		e[i] = obj[i];
   		   		
   		console.log(e);

   		arr.push(e);

	}
	
	console.log(arr);

}());