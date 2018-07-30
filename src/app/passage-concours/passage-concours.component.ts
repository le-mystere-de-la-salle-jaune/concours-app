import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ConcoursService } from '../services/concours.service';
import { Concours, Stagiaire, Question, Option } from '../domains';
import { StagiaireService } from '../services/stagiaire.service';
import { QuestionService } from '../services/question.service';


@Component({
  selector: 'app-passage-concours',
  templateUrl: './passage-concours.component.html',
  styleUrls: ['./passage-concours.component.scss']
})
export class PassageConcoursComponent implements OnInit {
  /**
   * id:number
   * Id du stagiaire en cours
   */
  id:number = 0
  /**
   * idConcours:number
   * Id du concours en cours
   */
  idConcours:number = null
  /**
   * stagiaires:Stagiaire[]
   * Liste des stagiaires enregistrer dans l'application
   * Note : À retirer à l'avenir en utilisant une méthode de type getById()
   */
  stagiaires:Stagiaire[] = [new Stagiaire(0,"","","","")]
  concours:Concours[] = [new Concours(0,"",0,0)]
  questions:Question[] = [new Question(0,"",[new Option(0,"",false)])]
  question:Question = new Question(0,"",[new Option(0,"",false)])
  questionEnCours = 0
  nombreQuestions = 0
  idReponse:number;

  constructor(private route: ActivatedRoute, private stagiaireService:StagiaireService, private concoursService:ConcoursService, private questionService:QuestionService, private router:Router) { 
    this.id = +route.snapshot.paramMap.get("id")
    this.idConcours = +route.snapshot.paramMap.get("idConcours")

    //this.stagiaireService.listerStagiaires().then((liste:Stagiaire[])=> { this.stagiaires = liste }).catch((error:any)=> console.log(error) )
    this.stagiaireService.listerStagiaires().subscribe(
      value => this.stagiaires = value,
      error => console.log("Error : ",error),
      () => console.log("La récupératon des données s'est bien passé")
    )
    //this.concoursService.listerConcours(route.snapshot.paramMap.get("id")).then((liste:Concours[])=> { this.concours = liste }).catch((error:any)=> console.log(error) )
    this.concoursService.listerConcours(route.snapshot.paramMap.get("id")).subscribe(
      value => this.concours = value,
      error => console.log("Error : ", error),
      () => console.log("La récupératon des données s'est bien passé")
    )
    //this.questionService.listerQuestions().then((liste:Question[])=> {this.questions = liste;this.question = this.questions[this.questionEnCours] }).catch((error:any)=> console.log(error))
    this.questionService.listerQuestions().subscribe(
      value => {
        this.questions = value;
        this.question = this.questions[this.questionEnCours]
      },
      error => console.log("Error : ",error),
      () => console.log("La récupératon des données s'est bien passé")
    )
    this.nombreQuestions = this.questions.length
  }

  submit(monForm:any){

    if(this.questionEnCours < this.nombreQuestions){
      this.questionEnCours++
      this.question = this.questions[this.questionEnCours]
    }
    else if(this.questionEnCours == this.nombreQuestions){
      this.questionEnCours++
      this.question = new Question(0,"Vous avez fini le questionnaire",[new Option(0,"COMPRIS",true)])
    }
    else{
      this.router.navigateByUrl('choix-stagiaires')
    }

  }

  ngOnInit() {
  }

}
