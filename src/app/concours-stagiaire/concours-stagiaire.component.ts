import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {Concours} from '../domains'
import { StagiaireService } from '../services/stagiaire.service';

@Component({
  selector: 'app-concours-stagiaire',
  templateUrl: './concours-stagiaire.component.html',
  styleUrls: ['./concours-stagiaire.component.scss']
})
export class ConcoursStagiaireComponent implements OnInit {

  id:string
  concours:Concours[] = []

  constructor(private route: ActivatedRoute, private stagiaireService:StagiaireService) { 
    this.id = route.snapshot.paramMap.get("id")
    this.stagiaireService.listerConcours(this.id).then((liste:Concours[])=> { this.concours = liste })
  }

  ngOnInit() {
  }

}
