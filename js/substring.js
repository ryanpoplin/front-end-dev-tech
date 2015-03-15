(function () {

	'use strict';

 	function substringInString (theString, theSubstring) {
 		if (theString.indexOf(theSubstring) > -1) {
 			console.log(true);
 		} else {
 			console.log(false);
 		}
 	}

 	substringInString('Here is the string', 'Here a');

}());