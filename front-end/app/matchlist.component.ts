import { Component } from '@angular/core'
import { MatchListService, Match, Person } from './matchlist.service'

@Component({
	moduleId: module.id,	
	selector: 'matchlist',
	templateUrl:  './matchlist.template.html',
    providers: [MatchListService]
})
export class MatchListComponent{
	winLossRatio: number = 0;
	hideTable: boolean = true;
	hideMatchEntry: boolean = true;
	hideWinRate: boolean = true;
	matchList: Array<Match> = []; 
	selected: string = "player-bg";
	characterList: Array<Array<string>>;
	personList: Array<Person> = [
		new Person({name: 'Brian'}),
		new Person({name: 'Braxton'}),
		new Person({name: 'Imanuel'}),
		new Person({name: 'Jason'}),
		new Person({name: 'Alex'}),
		new Person({name: 'Ray'}),
		new Person({name: ''})];

	selectedWinner: Person = new Person({name: ''});
	selectedLoser: Person = new Person({name: ''});
	selectedPerson: Person = new Person({name: ''});
	tableCaption: string = '';


	changeSelected(c: string) {
		this.selected = c;
		let fin = '';
		this.matchListService.getMatchesByCharacter(c)
			.subscribe(data => {
				this.matchList = data as Array<Match>;
				let replaced = c.replace("_"," ");
				let split = replaced.split(" ");
				for(var i = 0; i < split.length; i++) {
					split[i] = split[i].charAt(0).toUpperCase() + split[i].slice(1);
				}
				fin = split.join(" ")
				if(this.matchList.length == 0) {
					this.tableCaption = "No Match History for " + fin;
					this.winLossRatio = 0;
				}
				else {
					this.tableCaption = "Match History for " + fin;

					let win: number = 0;
					let loss: number = 0;
					for(let x of this.matchList) {
						
						if(x.Winner_Character.toLowerCase() == fin.toLowerCase())
							win++;
						else
							loss++;
					}
					this.winLossRatio = 100*win/(loss + win);
				}
			},
			() => {
				
			});
		
		if(this.hideMatchEntry == false) {
			this.toggleMatchEntry();
		}
			this.hideTable = false;
			this.hideWinRate = false;


	}

	public changeSelectedPerson() {
		this.selected = "player-bg";
		if(this.selectedPerson.name != '') {
			this.matchListService.getMatchesByPerson(this.selectedPerson.name)
				.subscribe(data => {
					this.matchList = data as Array<Match>;
			});
			this.tableCaption = 'Match History for ' + this.selectedPerson.name;
		}

		this.hideWinRate = true;
		
	}

	public toggleTable() {
		// If match entry is not hidden
		if(this.hideMatchEntry == false)
			this.toggleMatchEntry();
		this.hideTable = !this.hideTable;
	}

	public toggleWinRate() {
		this.hideWinRate = !this.hideWinRate;
	}
	public toggleMatchEntry() {
		if(this.hideTable == false) 
			this.toggleTable();
		this.hideMatchEntry = !this.hideMatchEntry;
	}

	constructor(private matchListService : MatchListService){
		//subscribe to the observable so 
		//that we can parse through all of 
		//the items in the database and push
		//them to our local list of items
		this.characterList =
		 [['dr_mario', 'mario', 'luigi', 'bowser', 'peach', 'yoshi', 'donkey_kong', 'captain_falcon', 'ganondorf'],
		  ['falco', 'fox', 'ness', 'ice_climbers', 'kirby', 'samus', 'zelda', 'link', 'young_link'],
		  ['pichu', 'pikachu', 'jigglypuff', 'mewtwo', 'mr_game_&_watch', 'marth', 'roy']];
	
	}

}