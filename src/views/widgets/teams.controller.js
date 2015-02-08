angular.module('app')
    .controller("TeamsCtrl", ["$scope", function($scope) {
        $scope.predicate = "name";

        $scope.changeSortOrder = function() {
            $scope.predicate = ($scope.predicate === "name") ? "-name" : "name";
        };
    }]);