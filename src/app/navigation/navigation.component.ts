import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '../../../node_modules/@angular/router';
import { StagiaireService } from '../services/stagiaire.service';
import { Stagiaire } from '../domains';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  id:string
  email:string
  

  constructor(private route: ActivatedRoute, private stagiaireService:StagiaireService) { 

    let stagiaires:Stagiaire[]

    this.id = this.route.snapshot.paramMap.get("id")

    this.stagiaireService.listerStagiaires().then((liste:Stagiaire[])=> { 
                          stagiaires = liste; 
                          this.email = stagiaires[this.id].email
                        })

    
    
  }

  ngOnInit() {
  }

}
