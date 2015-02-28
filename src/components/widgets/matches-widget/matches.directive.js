angular.module("matches")
    .directive("lastMatches", function() {
        return {
            restrict: "E",
            scope: {
                title: "=title",
                imageUrl: "=imageUrl",
                matches: "=matches"
            },
            templateUrl: "components/widgets/matches-widget/matches.html"
        }
    });