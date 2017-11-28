import { Component } from '@angular/core'
import { ItemService, Item } from './item.service'

@Component({
	selector: 'item',
	template: `
		<div *ngFor="let item of itemList" class="item" id="{{item.ID}}">
            <img src="res/{{item.image_url}}" class="item-image">
            <h3>{{item.name}}</h3>
            <ul class="item-text">{{item.description}}</ul>
            <button onClick="addToCart(this.parentNode.id)">Add to cart</button>
        </div>
        `,
    providers: [ItemService]
})
export class ItemComponent{
	ID: string;
	name: string;
	image_url: string;
	description: string;

	itemList: Array<Item> = []; 
	constructor(itemService :ItemService){

		//subscribe to the observable so 
		//that we can parse through all of 
		//the items in the database and push
		//them to our local list of items
		itemService.getItems().subscribe(
			res => {
				let tempItem: Item;
				for(var k in res){
					tempItem = res[k];
					this.itemList.push(tempItem);
				}
			},
			error => console.error('Error: ')
			);
	} 
}