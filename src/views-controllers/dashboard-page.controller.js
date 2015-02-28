angular.module("views")
    .controller("dashboardPageCtrl", ["$scope", "UrlsProvider", "FootballInformationService",
        function($scope, UrlsProvider, FootballInformationService) {
            $scope.dashboardTitle = "Dashboard";

            FootballInformationService.getItems(UrlsProvider.matches)
                .then(function(matches) {
                    $scope.championships = FootballInformationService.distributeMatchesByChampionships(matches);
                    $scope.selectedChampionship = $scope.championships[0];
                });
    }]);