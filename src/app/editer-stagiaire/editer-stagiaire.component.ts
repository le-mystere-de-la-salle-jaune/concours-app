import { Component, OnInit } from '@angular/core';
import { Stagiaire } from '../domains';
import { ActivatedRoute, Router } from '@angular/router';
import { StagiaireService } from '../services/stagiaire.service';

@Component({
  selector: 'app-editer-stagiaire',
  templateUrl: './editer-stagiaire.component.html',
  styleUrls: ['./editer-stagiaire.component.scss'],
  
})
export class EditerStagiaireComponent implements OnInit {

  id:string
  // la propriété Stagiaire est mise à jour automatiquement avec la saisie utilisateur
  // grâce au binding bi-directionnel  [(ngModel)]
  monStagiaire:Stagiaire = new Stagiaire(0,"","","","")

  constructor(private route: ActivatedRoute,private service:StagiaireService, private router:Router) {
    this.id = this.route.snapshot.paramMap.get("id")

    let stagiaires:Stagiaire[]
    service.listerStagiaires().subscribe(
      value => {
        stagiaires = value;
        this.monStagiaire = stagiaires[+this.id - 1]
      },
      error => console.log("Error : ",error),
      () => console.log("La récupération de données s'est bien passé")
    )

    
    //service.getStagiaireById(+this.id).then( (stagiaire:Stagiaire) => this.monStagiaire=stagiaire )
   
  }

  submit(monForm:any){
    
    console.log(monForm.status)

    if(monForm.valid){
      console.log(this.monStagiaire)
      this.service.modifierStagiaire(this.monStagiaire)
      .then(()=>this.router.navigateByUrl('choix-stagiaires'));
    }
  }

  ngOnInit() {
  }

}
