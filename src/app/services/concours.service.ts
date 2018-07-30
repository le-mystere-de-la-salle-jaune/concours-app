import { Injectable } from '@angular/core';
import {HttpClient, HttpParams, HttpHeaders} from '@angular/common/http'
import {environment} from '../../environments/environment'
import { Concours } from '../domains';
import { Observable , Subject } from 'rxjs';
import { map } from 'rxjs/operators'



const httpOptions = {
  headers: new HttpHeaders({
    "Content-Type" : "application/json"
  })
}

@Injectable({
  providedIn: 'root'
})



export class ConcoursService {

  

  constructor(private _http:HttpClient) { }
/*
  listerConcours(id:string):Promise<Concours[]>{

    const options = {params : new HttpParams().set('idStagiaire',id)}

    return this._http.get(environment.concoursApiUrl,options)
        .toPromise()
        .then((body:any)=>{
            let array:Concours[] = []
            body.forEach(element => {
              array.push(element)
          });
          return array
        },(error:any)=>{
          console.log(error)
          return null
        })
  }
  */

  listerConcours(id:string):Observable<Concours[]>{
    const options = {params : new HttpParams().set('idStagiaire',id)}
    const concours$ = this._http.get(environment.concoursApiUrl,options)
      .pipe(
        map((postsExterne: any[]) => postsExterne.map(pE => new Concours(pE.id,pE.titre,pE.nb_participants,pE.nb_quizzes)))
      )
      return concours$
  }

  getConcoursById(id:number):Promise<Concours>{

    return this._http.get(environment.concoursApiUrl+'/'+id)
        .toPromise()
        .then((body:any)=>{
            let concours:Concours
            body.forEach(element => {
              concours = element
          });
          return concours
        },(error:any)=>{
          return null
        })
  }

  commencerConcours(id_stagiaire:number,id_concours:number):Promise<number>{
    let body = {"concours_id":id_concours,"stagiaire_id":id_stagiaire}
    return this._http
        .post(
            environment.commencerConcoursUrl,
            body,
            httpOptions
        )
        .toPromise()
        .then((data: any) => {
          return data.passage_concours_id
        }, (error:any)=>{console.log(error);return -1})
  }

}
