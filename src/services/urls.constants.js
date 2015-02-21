angular.module("servicesModule").
    constant('UrlsProvider', {
        matches: "http://footballbet.com.ua/api/matches/",
        championships: "http://footballbet.com.ua/api/championships/",
        teams: "http://footballbet.com.ua/api/teams/",
        championshipImgBaseUrl: "http://footballbet.com.ua/table/embl/",
        teamsImgBaseUrl: "http://footballbet.com.ua/teams/embl/"
    });