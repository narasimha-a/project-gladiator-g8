import { Component, OnInit } from '@angular/core';
import {ExamPayload} from "./exam-payload";
import {ExamService} from "../exam.service";


@Component({
  selector: 'app-exam-editor',
  templateUrl: './exam-editor.component.html',
  styleUrls: ['./exam-editor.component.css']
})
export class ExamEditorComponent implements OnInit {

  examPayload! : ExamPayload;

  currentLevel = 0;

  currentQuestion = 0;
  responseString: string = "";
  isDataLoaded = false;


  constructor(private examService : ExamService) {

    //this.examPayload = new ExamPayload(0,"",[])
    //this.isDataLoaded = true;

    this.examService.getExamByExamId(58).subscribe(data=>{
      console.log(data)
      this.examPayload = new ExamPayload(data.examId, data.examName, data.levels);
      this.isDataLoaded = true;
      console.log(this.examPayload);
      //this.responseString = JSON.stringify(this.examPayload.getLevels()[0].getQuestions()()[0].options);
    })


  }

  ngOnInit(): void {
    //console.log(this.examPayload.examName);
  }

  createLevel() {
    this.examPayload.createNewLevel();
  }

  createQuestion(levelIndex: number) {
    console.log(levelIndex)
    this.examPayload.levels[levelIndex].questions = this.examPayload.levels[levelIndex].createNewQuestion();
  }

  changeCurrentLevel(currentLevelIndex: number) {
    this.currentLevel = currentLevelIndex;

  }

  changeCurrentQuestion(currentQuestionIndex: number) {
    this.currentQuestion = currentQuestionIndex;
  }

  createOption() {
    this.examPayload.getLevels()[this.currentLevel].getQuestions()[this.currentQuestion].setOptions(
      this.examPayload.getLevels()[this.currentLevel].getQuestions()[this.currentQuestion].createNewOption());
  }

  getSplitString(options: string) {
    return options.split(",");
  }

  submit() {
    console.log(JSON.stringify(this.examPayload))

    this.examService.postExam(this.examPayload).subscribe(data=>console.log(data));
  }
}
