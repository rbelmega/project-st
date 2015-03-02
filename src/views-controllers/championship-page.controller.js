angular.module("views")
    .controller("championshipPageCtrl", ["$scope", "$rootScope", "UrlsProvider", "FootballInformationService",
        function($scope, $rootScope, UrlsProvider, FootballInformationService) {
            var allTeams;

            $scope.championshipTitle = "Championship";

            $scope.showTeamsFromChampionship = function(championship) {
                $rootScope.selectedChampionship = championship;
                $rootScope.teams = FootballInformationService.getTeamsByChampionship(allTeams, $rootScope.selectedChampionship);
            };

            FootballInformationService.getItems(UrlsProvider.championships)
                .then(function(championships) {
                    $scope.championships = FootballInformationService.precessChampionshipsData(championships);
                });

            FootballInformationService.getItems(UrlsProvider.teams)
                .then(function(teams) {
                    allTeams = FootballInformationService.distributeTeamsByCountries(teams);
                    $rootScope.selectedChampionship = null;
                    $rootScope.teams = null;
                });
    }]);