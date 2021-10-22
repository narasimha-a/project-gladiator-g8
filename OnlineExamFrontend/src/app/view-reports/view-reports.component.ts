import { Component, OnInit } from '@angular/core';
import {ExamService} from "../exam.service";
import {ExamPayload} from "../exam-editor/exam-payload";
import {Exam} from "../exam";

@Component({
  selector: 'app-view-reports',
  templateUrl: './view-reports.component.html',
  styleUrls: ['./view-reports.component.css']
})
export class ViewReportsComponent implements OnInit {

  exams!: Exam[];

  constructor(private examService: ExamService) {
    this.examService.getExamList().subscribe(data=>{
      this.exams = data;
      console.log(this.exams);
    })
  }

  ngOnInit(): void {
  }



}
