angular.module("viewsModule")
    .controller("teamsPageCtrl", ["$scope", "UrlsProvider", "FootballInformationService",
        function($scope, UrlsProvider, FootballInformationService) {
            $scope.teamsTitle = "Teams";

            FootballInformationService.getItems(UrlsProvider.teams)
                .then(function(teams) {
                    $scope.championships = FootballInformationService.distributeTeamsByCountries(teams);
                });
    }]);