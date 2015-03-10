(function () {

	'use strict';

	var coreApp = angular.module('coreApp', ['ngRoute']);

	coreApp.config(function ($routeProvider) {

  		$routeProvider
    		.when('/ex1', {
    	    	templateUrl: 'partials/test.partial.one.html'
    	  	}).when('/ex2', {
    	  		templateUrl: 'partials/test.partial.two.html'
    		}).otherwise({ redirectTo: '/ex1' });
		});

}());