angular.module("championship")
    .directive("championshipsList", function() {
        return {
            restrict: "E",
            scope: {
                championships: "=championships"
            },
            templateUrl: "components/widgets/championship-widget/championships.html"
        }
    });