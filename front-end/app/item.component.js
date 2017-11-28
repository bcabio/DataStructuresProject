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
var item_service_1 = require("./item.service");
var ItemComponent = (function () {
    function ItemComponent(itemService) {
        var _this = this;
        this.itemList = [];
        //subscribe to the observable so 
        //that we can parse through all of 
        //the items in the database and push
        //them to our local list of items
        itemService.getItems().subscribe(function (res) {
            var tempItem;
            for (var k in res) {
                tempItem = res[k];
                _this.itemList.push(tempItem);
            }
        }, function (error) { return console.error('Error: '); });
    }
    return ItemComponent;
}());
ItemComponent = __decorate([
    core_1.Component({
        selector: 'item',
        template: "\n\t\t<div *ngFor=\"let item of itemList\" class=\"item\" id=\"{{item.ID}}\">\n            <img src=\"res/{{item.image_url}}\" class=\"item-image\">\n            <h3>{{item.name}}</h3>\n            <ul class=\"item-text\">{{item.description}}</ul>\n            <button onClick=\"addToCart(this.parentNode.id)\">Add to cart</button>\n        </div>\n        ",
        providers: [item_service_1.ItemService]
    }),
    __metadata("design:paramtypes", [item_service_1.ItemService])
], ItemComponent);
exports.ItemComponent = ItemComponent;
//# sourceMappingURL=item.component.js.map