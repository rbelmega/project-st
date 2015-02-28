angular.module("viewsModule")
    .controller("championshipPageCtrl", ["$scope", "UrlsProvider", "FootballInformationService",
        function($scope, UrlsProvider, FootballInformationService) {
            $scope.championshipTitle = "Championship";

            FootballInformationService.getItems(UrlsProvider.championships)
                .then(function(championships) {
                    $scope.championships = FootballInformationService.precessChampionshipsData(championships);
                });
    }]);