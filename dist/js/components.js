angular.module("widgetsModule",["teamsModule","championshipModule","matchesModule"]),angular.module("championshipModule",[]),angular.module("matchesModule",[]),angular.module("teamsModule",[]),angular.module("championshipModule").directive("championshipsList",function(){return{restrict:"E",scope:{championships:"=championships"},templateUrl:"components/widgets/championship-widget/championships.html"}}),angular.module("matchesModule").directive("lastMatches",function(){return{restrict:"E",scope:{title:"=title",imageUrl:"=imageUrl",matches:"=matches"},templateUrl:"components/widgets/matches-widget/matches.html"}}),angular.module("teamsModule").controller("TeamsCtrl",["$scope",function(e){e.predicate="name",e.changeSortOrder=function(){e.predicate="name"===e.predicate?"-name":"name"}}]),angular.module("teamsModule").directive("teamsSquare",function(){return{restrict:"E",scope:{teams:"=teams"},templateUrl:"components/widgets/teams-widget/teams-square.html"}});