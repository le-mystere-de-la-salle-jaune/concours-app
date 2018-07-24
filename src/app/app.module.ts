import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http'

import { AppComponent } from './app.component';
import { ChoixStagiaireComponent } from './choix-stagiaire/choix-stagiaire.component';
import { BandeauComponent } from './bandeau/bandeau.component';

import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { StagiaireComponent } from './stagiaire/stagiaire.component';
import { ListeStagiaireComponent } from './liste-stagiaire/liste-stagiaire.component';

@NgModule({
  declarations: [
    AppComponent,
    ChoixStagiaireComponent,
    BandeauComponent,
    StagiaireComponent,
    ListeStagiaireComponent,
  ],
  imports: [
    BrowserModule,
    MDBBootstrapModule.forRoot(),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
