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
var matchlist_service_1 = require("./matchlist.service");
var MatchListComponent = (function () {
    function MatchListComponent(matchListService) {
        this.matchListService = matchListService;
        this.winLossRatio = 0;
        this.hideTable = true;
        this.hideMatchEntry = true;
        this.hideWinRate = true;
        this.matchList = [];
        this.selected = "player-bg";
        this.personList = [
            new matchlist_service_1.Person({ name: 'Brian' }),
            new matchlist_service_1.Person({ name: 'Braxton' }),
            new matchlist_service_1.Person({ name: 'Imanuel' }),
            new matchlist_service_1.Person({ name: 'Jason' }),
            new matchlist_service_1.Person({ name: 'Alex' }),
            new matchlist_service_1.Person({ name: 'Ray' }),
            new matchlist_service_1.Person({ name: '' })
        ];
        this.selectedWinner = new matchlist_service_1.Person({ name: '' });
        this.selectedLoser = new matchlist_service_1.Person({ name: '' });
        this.selectedPerson = new matchlist_service_1.Person({ name: '' });
        this.tableCaption = '';
        //subscribe to the observable so 
        //that we can parse through all of 
        //the items in the database and push
        //them to our local list of items
        this.characterList =
            [['dr_mario', 'mario', 'luigi', 'bowser', 'peach', 'yoshi', 'donkey_kong', 'captain_falcon', 'ganondorf'],
                ['falco', 'fox', 'ness', 'ice_climbers', 'kirby', 'samus', 'zelda', 'link', 'young_link'],
                ['pichu', 'pikachu', 'jigglypuff', 'mewtwo', 'mr_game_&_watch', 'marth', 'roy']];
    }
    MatchListComponent.prototype.changeSelected = function (c) {
        var _this = this;
        this.selected = c;
        var fin = '';
        this.matchListService.getMatchesByCharacter(c)
            .subscribe(function (data) {
            _this.matchList = data;
            var replaced = c.replace("_", " ");
            var split = replaced.split(" ");
            for (var i = 0; i < split.length; i++) {
                split[i] = split[i].charAt(0).toUpperCase() + split[i].slice(1);
            }
            fin = split.join(" ");
            if (_this.matchList.length == 0) {
                _this.tableCaption = "No Match History for " + fin;
                _this.winLossRatio = 0;
            }
            else {
                _this.tableCaption = "Match History for " + fin;
                var win = 0;
                var loss = 0;
                for (var _i = 0, _a = _this.matchList; _i < _a.length; _i++) {
                    var x = _a[_i];
                    if (x.Winner_Character.toLowerCase() == fin.toLowerCase())
                        win++;
                    else
                        loss++;
                }
                _this.winLossRatio = 100 * win / (loss + win);
            }
        }, function () {
        });
        if (this.hideMatchEntry == false) {
            this.toggleMatchEntry();
        }
        this.hideTable = false;
        this.hideWinRate = false;
    };
    MatchListComponent.prototype.changeSelectedPerson = function () {
        var _this = this;
        this.selected = "player-bg";
        if (this.selectedPerson.name != '') {
            this.matchListService.getMatchesByPerson(this.selectedPerson.name)
                .subscribe(function (data) {
                _this.matchList = data;
            });
            this.tableCaption = 'Match History for ' + this.selectedPerson.name;
        }
        this.hideWinRate = true;
    };
    MatchListComponent.prototype.toggleTable = function () {
        // If match entry is not hidden
        if (this.hideMatchEntry == false)
            this.toggleMatchEntry();
        this.hideTable = !this.hideTable;
    };
    MatchListComponent.prototype.toggleWinRate = function () {
        this.hideWinRate = !this.hideWinRate;
    };
    MatchListComponent.prototype.toggleMatchEntry = function () {
        if (this.hideTable == false)
            this.toggleTable();
        this.hideMatchEntry = !this.hideMatchEntry;
    };
    return MatchListComponent;
}());
MatchListComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'matchlist',
        templateUrl: './matchlist.template.html',
        providers: [matchlist_service_1.MatchListService]
    }),
    __metadata("design:paramtypes", [matchlist_service_1.MatchListService])
], MatchListComponent);
exports.MatchListComponent = MatchListComponent;
//# sourceMappingURL=matchlist.component.js.map