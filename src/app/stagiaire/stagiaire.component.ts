import { Component, OnInit, Input } from '@angular/core';
import {Stagiaire} from '../domains'

@Component({
  selector: 'app-stagiaire',
  templateUrl: './stagiaire.component.html',
  styleUrls: ['./stagiaire.component.scss']
})
export class StagiaireComponent implements OnInit {

  @Input() stagiaire:Stagiaire

  constructor() { }

  ngOnInit() {
  }

}
