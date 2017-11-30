import { Injectable } from '@angular/core';
import { Http, Response, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Rx';

import 'rxjs/add/operator/map';

@Injectable()
export class MatchListService {

	constructor(private http: Http){
		//pass the http parameter into the service
	}

		//local url to access the node.js server
		private url: string = 'http://localhost:5000/matches';
	
    getMatches(): Observable<Array<Match>>{
		return this.http.get(this.url)
			//Make all responses into json format
			.map(response => response.json() as Match[]);
	}

	getMatchesByWinner(winner: string): Observable<Array<Match>>{
		return this.http.get(this.url + 'ByWinner?winner=' + winner)
			//Make all responses into json format
			.map(response => response.json() as Match[]);
	}

	getMatchesByPerson(person: string): Observable<Array<Match>>{
		return this.http.get(this.url + 'ByPerson?person=' + person)
			//Make all responses into json format
			.map(response => response.json() as Match[]);
	}

	getMatchesByCharacter(character: string): Observable<Array<Match>>{ 
		return this.http.get(this.url + 'ByCharacter?character=' + character.replace('_', ' '))
			.map(response => response.json() as Match[]);
	}

	getMatchesByWinnerCharacter(winner: string): Observable<Array<Match>>{
		return this.http.get(this.url + 'ByWinnerCharacter?winner_character=' + winner)
			.map(response => response.json() as Match[]);
	}

	getMatchesByLoserCharacter(loser: string): Observable<Array<Match>>{
		return this.http.get(this.url + 'ByLoserCharacter?loser_character=' + loser)
			.map(response => response.json() as Match[]);
	}


	postMatch(m: Match) {
		let params: URLSearchParams = new URLSearchParams();
		let url: string = 'http://localhost:5000/postMatch?';
		
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

	}
	

}

//Item Model
export class Match{
	Winner: string;
	Winner_Character: string;
	Winner_KOS: number;
	Winner_Falls: number;
	Loser: string;
	Loser_Character: string;
	Loser_KOS: number;
	Loser_Falls: number;
	Stage: string;

	constructor(private t: any) {
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
}

export class Person {
	name: string;

	constructor(private t: any) {
		this.name = t.name;
	}
}