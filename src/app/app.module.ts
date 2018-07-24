import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { ChoixStagiaireComponent } from './choix-stagiaire/choix-stagiaire.component';
import { BandeauComponent } from './bandeau/bandeau.component';

import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { StagiaireComponent } from './stagiaire/stagiaire.component';
import { ListeStagiaireComponent } from './liste-stagiaire/liste-stagiaire.component';
import { ConcoursStagiaireComponent } from './concours-stagiaire/concours-stagiaire.component';


const appRoutes: Routes = [

  { path: ':id/concours' , component: ConcoursStagiaireComponent},
  { path: 'choix-stagiaires', component: ChoixStagiaireComponent },
  { path: '', redirectTo: '/choix-stagiaires' ,pathMatch : 'full'}
  //{ path: '**', component: PageNonTrouveeComponent }

]


@NgModule({
  declarations: [
    AppComponent,
    ChoixStagiaireComponent,
    BandeauComponent,
    StagiaireComponent,
    ListeStagiaireComponent,
    ConcoursStagiaireComponent
  ],
  imports: [
    BrowserModule,
    MDBBootstrapModule.forRoot(),
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
