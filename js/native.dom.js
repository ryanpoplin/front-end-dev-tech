(function () {

	'use strict';

	function addClass (el, elClass, elClassValue) {

		document.querySelector(el).setAttribute(elClass, elClassValue);

	}

	$(function () {

		addClass('#core-nav', 'class', 'nav-background-color');

	});

}());