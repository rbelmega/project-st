angular.module("viewsModule")
    .controller("dashboardPageCtrl", ["$scope", "UrlsProvider", "FootballInformationService",
        function($scope, UrlsProvider, FootballInformationService) {
            var distributedMatches = [];

            $scope.dashboardTitle = "Dashboard";

            FootballInformationService.getItems(UrlsProvider.matches)
                .then(function(matches) {
                    distributedMatches = FootballInformationService.distributeMatchesByChampionships(matches);
                    for (var i = 0; i < distributedMatches.length; i++) {
                        distributedMatches[i].imageUrl = "http://footballbet.com.ua/teams/country/" +
                        distributedMatches[i].image;
                    }

                    $scope.selectedChampionship =
                        FootballInformationService.getMatchesByChampionship(distributedMatches, "Єврокубки, Ліга Чемпіонів");
                });
    }]);