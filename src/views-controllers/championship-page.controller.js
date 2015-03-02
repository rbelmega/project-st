angular.module("views")
    .controller("championshipPageCtrl", ["$scope", "UrlsProvider", "FootballInformationService",
        function($scope, UrlsProvider, FootballInformationService) {
            $scope.championshipTitle = "Championship";

            $scope.showTeamsFromChampionship = function() {
                alert("click");
            }

            FootballInformationService.getItems(UrlsProvider.championships)
                .then(function(championships) {
                    $scope.championships = FootballInformationService.precessChampionshipsData(championships);
                });
    }]);