angular.module("viewsModule")
    .controller("matchesPageCtrl", ["$scope", "UrlsProvider", "FootballInformationService",
        function($scope, UrlsProvider, FootballInformationService) {
            $scope.matchesTitle = "Matches";

            FootballInformationService.getItems(UrlsProvider.matches)
                .then(function(matches) {
                    $scope.championships = FootballInformationService.distributeMatchesByChampionships(matches);
                    for (var i = 0; i < $scope.championships.length; i++) {
                        $scope.championships[i].imageUrl = "http://footballbet.com.ua/teams/country/" +
                        $scope.championships[i].image;
                    }
                });
    }]);