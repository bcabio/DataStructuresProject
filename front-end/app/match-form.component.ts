import { Component } from '@angular/core';
import { MatchListService, Match, Person } from './matchlist.service';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
	moduleId: module.id,	
	selector: 'match-form',
	templateUrl:  './match-form.template.html',
    providers: [MatchListService]
})
export class MatchFormComponent{
	public matchForm: FormGroup;
	submitted: boolean = false;

	ngOnInit() {
		this.matchForm = new FormGroup({
            Winner: new FormControl('', <any>Validators.required),
            Winner_Character: new FormControl('', <any>Validators.required),
            Winner_KOS: new FormControl(0, <any>Validators.required),
            Winner_Falls: new FormControl(0, <any>Validators.required),
            Loser: new FormControl('', <any>Validators.required),
            Loser_Character: new FormControl('', <any>Validators.required),
            Loser_KOS: new FormControl(0, <any>Validators.required),
            Loser_Falls: new FormControl(0, <any>Validators.required),
            Stage: new FormControl('', <any>Validators.required)
        });
	}

	submitMatch(matchJSON: any) {
		let m = new Match(matchJSON);
		this.matchListService.postMatch(m);
		this.submitted = true;
	}

	constructor(private matchListService : MatchListService){
	
	}

}