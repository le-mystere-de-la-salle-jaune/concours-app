import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {Concours} from '../domains'
import { ConcoursService } from '../services/concours.service';

@Component({
  selector: 'app-resultats-stagiaire',
  templateUrl: './resultats-stagiaire.component.html',
  styleUrls: ['./resultats-stagiaire.component.scss']
})
export class ResultatsStagiaireComponent implements OnInit {

  id:string
  concours:Concours[] = []

  constructor(private route: ActivatedRoute, private concoursService:ConcoursService, private router:Router) { 
    this.id = route.snapshot.paramMap.get("id")
    this.concoursService.listerConcours(this.id)
    .then((liste:Concours[])=> { this.concours = liste })
    .catch((error:any)=> console.log(error) )
  }

  ngOnInit() {
  }

}
