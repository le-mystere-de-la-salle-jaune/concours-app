import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {Concours} from '../domains'

@Component({
  selector: 'app-concours-stagiaire',
  templateUrl: './concours-stagiaire.component.html',
  styleUrls: ['./concours-stagiaire.component.scss']
})
export class ConcoursStagiaireComponent implements OnInit {

  id:string
  concours:Concours[] = []

  constructor(private route: ActivatedRoute) { 
    this.id = route.snapshot.paramMap.get("id")
    this.concours.push(new Concours("Le java EE",5))
  }

  ngOnInit() {
  }

}
