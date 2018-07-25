import { Injectable } from '@angular/core';
import {Stagiaire} from '../domains'
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

  getStagiaireById(id:number):Promise<Stagiaire>{

    return this._http.get(environment.stagiaireApiUrl+'/'+id)
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



  

}
