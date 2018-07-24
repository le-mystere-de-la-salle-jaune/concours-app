import { Injectable } from '@angular/core';
import {Stagiaire} from '../domains'
import {environment} from '../../environments/environment'
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class StagiaireService {

  constructor(private _http:HttpClient) { }

  listerStagiaires():Promise<Stagiaire[]>{

    return this._http.get(environment.stagiaireApiUrl)
        .toPromise()
        .then((body:any)=>{
          let array = Stagiaire[]
          return array
        },(error:any)=>{

        })

  }
}
