import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { GiphiesComponent } from './giphies/giphies.component';
import { BaseComponent } from './base/base.component';


@NgModule({
  declarations: [
    AppComponent,
    SearchBarComponent,
    GiphiesComponent,
    BaseComponent
  ],
  imports: [
    BrowserModule,   
    HttpClientModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
