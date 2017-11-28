import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';

import 'rxjs/add/operator/map';

@Injectable()
export class MatchListService {

	constructor(private http: Http){
		//pass the http parameter into the service
	}

		//local url to access the node.js server
		private url: string = 'http://localhost:5000/matches';
	
    getMatches(): Observable<Match>{
		return this.http.get(this.url)
			//Make all responses into json format
			.map(response => response.json());
	}

	getMatchesByWinnerCharacter(winner: string): Observable<Match>{
		return this.http.get(this.url + 'ByWinnerCharacter?winner_character=' + winner)
			.map(response => response.json());
	}

	getMatchesByLoserCharacter(loser: string): Observable<Match>{
		return this.http.get(this.url + 'ByLoserCharacter?loser_character=' + loser)
			.map(response => response.json());
	}

	

}

//Item Model
export interface Match{
	Winner: string;
	Winner_Character: string;
	Winner_KOs: int;
	Winner_Falls: int;
	Loser: string;
	Loser_Character: string;
	Loser_KOS: int;
	Loser_Falls: int;
	Stage: string;
}
