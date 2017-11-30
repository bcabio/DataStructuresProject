import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule }    from '@angular/http';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';

import { AppComponent }  from './app.component';
import { MatchListComponent } from './matchlist.component';
import { CharacterSelectComponent } from './character-select.component';
import { MatchFormComponent} from './match-form.component';

import { MatchListService }   from './matchlist.service';

@NgModule({
  imports: [ BrowserModule, HttpModule, FormsModule, ReactiveFormsModule ],
  declarations: [ 	AppComponent, 
  					MatchListComponent, 
  					CharacterSelectComponent,
  					MatchFormComponent ],
  providers: [ MatchListService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
