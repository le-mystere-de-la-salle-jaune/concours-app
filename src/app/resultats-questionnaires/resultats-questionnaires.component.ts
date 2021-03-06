import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Concours, Stagiaire } from '../domains';
import { StagiaireService } from '../services/stagiaire.service';
import { ConcoursService } from '../services/concours.service'

@Component({
  selector: 'app-resultats-questionnaires',
  templateUrl: './resultats-questionnaires.component.html',
  styleUrls: ['./resultats-questionnaires.component.scss']
})
export class ResultatsQuestionnairesComponent implements OnInit {

  id: number
  idConcours: number
  stagiaires: Stagiaire[] = []
  concours: Concours[] = []


  constructor(private route: ActivatedRoute, private stagiaireService: StagiaireService, private concoursService: ConcoursService, router: Router) {
    this.id = +route.snapshot.paramMap.get("id")
    this.idConcours = +route.snapshot.paramMap.get("idConcours")
    /*
    this.stagiaireService.listerStagiaires().then((liste:Stagiaire[])=> {
       this.stagiaires = liste })
       .catch((error:any)=> console.log(error) )
       */
    this.stagiaireService.listerStagiaires().subscribe(
      value => this.stagiaires = value,
      error => console.log("Error : ", error),
      () => console.log("La récupératon de données s'est bien passé")
    )

    /*
    this.concoursService.listerConcours(route.snapshot.paramMap.get("id"))
      .then((liste: Concours[]) => { this.concours = liste })
      .catch((error: any) => console.log(error))
      */
    this.concoursService.listerConcours(route.snapshot.paramMap.get("id")).subscribe(
      value => this.concours = value,
      error => console.log("Error : ", error),
      () => console.log("La récupératon de données s'est bien passé")
    )

  }

  ngOnInit() {
  }

}
