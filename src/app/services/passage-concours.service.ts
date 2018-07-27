import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { environment } from '../../environments/environment';
import { ResultatConcours } from '../domains';

@Injectable({
  providedIn: 'root'
})
export class PassageConcoursService {

  constructor(private _http: HttpClient) { }

  listerResultats(): Promise<ResultatConcours[]> {

    return this._http.get(environment.afficherResultatUrl)
      .toPromise()
      .then((body: any) => {
        let array: ResultatConcours[] = []
        body.forEach(element => {
          array.push(element)
        });
        return array
      }, (error: any) => {
        console.log("Error : " + error)
        return null
      })
  }
}
