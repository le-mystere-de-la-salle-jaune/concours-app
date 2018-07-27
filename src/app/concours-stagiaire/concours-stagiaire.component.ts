import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {Concours} from '../domains'
import { ConcoursService } from '../services/concours.service';

@Component({
  selector: 'app-concours-stagiaire',
  templateUrl: './concours-stagiaire.component.html',
  styleUrls: ['./concours-stagiaire.component.scss']
})
export class ConcoursStagiaireComponent implements OnInit {

  id:string
  idConcours:string
  concours:Concours[] = []
  searchFilter:string

  constructor(private route: ActivatedRoute, private concoursService:ConcoursService, private router:Router) { 
    this.id = this.route.snapshot.paramMap.get("id")
    this.idConcours = route.snapshot.paramMap.get("idConcours")
    this.concoursService.listerConcours(this.id).then((liste:Concours[])=> { this.concours = liste }).catch((error:any)=> console.log(error) )
    this.searchFilter =""
  }

  commencerConcours(id_concours:number){
    this.concoursService.commencerConcours(+this.id,id_concours)
    this.router.navigateByUrl(this.id+'/resultats/'+id_concours+'/concours')
  }

  ngOnInit() {
  }

}
