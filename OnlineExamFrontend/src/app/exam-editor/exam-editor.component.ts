import { Component, OnInit } from '@angular/core';
import {ExamPayload} from "./exam-payload";
;


@Component({
  selector: 'app-exam-editor',
  templateUrl: './exam-editor.component.html',
  styleUrls: ['./exam-editor.component.css']
})
export class ExamEditorComponent implements OnInit {

  examPayload : ExamPayload;

  constructor() {
    this.examPayload = new ExamPayload(0,"Name1",[])
  }


  ngOnInit(): void {
    console.log(this.examPayload.examName);
  }

  createLevel() {
    this.examPayload.createNewLevel();
  }

  createQuestion(levelIndex: number) {
    this.examPayload.levels[levelIndex].createNewQuestion();
  }
}
