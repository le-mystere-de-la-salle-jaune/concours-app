import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Concours, ResultatConcours } from '../domains'
import { ConcoursService } from '../services/concours.service';
import { PassageConcoursService } from '../services/passage-concours.service';

@Component({
  selector: 'app-resultats-stagiaire',
  templateUrl: './resultats-stagiaire.component.html',
  styleUrls: ['./resultats-stagiaire.component.scss']
})
export class ResultatsStagiaireComponent implements OnInit {

  id: string
  concours: Concours[] = []
  resultats: ResultatConcours[] = []

  constructor(private route: ActivatedRoute, private concoursService: ConcoursService, private router: Router, private passageConcoursService: PassageConcoursService) {

    this.id = route.snapshot.paramMap.get("id")

    /*
    this.concoursService.listerConcours(this.id)
    .then((liste:Concours[])=> { this.concours = liste })
    .catch((error:any)=> console.log(error) )
    */
    this.concoursService.listerConcours(route.snapshot.paramMap.get("id")).subscribe(
      value => this.concours = value,
      error => console.log("Error : ", error),
      () => console.log("La récupératon de données s'est bien passé")
    )

    /*
    this.passageConcoursService.listerResultats()
      .then((liste: ResultatConcours[]) => { this.resultats = liste })
      .catch((error: any) => console.log(error))
      */
    this.passageConcoursService.listerResultats().subscribe(
      value => this.resultats = value,
      error => console.log("Error : ", error),
      () => console.log("La récupératon de données s'est bien passé")
    )

  }

  ngOnInit() {
  }

}
