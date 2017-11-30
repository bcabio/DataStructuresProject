"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
require("rxjs/add/operator/map");
var MatchListService = (function () {
    function MatchListService(http) {
        this.http = http;
        //local url to access the node.js server
        this.url = 'http://localhost:5000/matches';
        //pass the http parameter into the service
    }
    MatchListService.prototype.getMatches = function () {
        return this.http.get(this.url)
            .map(function (response) { return response.json(); });
    };
    MatchListService.prototype.getMatchesByWinner = function (winner) {
        return this.http.get(this.url + 'ByWinner?winner=' + winner)
            .map(function (response) { return response.json(); });
    };
    MatchListService.prototype.getMatchesByPerson = function (person) {
        return this.http.get(this.url + 'ByPerson?person=' + person)
            .map(function (response) { return response.json(); });
    };
    MatchListService.prototype.getMatchesByCharacter = function (character) {
        return this.http.get(this.url + 'ByCharacter?character=' + character.replace('_', ' '))
            .map(function (response) { return response.json(); });
    };
    MatchListService.prototype.getMatchesByWinnerCharacter = function (winner) {
        return this.http.get(this.url + 'ByWinnerCharacter?winner_character=' + winner)
            .map(function (response) { return response.json(); });
    };
    MatchListService.prototype.getMatchesByLoserCharacter = function (loser) {
        return this.http.get(this.url + 'ByLoserCharacter?loser_character=' + loser)
            .map(function (response) { return response.json(); });
    };
    MatchListService.prototype.postMatch = function (m) {
        var params = new http_1.URLSearchParams();
        var url = 'http://localhost:5000/postMatch?';
        url = url.concat('winner' + '=' + m['Winner'] + '&');
        url = url.concat('winner_character' + '=' + m['Winner_Character'] + '&');
        url = url.concat('winner_kos' + '=' + m['Winner_KOS'] + '&');
        url = url.concat('winner_falls' + '=' + m['Winner_Falls'] + '&');
        url = url.concat('loser' + '=' + m['Loser'] + '&');
        url = url.concat('loser_character' + '=' + m['Loser_Character'] + '&');
        url = url.concat('loser_kos' + '=' + m['Loser_KOS'] + '&');
        url = url.concat('loser_falls' + '=' + m['Loser_Falls'] + '&');
        url = url.concat('stage' + '=' + m['Stage']);
        return this.http.post(url, {}).subscribe();
    };
    return MatchListService;
}());
MatchListService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], MatchListService);
exports.MatchListService = MatchListService;
//Item Model
var Match = (function () {
    function Match(t) {
        this.t = t;
        this.Winner = t.Winner;
        this.Winner_Character = t.Winner_Character;
        this.Winner_KOS = t.Winner_KOS;
        this.Winner_Falls = t.Winner_Falls;
        this.Loser = t.Loser;
        this.Loser_Character = t.Loser_Character;
        this.Loser_KOS = t.Loser_KOS;
        this.Loser_Falls = t.Loser_Falls;
        this.Stage = t.Stage;
    }
    return Match;
}());
exports.Match = Match;
var Person = (function () {
    function Person(t) {
        this.t = t;
        this.name = t.name;
    }
    return Person;
}());
exports.Person = Person;
//# sourceMappingURL=matchlist.service.js.map