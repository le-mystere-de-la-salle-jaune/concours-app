import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ChoixStagiaireComponent } from './choix-stagiaire/choix-stagiaire.component';
import { BandeauComponent } from './bandeau/bandeau.component';

import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { StagiaireComponent } from './stagiaire/stagiaire.component';
import { ListeStagiaireComponent } from './liste-stagiaire/liste-stagiaire.component';
import { ConcoursStagiaireComponent } from './concours-stagiaire/concours-stagiaire.component';
import { ResultatsStagiaireComponent } from './resultats-stagiaire/resultats-stagiaire.component';
import { ResultatsQuestionnairesComponent } from './resultats-questionnaires/resultats-questionnaires.component';
import { NavigationComponent } from './navigation/navigation.component';
import { PageNonTrouveeComponent } from './page-non-trouvee/page-non-trouvee.component';
import { EditerStagiaireComponent } from './editer-stagiaire/editer-stagiaire.component';
import { PassageConcoursComponent } from './passage-concours/passage-concours.component';
import { LibelleConcourPipe } from './libelle-concour.pipe';



const appRoutes: Routes = [

  { path: ':id/concours' , component: ConcoursStagiaireComponent},
  { path: 'choix-stagiaires', component: ChoixStagiaireComponent },
  { path: ':id/resultats', component: ResultatsStagiaireComponent },
  { path: ':id/resultats/:idConcours', component: ResultatsQuestionnairesComponent },
  { path: ':id/resultats/:idConcours/concours', component: PassageConcoursComponent },
  { path: ':id/profil', component: EditerStagiaireComponent },
  { path: '', redirectTo: '/choix-stagiaires' ,pathMatch : 'full'},
  { path: '**', component: PageNonTrouveeComponent }

]


@NgModule({
  declarations: [
    AppComponent,
    ChoixStagiaireComponent,
    BandeauComponent,
    StagiaireComponent,
    ListeStagiaireComponent,
    ConcoursStagiaireComponent,
    ResultatsStagiaireComponent,
    ResultatsQuestionnairesComponent,
    NavigationComponent,
    PageNonTrouveeComponent,
    EditerStagiaireComponent,
    PassageConcoursComponent,
    LibelleConcourPipe
  ],
  imports: [
    BrowserModule,
    MDBBootstrapModule.forRoot(),
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
