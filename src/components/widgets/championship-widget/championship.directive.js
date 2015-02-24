angular.module("championshipModule")
    .directive("championshipsList", function() {
        return {
            restrict: "E",
            scope: {
                championships: "=championships"
            },
            templateUrl: "components/widgets/championship-widget/championships.html"
        }
    });