angular.module('teams')
    .directive("teamsSquare", function() {
        return {
            restrict: "E",
            scope: {
                teams: "=teams"
            },
            templateUrl: "components/widgets/teams-widget/teams-square.html"
        }
    });