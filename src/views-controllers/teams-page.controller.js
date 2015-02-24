angular.module("viewsModule")
    .controller("teamsPageCtrl", ["$scope", "UrlsProvider", "FootballInformationService",
        function($scope, UrlsProvider, FootballInformationService) {
            $scope.teamsTitle = "Teams";

            FootballInformationService.getItems(UrlsProvider.teams)
                .then(function(teams) {
                    $scope.championships = FootballInformationService.distributeTeamsByCountries(teams);
                    for (var i = 0; i < $scope.championships.length; i++) {
                        for (var j = 0; j < $scope.championships[i]["nationalTeams"].length; j++) {
                            $scope.championships[i]["nationalTeams"][j].imageUrl =
                                "http://footballbet.com.ua/teams/embl/" +
                                $scope.championships[i]["nationalTeams"][j]["emblema"];
                        }
                    }
                });
    }]);