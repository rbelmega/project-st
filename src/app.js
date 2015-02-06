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
	.controller("TeamsCtrl", ["$scope", function($scope) {
		$scope.predicate = "name";

		$scope.changeSortOrder = function() {
			$scope.predicate = ($scope.predicate === "name") ? "-name" : "name";
		};
	}])
	.controller("SpainTeamsCtrl", ["$scope", function($scope) {
		$scope.teams = [
			{name: "Real Madrid", foundingDate: "1288323623006"},
			{name: "Barcelona", foundingDate: "1288323623006"},
			{name: "Atletico", foundingDate: "1288323623006"},
			{name: "Valencia", foundingDate: "1288323623006"}
		];
	}])
	.controller("EnglishTeamsCtrl", ["$scope", function($scope) {
		$scope.teams = [
			{name: "Manchester United", foundingDate: "1288323623006"},
			{name: "Manchester City", foundingDate: "1288323623006"},
			{name: "Arsenal", foundingDate: "1288323623006"},
			{name: "Liverpool", foundingDate: "1288323623006"}
		];
	}])
	.directive("teamsSquare", function() {
		return {
			restrict: "E",
			templateUrl: "views/widgets/teams-square.html"
		}
	});