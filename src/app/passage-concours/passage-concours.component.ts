import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ConcoursService } from '../services/concours.service';
import { Concours, Stagiaire } from '../domains';
import { StagiaireService } from '../services/stagiaire.service';

@Component({
  selector: 'app-passage-concours',
  templateUrl: './passage-concours.component.html',
  styleUrls: ['./passage-concours.component.scss']
})
export class PassageConcoursComponent implements OnInit {

  id:number
  idConcours:number
  stagiaires:Stagiaire[] = []
  concours:Concours[] = []

  constructor(private route: ActivatedRoute, private stagiaireService:StagiaireService, private concoursService:ConcoursService,router:Router) { 
    this.id = +route.snapshot.paramMap.get("id")
    this.idConcours = +route.snapshot.paramMap.get("idConcours")
    this.stagiaireService.listerStagiaires().then((liste:Stagiaire[])=> { this.stagiaires = liste }).catch((error:any)=> console.log(error) )
    this.concoursService.listerConcours(route.snapshot.paramMap.get("id")).then((liste:Concours[])=> { this.concours = liste }).catch((error:any)=> console.log(error) )
  }

  ngOnInit() {
  }

}
