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

            function distributeMatchesByChampionships(matches) {
                var championshipImages = [];
                var championships = [];
                matches.forEach(function(match) {
                   if (championshipImages.indexOf(match.title) === -1) {
                       championshipImages.push(match.title);
                       championships.push({image: match.image, title: match.title, matches: []});
                   }
                });
                matches.forEach(function(match) {
                    championships.forEach(function(championship) {
                       if (match.title === championship.title) {
                           championship.matches.push(match);
                       }
                    });
                });
                return championships;
            }

            function getMatchesByChampionship(distributedMatches, championshipTitle) {
                var selectedChampionship = [];
                for (var i = 0; i < distributedMatches.length; i++) {
                    if (distributedMatches[i].title === championshipTitle) {
                        selectedChampionship = distributedMatches[i];
                        break;
                    }
                }
                return selectedChampionship;
            }

            return {
                getItems: getItems,
                distributeTeamsByCountries: distributeTeamsByCountries,
                distributeMatchesByChampionships: distributeMatchesByChampionships,
                getMatchesByChampionship: getMatchesByChampionship
            };
    }]);