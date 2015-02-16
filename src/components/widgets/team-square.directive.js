angular.module('teamsModule')
    .directive("teamsSquare", function() {
        return {
            restrict: "E",
            scope: {
                teams: '=teams'
            },
            templateUrl: "components/widgets/teams-square.html"
        }
    });