import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule }    from '@angular/http';

import { AppComponent }  from './app.component';
import { MatchListComponent } from './matchlist.component';

import { MatchListService }   from './matchlist.service';

@NgModule({
  imports: [ BrowserModule, HttpModule ],
  declarations: [ AppComponent, MatchListComponent ],
  providers: [ MatchListService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
