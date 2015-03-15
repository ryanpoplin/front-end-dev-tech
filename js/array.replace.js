(function () {

	'use strict';

	var testArr = [[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12], [13, 14, 15, 16], [17, 18, 19, 20], [21, 22, 23, 24]];

	function replaceIndexesInArray (arrArg, argArr, replacementArr) {
		var i, j;
		for (i = 0; i < arrArg[argArr[0]].length; i += 1) {
			arrArg[argArr[0]][i] = replacementArr[i]; 
			for (j = 0; j < arrArg[argArr[1]].length; j += 1) {
				arrArg[argArr[1]][j] = replacementArr[j];
				continue;
			}
		}
		console.log(arrArg);
	}

	replaceIndexesInArray(testArr, [0, 5], [100, 101, 102, 103]);

}());