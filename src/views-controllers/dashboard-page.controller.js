angular.module("views")
    .controller("dashboardPageCtrl", ["$scope", "UrlsProvider", "FootballInformationService",
        function($scope, UrlsProvider, FootballInformationService) {
            var allTeams;

            $scope.dashboardTitle = "Dashboard";

            $scope.getTeamsBySelectedChampionship = function () {
                $scope.teams = FootballInformationService.getTeamsByCountry(allTeams, $scope.selectedChampionship);
            }

            FootballInformationService.getItems(UrlsProvider.matches)
                .then(function(matches) {
                    $scope.championships = FootballInformationService.distributeMatchesByChampionships(matches);
                    $scope.selectedChampionship = $scope.championships[0];

                    FootballInformationService.getItems(UrlsProvider.teams)
                        .then(function(teams) {
                            allTeams = FootballInformationService.distributeTeamsByCountries(teams);
                            $scope.getTeamsBySelectedChampionship();
                        });
                });
    }]);