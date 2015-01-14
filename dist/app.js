/**
 * Created by snykyf on 1/13/2015.
 */
var myApp = angular.module('app', ["ngRoute"]);

myApp.config(['$routeProvider',
	function($routeProvider){
		$routeProvider.
			when('/dashboard', {
				template: '<h1>Dashboard</h1>'
			}).
			when('/matches', {
				template: '<h1>Matches</h1>'
			}).
			when('/teams', {
				template: '<h1>Teams</h1>'
			}).
			when('/championship', {
				template: '<h1>Championship</h1>'
			}).
			otherwise({
				redirectTo: '#'
			});
	}]);