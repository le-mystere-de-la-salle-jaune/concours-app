import { Component, OnInit } from '@angular/core';
import {Stagiaire} from '../domains'

@Component({
  selector: 'app-liste-stagiaire',
  templateUrl: './liste-stagiaire.component.html',
  styleUrls: ['./liste-stagiaire.component.scss']
})
export class ListeStagiaireComponent implements OnInit {

  stagiaires:Stagiaire[]

  constructor() {
    this.stagiaires = [new Stagiaire("Bob", "Dylan", "https://i.pinimg.com/originals/39/e9/b3/39e9b39628e745a39f900dc14ee4d9a7.jpg"), 
                      new Stagiaire("Kevin", "Bacon", "https://i.pinimg.com/originals/39/e9/b3/39e9b39628e745a39f900dc14ee4d9a7.jpg"),
                      new Stagiaire("Kevin", "Bacon", "https://i.pinimg.com/originals/39/e9/b3/39e9b39628e745a39f900dc14ee4d9a7.jpg"),
                      new Stagiaire("Kevin", "Bacon", "https://i.pinimg.com/originals/39/e9/b3/39e9b39628e745a39f900dc14ee4d9a7.jpg"),
                      new Stagiaire("Kevin", "Bacon", "https://i.pinimg.com/originals/39/e9/b3/39e9b39628e745a39f900dc14ee4d9a7.jpg"),
                      new Stagiaire("Kevin", "Bacon", "https://i.pinimg.com/originals/39/e9/b3/39e9b39628e745a39f900dc14ee4d9a7.jpg"),
                      new Stagiaire("Kevin", "Bacon", "https://i.pinimg.com/originals/39/e9/b3/39e9b39628e745a39f900dc14ee4d9a7.jpg"),
                      new Stagiaire("Kevin", "Bacon", "https://i.pinimg.com/originals/39/e9/b3/39e9b39628e745a39f900dc14ee4d9a7.jpg"),
                      new Stagiaire("Kevin", "Bacon", "https://i.pinimg.com/originals/39/e9/b3/39e9b39628e745a39f900dc14ee4d9a7.jpg")
                    
                    ]
   }

  ngOnInit() {
  }

}
