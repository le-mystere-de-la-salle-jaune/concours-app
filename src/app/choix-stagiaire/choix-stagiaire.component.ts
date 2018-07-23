import { Component, OnInit } from '@angular/core';
import {Stagiaire} from '../domains'

@Component({
  selector: 'app-choix-stagiaire',
  templateUrl: './choix-stagiaire.component.html',
  styleUrls: ['./choix-stagiaire.component.css']
})
export class ChoixStagiaireComponent implements OnInit {

  stagiaires:Stagiaire[]

  constructor() { 
    this.stagiaires = [new Stagiaire("Bob", "Dylan", "https://i.pinimg.com/originals/39/e9/b3/39e9b39628e745a39f900dc14ee4d9a7.jpg"), new Stagiaire("Kevin", "Bacon", "https://i.pinimg.com/originals/39/e9/b3/39e9b39628e745a39f900dc14ee4d9a7.jpg")]
  }

  ngOnInit() {
  }

}
