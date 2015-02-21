angular.module("servicesModule").
    factory("FootballInformationService", ["$http", "$q",
        function($http, $q) {
            function getItems(url) {
                var deferred = $q.defer();
                $http.get(url)
                    .success(function(data) {
                        deferred.resolve(data.result);
                    })
                    .error(function(msg) {
                        deferred.reject(msg);
                    });
                return deferred.promise;
            }

            function distributeTeamsByCountries(teams) {
                var championshipIDs = [];
                var championships = [];
                teams.forEach(function(team) {
                    if (championshipIDs.indexOf(team["id_championship"]) === -1) {
                        championshipIDs.push(team["id_championship"]);
                        championships.push({id: team["id_championship"], nationalTeams: []});
                    }
                });
                teams.forEach(function(team) {
                    championships.forEach(function(championship) {
                        if (team["id_championship"] === championship["id"]) {
                            championship["nationalTeams"].push(team);
                        }
                    });
                });
                return championships;
            }

            return {
                getItems: getItems,
                distributeTeamsByCountries: distributeTeamsByCountries
            };
    }]);