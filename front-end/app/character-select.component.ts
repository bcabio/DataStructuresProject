import { Component, Input, Output, EventEmitter } from '@angular/core'

import { MatchListService, Match } from './matchlist.service';

import { Subscription } from 'rxjs/Subscription';

@Component({
	moduleId: module.id,	
	selector: '[character-select]',
	template:  `
		<style>
			.row1 {
				position: absolute;
				top: 15%;
				left: 10%;
				width: 80%;
				height: 15%;
			}

			.row2 {
				position: absolute;
				left: 10%;
				top: 27.5%;
				width: 80%;
				height: 15%;
			}

			.row3 {
				position:absolute;
				left: 18.8%;
				top: 40%;
				width: 80%;
				height: 15%;
			}

			.character {
				cursor: url("images/point_cursor.png");
				float: left;
				width: 10%;
				padding-top: 30px;
				padding-bottom: 10px;
				max-height: 100%;
				margin-right: 1%;
			}

			.character img {
				cursor: url("images/point_cursor.png"), pointer;
				max-height: 100%;
				max-width: 100%;
			}

			.selected {
				position: relative;
				margin-top: 22%;
				margin-left: 9%;
				height: 40vh;
				width: 90vw;
			}

			.preview {
				height: 100%;
				width: 20%;
				float: left;
			}

			.start {
				height: 100%;
				width: 18.8%;
				float: left;
			}

			.start img {
				cursor: url("images/point_cursor.png"), pointer;
				width: 100%;
				height: 100%;
			}

			#left-preview {
				padding-right: 15%;
			}

			#logo {
				height: 50%;
				padding-top: 5%;
				padding-right: 15%;
			}

			/* Logo image starts hidden */
			#logo-image {
				display: none;
			}

			.preview img {
				cursor: url("images/point_cursor.png"), pointer;
				width: 100%;
				height: 100%;
			}

			/* Toggle logo images Display*/
			.show {
				display: block;
			}

		</style>

	
			<!-- First Row of Characters -->
        <div *ngFor="let characterRow of characterList; let i = index" class="row{{i+1}}">
        	<div *ngFor="let character of characterRow" class="character" id={{character}} (click)="changeSelected(character)">
        		<img src="images/{{character}}.png">
        	</div>
			
			
		
		</div>

		{{count}}	
		<div class="selected">
				<!-- Left Character Preview -->
				<div id="left-preview" class="preview">
					<img src="previews/{{selected}}.jpg" id="player1">
				</div>
				<!-- Start Button -->
				<div id="logo" class="start">
					<img src="images/logo.png" id="logo-image">
				</div>
		</div>
	
	`
})
export class CharacterSelectComponent{

	characterList: Array<Array<string>>;

	selected: string = "player-bg";
	subscription: Subscription;
	tempMatchList: Array<Match> = [];
	count: any = 0;

	@Output()
	change: EventEmitter<any> = new EventEmitter<any>();

	changeSelected(c: string) {
		this.selected = c;
		this.matchListService.getMatchesByWinnerCharacter(c)
			.subscribe(data => {
				this.tempMatchList = data as Array<Match>;
				this.change.emit({matchList: this.tempMatchList});
				this.count = this.tempMatchList[0].Winner;
			});
			this.count++;

	}

	constructor(private matchListService: MatchListService){
		
		// this.subscription = this.matchListService.getMatchesByWinnerCharacter('falco')
		// 	.subscribe(res => {
		// 		this.tempMatchList = res as Array<Match>;
		// 		this.change.emit(this.tempMatchList);
		// 	});

		this.characterList =
		 [['dr_mario', 'mario', 'luigi', 'bowser', 'peach', 'yoshi', 'donkey_kong', 'captain_falcon', 'ganondorf'],
		  ['falco', 'fox', 'ness', 'ice_climbers', 'kirby', 'samus', 'zelda', 'link', 'young_link'],
		  ['pichu', 'pikachu', 'jigglypuff', 'mewtwo', 'mr_game_&_watch', 'marth', 'roy']];
	


	} 
}

