angular.module('app')
    .directive("teamsSquare", function() {
        return {
            restrict: "E",
            templateUrl: "views/widgets/teams-square.html"
        }
    });