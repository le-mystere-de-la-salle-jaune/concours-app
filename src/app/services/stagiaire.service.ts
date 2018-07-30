import { Injectable } from '@angular/core';
import {Stagiaire} from '../domains'
import {environment} from '../../environments/environment'
import {HttpClient} from '@angular/common/http'
import { Observable , Subject } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class StagiaireService {

  constructor(private _http:HttpClient) { }

  /*
  listerStagiaires():Promise<Stagiaire[]>{
    return this._http.get(environment.stagiaireApiUrl)
        .toPromise()
        .then((body:any)=>{
            let array:Stagiaire[] = []
            body.forEach(element => {
              array.push(element)
          });
          return array
        },(error:any)=>{
          console.log("Error : "+error)
          return null
        })
  }
  */
 listerStagiaires():Observable<Stagiaire[]> {

  const stagiaires$ = this._http.get(environment.stagiaireApiUrl)
    .pipe(
      map((postsExterne: any[]) => postsExterne.map(pE => new Stagiaire(pE.id,pE.prenom,pE.nom,pE.email,pE.photo_url)) )
    )
    return stagiaires$;

 }


  getStagiaireById(id:number):Promise<Stagiaire>{

    return this._http.get(environment.stagiaireApiUrl+'/'+id)
        .toPromise()
        .then((body:any)=>{
            let stagiaire:Stagiaire
            body.forEach(element => {
              stagiaire = element
          });
          return stagiaire
        },(error:any)=>{
          console.log("Error : "+error)
          return null
        })
  }

  modifierStagiaire(ngForm)
  {
    return this._http.put(`${environment.backEndUrl}/api/stagiaires`,ngForm)
    .toPromise()
    .then((el: any) => new Stagiaire(el.id,el.nom, el.prenom,el.email, el.photo_url));
  }



  

}
