angular.module("views")
    .controller("matchesPageCtrl", ["$scope", "UrlsProvider", "FootballInformationService",
        function($scope, UrlsProvider, FootballInformationService) {
            $scope.matchesTitle = "Matches";

            FootballInformationService.getItems(UrlsProvider.matches)
                .then(function(matches) {
                    $scope.championships = FootballInformationService.distributeMatchesByChampionships(matches);
                });
    }]);