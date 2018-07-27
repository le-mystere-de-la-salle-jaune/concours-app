import { Component } from "../../node_modules/@angular/core";

export class Stagiaire{
    constructor( public id:number, public prenom:string, public  nom:string, public email:string ,public  photo_url:string){
    }

}

export class Concours{
    constructor(public id:number, public titre:string, public nb_participants:number, public nb_quizzes:number ){
    }   
}

export class ResultatConcours{
    constructor(public rang:number, public concours_id:number, public concours_titre:string){}
}

export class Option{
    constructor(public id:number, public libelle:string, public ok:boolean){}
}

export class Question{
    constructor(public id:number, public titre:string, public options:Option[]){}
}