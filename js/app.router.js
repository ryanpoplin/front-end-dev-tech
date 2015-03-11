(function () {

	'use strict';

	var coreApp = angular.module('coreApp', ['ngRoute']);

    coreApp.controller('NavController', function ($scope) {

        $scope.items = [{
            href: '#/palindrome',
            title: 'Palindrome'
        }, {
            href: '#/ex2',
            title: 'Ex 2'
        }];

    });

	coreApp.config(function ($routeProvider) {

  		$routeProvider
    		.when('/palindrome', {
                controller: 'NavController',
    	    	templateUrl: 'partials/test.partial.one.html'
    	  	}).when('/ex2', {
                controller: 'NavController',
    	  		templateUrl: 'partials/test.partial.two.html'
    		}).otherwise({ redirectTo: '/palindrome' });
		});

}());