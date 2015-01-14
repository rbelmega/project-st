/**
 * Created by snykyf on 1/13/2015.
 */
var myApp = angular.module('app', ["ngRoute"]);

myApp.config(['$routeProvider',
	function($routeProvider){
		$routeProvider.
			when('/dashboard', {
				templateUrl: 'views/dashboard.html'
			}).
			when('/matches', {
				templateUrl: 'views/matches.html'
			}).
			when('/teams', {
				templateUrl: 'views/teams.html'
			}).
			when('/championship', {
				templateUrl: 'views/championship.html'
			}).
			otherwise({
				redirectTo: '#'
			});
	}]);