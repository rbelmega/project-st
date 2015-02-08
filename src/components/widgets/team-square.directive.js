angular.module('app')
    .directive("teamsSquare", function() {
        return {
            restrict: "E",
            templateUrl: "components/widgets/teams-square.html"
        }
    });