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
var CharacterSelectComponent = (function () {
    function CharacterSelectComponent(matchListService) {
        // this.subscription = this.matchListService.getMatchesByWinnerCharacter('falco')
        // 	.subscribe(res => {
        // 		this.tempMatchList = res as Array<Match>;
        // 		this.change.emit(this.tempMatchList);
        // 	});
        this.matchListService = matchListService;
        this.selected = "player-bg";
        this.tempMatchList = [];
        this.count = 0;
        this.change = new core_1.EventEmitter();
        this.characterList =
            [['dr_mario', 'mario', 'luigi', 'bowser', 'peach', 'yoshi', 'donkey_kong', 'captain_falcon', 'ganondorf'],
                ['falco', 'fox', 'ness', 'ice_climbers', 'kirby', 'samus', 'zelda', 'link', 'young_link'],
                ['pichu', 'pikachu', 'jigglypuff', 'mewtwo', 'mr_game_&_watch', 'marth', 'roy']];
    }
    CharacterSelectComponent.prototype.changeSelected = function (c) {
        var _this = this;
        this.selected = c;
        this.matchListService.getMatchesByWinnerCharacter(c)
            .subscribe(function (data) {
            _this.tempMatchList = data;
            _this.change.emit({ matchList: _this.tempMatchList });
            _this.count = _this.tempMatchList[0].Winner;
        });
        this.count++;
    };
    return CharacterSelectComponent;
}());
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], CharacterSelectComponent.prototype, "change", void 0);
CharacterSelectComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: '[character-select]',
        template: "\n\t\t<style>\n\t\t\t.row1 {\n\t\t\t\tposition: absolute;\n\t\t\t\ttop: 15%;\n\t\t\t\tleft: 10%;\n\t\t\t\twidth: 80%;\n\t\t\t\theight: 15%;\n\t\t\t}\n\n\t\t\t.row2 {\n\t\t\t\tposition: absolute;\n\t\t\t\tleft: 10%;\n\t\t\t\ttop: 27.5%;\n\t\t\t\twidth: 80%;\n\t\t\t\theight: 15%;\n\t\t\t}\n\n\t\t\t.row3 {\n\t\t\t\tposition:absolute;\n\t\t\t\tleft: 18.8%;\n\t\t\t\ttop: 40%;\n\t\t\t\twidth: 80%;\n\t\t\t\theight: 15%;\n\t\t\t}\n\n\t\t\t.character {\n\t\t\t\tcursor: url(\"images/point_cursor.png\");\n\t\t\t\tfloat: left;\n\t\t\t\twidth: 10%;\n\t\t\t\tpadding-top: 30px;\n\t\t\t\tpadding-bottom: 10px;\n\t\t\t\tmax-height: 100%;\n\t\t\t\tmargin-right: 1%;\n\t\t\t}\n\n\t\t\t.character img {\n\t\t\t\tcursor: url(\"images/point_cursor.png\"), pointer;\n\t\t\t\tmax-height: 100%;\n\t\t\t\tmax-width: 100%;\n\t\t\t}\n\n\t\t\t.selected {\n\t\t\t\tposition: relative;\n\t\t\t\tmargin-top: 22%;\n\t\t\t\tmargin-left: 9%;\n\t\t\t\theight: 40vh;\n\t\t\t\twidth: 90vw;\n\t\t\t}\n\n\t\t\t.preview {\n\t\t\t\theight: 100%;\n\t\t\t\twidth: 20%;\n\t\t\t\tfloat: left;\n\t\t\t}\n\n\t\t\t.start {\n\t\t\t\theight: 100%;\n\t\t\t\twidth: 18.8%;\n\t\t\t\tfloat: left;\n\t\t\t}\n\n\t\t\t.start img {\n\t\t\t\tcursor: url(\"images/point_cursor.png\"), pointer;\n\t\t\t\twidth: 100%;\n\t\t\t\theight: 100%;\n\t\t\t}\n\n\t\t\t#left-preview {\n\t\t\t\tpadding-right: 15%;\n\t\t\t}\n\n\t\t\t#logo {\n\t\t\t\theight: 50%;\n\t\t\t\tpadding-top: 5%;\n\t\t\t\tpadding-right: 15%;\n\t\t\t}\n\n\t\t\t/* Logo image starts hidden */\n\t\t\t#logo-image {\n\t\t\t\tdisplay: none;\n\t\t\t}\n\n\t\t\t.preview img {\n\t\t\t\tcursor: url(\"images/point_cursor.png\"), pointer;\n\t\t\t\twidth: 100%;\n\t\t\t\theight: 100%;\n\t\t\t}\n\n\t\t\t/* Toggle logo images Display*/\n\t\t\t.show {\n\t\t\t\tdisplay: block;\n\t\t\t}\n\n\t\t</style>\n\n\t\n\t\t\t<!-- First Row of Characters -->\n        <div *ngFor=\"let characterRow of characterList; let i = index\" class=\"row{{i+1}}\">\n        \t<div *ngFor=\"let character of characterRow\" class=\"character\" id={{character}} (click)=\"changeSelected(character)\">\n        \t\t<img src=\"images/{{character}}.png\">\n        \t</div>\n\t\t\t\n\t\t\t\n\t\t\n\t\t</div>\n\n\t\t{{count}}\t\n\t\t<div class=\"selected\">\n\t\t\t\t<!-- Left Character Preview -->\n\t\t\t\t<div id=\"left-preview\" class=\"preview\">\n\t\t\t\t\t<img src=\"previews/{{selected}}.jpg\" id=\"player1\">\n\t\t\t\t</div>\n\t\t\t\t<!-- Start Button -->\n\t\t\t\t<div id=\"logo\" class=\"start\">\n\t\t\t\t\t<img src=\"images/logo.png\" id=\"logo-image\">\n\t\t\t\t</div>\n\t\t</div>\n\t\n\t"
    }),
    __metadata("design:paramtypes", [matchlist_service_1.MatchListService])
], CharacterSelectComponent);
exports.CharacterSelectComponent = CharacterSelectComponent;
//# sourceMappingURL=character-select.component.js.map