import { Injectable } from '@angular/core';
import {Question} from '../domains'
import {environment} from '../../environments/environment'
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  constructor(private _http:HttpClient) { }

  listerQuestions():Promise<Question[]>{

    return this._http.get(environment.questionApiUrl)
      .toPromise()
      .then( (body:any)=>{
        let array:Question[] = []
        body.forEach(element => {
          array.push(element)
        })
        return array
      },(error:any) =>{
        console.log("Error : "+error)
        return null
      } )
  }

  getQuestionById(id:number):Promise<Question>{

    return this._http.get(environment.questionApiUrl+"/"+id)
      .toPromise()
      .then((body:any)=>{
        let question:Question
        body.forEach(element => {
          question = element
        });
        return question
      },(error:any)=>{
        console.log("Error : "+error)
        return null
      })
  }


}
