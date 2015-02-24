angular.module("viewsModule")
    .controller("championshipPageCtrl", ["$scope", "UrlsProvider", "FootballInformationService",
        function($scope, UrlsProvider, FootballInformationService) {
            $scope.championshipTitle = "Championship";

            FootballInformationService.getItems(UrlsProvider.championships)
                .then(function(championships) {
                    $scope.championships = championships;
                    for (var i = 0; i < $scope.championships.length; i++) {
                        $scope.championships[i].imageUrl = "http://footballbet.com.ua/table/embl/" +
                        $scope.championships[i].image;
                    }
                });
    }]);