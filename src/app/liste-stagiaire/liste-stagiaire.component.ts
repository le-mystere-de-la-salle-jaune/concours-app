import { Component, OnInit } from '@angular/core';
import { Stagiaire } from '../domains'
import { StagiaireService } from '../services/stagiaire.service';


@Component({
  selector: 'app-liste-stagiaire',
  templateUrl: './liste-stagiaire.component.html',
  styleUrls: ['./liste-stagiaire.component.scss']
})
export class ListeStagiaireComponent implements OnInit {

  stagiaires: Stagiaire[]

  constructor(private stagiaireService: StagiaireService) {
    //this.stagiaireService.listerStagiaires().then((liste:Stagiaire[])=> { this.stagiaires = liste })
    this.stagiaireService.listerStagiaires().subscribe(
      value => this.stagiaires = value,
      error => console.log("Error : ", error),
      () => console.log("La récupératon de données s'est bien passé")
    )
  }

  ngOnInit() {
  }

}
