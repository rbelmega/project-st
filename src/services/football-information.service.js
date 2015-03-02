angular.module("services").
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
                        if (team["id_championship"] === championship["id"] && team["name"] !== "") {
                            championship["nationalTeams"].push(team);
                        }
                    });
                });
                for (var i = 0; i < championships.length; i++) {
                    for (var j = 0; j < championships[i]["nationalTeams"].length; j++) {
                        championships[i]["nationalTeams"][j].imageUrl =
                            "http://footballbet.com.ua/teams/embl/" +
                            championships[i]["nationalTeams"][j]["emblema"];
                    }
                }
                return championships;
            }

            function distributeMatchesByChampionships(matches) {
                var championshipTitles = [];
                var championships = [];
                matches.forEach(function(match) {
                   if (championshipTitles.indexOf(match.title) === -1) {
                       championshipTitles.push(match.title);
                       championships.push({image: match.image,
                           title: match.title,
                           matches: []});
                   }
                });
                matches.forEach(function(match) {
                    championships.forEach(function(championship) {
                       if (match.title === championship.title) {
                           championship.matches.push(match);
                       }
                    });
                });
                for (var i = 0; i < championships.length; i++) {
                    championships[i].imageUrl = "http://footballbet.com.ua/teams/country/" +
                    championships[i].image;
                }
                return championships;
            }

            function precessChampionshipsData(championships) {
                championships.forEach(function(championship) {
                    championship.imageUrl = "http://footballbet.com.ua/table/embl/" +
                    championship.image;
                });
                return championships;
            }

            function getTeamsByCountry(teams, selectedChampionship) {
                var teamFromChampionshipName = selectedChampionship["matches"][0]["firstTeam"];
                for (var i = 0; i < teams.length; i++) {
                    for (var j = 0; j < teams[i]["nationalTeams"].length; j++) {
                        if (teams[i]["nationalTeams"][j]["name"] === teamFromChampionshipName) {
                            var selectedTeams = teams[i]["nationalTeams"];
                            break;
                        }
                    }
                }
                return selectedTeams;
            }

            function getTeamsByChampionship(teams, championship) {
                for (var i = 0; i < teams.length; i++) {
                    if (teams[i]["id"] === championship["id_championship"]) {
                        var selectedTeams = teams[i]["nationalTeams"];
                        break;
                    }
                }
                return selectedTeams;
            }

            return {
                getItems: getItems,
                distributeTeamsByCountries: distributeTeamsByCountries,
                distributeMatchesByChampionships: distributeMatchesByChampionships,
                precessChampionshipsData: precessChampionshipsData,
                getTeamsByCountry: getTeamsByCountry,
                getTeamsByChampionship: getTeamsByChampionship
            };
    }]);