angular.module("viewsModule")
    .controller("dashboardPageCtrl", ["$scope", "UrlsProvider", "FootballInformationService",
        function($scope, UrlsProvider, FootballInformationService) {
            var distributedMatches = [];

            $scope.dashboardTitle = "Dashboard";

            FootballInformationService.getItems(UrlsProvider.matches)
                .then(function(matches) {
                    distributedMatches = FootballInformationService.distributeMatchesByChampionships(matches);

                    $scope.selectedChampionship =
                        FootballInformationService.getMatchesByChampionship(distributedMatches, "Єврокубки, Ліга Чемпіонів");
                });
    }]);