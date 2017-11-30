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
var forms_1 = require("@angular/forms");
var MatchFormComponent = (function () {
    function MatchFormComponent(matchListService) {
        this.matchListService = matchListService;
        this.submitted = false;
    }
    MatchFormComponent.prototype.ngOnInit = function () {
        this.matchForm = new forms_1.FormGroup({
            Winner: new forms_1.FormControl('', forms_1.Validators.required),
            Winner_Character: new forms_1.FormControl('', forms_1.Validators.required),
            Winner_KOS: new forms_1.FormControl(0, forms_1.Validators.required),
            Winner_Falls: new forms_1.FormControl(0, forms_1.Validators.required),
            Loser: new forms_1.FormControl('', forms_1.Validators.required),
            Loser_Character: new forms_1.FormControl('', forms_1.Validators.required),
            Loser_KOS: new forms_1.FormControl(0, forms_1.Validators.required),
            Loser_Falls: new forms_1.FormControl(0, forms_1.Validators.required),
            Stage: new forms_1.FormControl('', forms_1.Validators.required)
        });
    };
    MatchFormComponent.prototype.submitMatch = function (matchJSON) {
        var m = new matchlist_service_1.Match(matchJSON);
        this.matchListService.postMatch(m);
        this.submitted = true;
    };
    return MatchFormComponent;
}());
MatchFormComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'match-form',
        templateUrl: './match-form.template.html',
        providers: [matchlist_service_1.MatchListService]
    }),
    __metadata("design:paramtypes", [matchlist_service_1.MatchListService])
], MatchFormComponent);
exports.MatchFormComponent = MatchFormComponent;
//# sourceMappingURL=match-form.component.js.map