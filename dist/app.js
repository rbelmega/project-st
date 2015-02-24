/**
 * Created by snykyf on 1/13/2015.
 */
var myApp = angular.module('app', ["ui.router", "ngAnimate", "widgetsModule", "viewsModule"]);

myApp.config(['$stateProvider', '$urlRouterProvider',
	function($stateProvider, $urlRouterProvider){
		$urlRouterProvider.otherwise('404');
		$stateProvider.
			state('dashboard', {
				url: '/dashboard',
				templateUrl: 'views/dashboard.html',
				controller: 'dashboardPageCtrl'
			}).
			state('matches', {
				url: '/matches',
				templateUrl: 'views/matches.html',
				controller: 'matchesPageCtrl'
			}).
			state('teams', {
				url: '/teams',
				templateUrl: 'views/teams.html',
				controller: 'teamsPageCtrl'
			}).
			state('championship', {
				url: '/championship',
				templateUrl: 'views/championship.html',
				controller: 'championshipPageCtrl'
			}).
			state('404', {
				url: '/404',
				templateUrl: 'views/404.html'
			}).
			state('default', {
				url: ''
			});
	}]);