import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';

import 'rxjs/add/operator/map';

@Injectable()
export class ItemService {

	constructor(private http: Http){
		//pass the http parameter into the service
	}

		//local url to access the node.js server
		private url: string = 'http://localhost:5000/items';
	
    getItems(): Observable<Item>{
		return this.http.get(this.url)
			//Make all responses into json format
			.map(response => response.json());
	}
}

//Item Model
export interface Item{
	ID: string;
	name: string;
	image_url: string;
	description: string;
}
