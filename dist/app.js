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
	}])
	.controller("EuropeanTeamsCtrl", ["$scope", function($scope) {
		$scope.europeanTeams = [
			[
				{name: "Real", city: "Madrid", foundingDate: "1288323623006"},
				{name: "Barcelona", city: "Barcelona", foundingDate: "1288323623006"},
				{name: "Atletico", city: "Madrid", foundingDate: "1288323623006"},
				{name: "Valencia", city: "Valencia", foundingDate: "1288323623006"}
			],
			[
				{name: "Manchester United", city: "Manchester", foundingDate: "1288323623006"},
				{name: "Manchester City", city: "Manchester", foundingDate: "1288323623006"},
				{name: "Arsenal", city: "London", foundingDate: "1288323623006"},
				{name: "Liverpool", city: "Liverpool", foundingDate: "1288323623006"}
			]
		];
	}]);