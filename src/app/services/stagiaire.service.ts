import { Injectable } from '@angular/core';
import {Stagiaire,Concours} from '../domains'
import {environment} from '../../environments/environment'
import {HttpClient, HttpParams} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class StagiaireService {

  constructor(private _http:HttpClient) { }

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
          return null
        })

  }

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

}
