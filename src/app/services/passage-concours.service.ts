import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { environment } from '../../environments/environment';
import { ResultatConcours } from '../domains';
import { Observable , Subject } from 'rxjs';
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class PassageConcoursService {

  constructor(private _http: HttpClient) { }

  /*
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
  */


  listerResultats(): Observable<ResultatConcours[]> {
    const results$ = this._http.get(environment.afficherResultatUrl)
      .pipe(
        map((postsExterne: any[]) => postsExterne.map(pE => new ResultatConcours(pE.rang,pE.concours_id,pE.concours_titre)))
      )
      return results$
  }


}
