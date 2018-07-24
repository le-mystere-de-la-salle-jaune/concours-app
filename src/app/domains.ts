export class Stagiaire{

    constructor( public id:number, public prenom:string, public  nom:string, public email:string ,public  photo_url:string){
        this.prenom = prenom
        this.nom = nom
        this.photo_url = photo_url
        this.email = email
        this.id = id
    }
}