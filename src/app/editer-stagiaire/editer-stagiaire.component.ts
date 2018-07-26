import { Component, OnInit } from '@angular/core';
import { Stagiaire } from '../domains';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-editer-stagiaire',
  templateUrl: './editer-stagiaire.component.html',
  styleUrls: ['./editer-stagiaire.component.scss'],
  
})
export class EditerStagiaireComponent implements OnInit {

  id:string
  // la propriété Stagiaire est mise à jour automatiquement avec la saisie utilisateur
  // grâce au binding bi-directionnel  [(ngModel)]
  monStagiaire:Stagiaire

  constructor(private route: ActivatedRoute) {
    this.id = this.route.snapshot.paramMap.get("id")
    this.monStagiaire = new Stagiaire(+this.id,"","","","")
   }

  submit(monForm:any, champNom:any){
    
    console.log(monForm.status)
    console.log(champNom)
    if(monForm.valid){
      console.log(this.monStagiaire)
    }
  }

  ngOnInit() {
  }

}
