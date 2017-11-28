import { Component } from '@angular/core';
import { MatchListComponent } from './matchlist.component';

import { MatchListService } from './matchlist.service';
@Component({
    selector: 'my-app',
    template: ` <matchlist></matchlist>
    			`,
    		providers: [MatchListService]
})
export class AppComponent {

	getStuff(character: string) {

	
	}
}
