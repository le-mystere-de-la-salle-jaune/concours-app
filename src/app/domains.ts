export class Stagiaire{

    constructor( public id:number, public prenom:string, public  nom:string, public email:string ,public  photo_url:string){
    }
}

export class Concours{
    constructor(public id:number, public titre:string, public nb_participants:number, public nb_quizzes:number ){
    }   
}