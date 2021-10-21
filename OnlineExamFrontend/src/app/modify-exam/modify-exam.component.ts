import {Component, OnInit} from '@angular/core';
import {Exam} from "../exam";
import {ExamService} from "../exam.service";
import {ActivatedRoute, Router} from "@angular/router";
import {MatDialog} from "@angular/material/dialog";

@Component({
  selector: 'app-modify-exam',
  templateUrl: './modify-exam.component.html',
  styleUrls: ['./modify-exam.component.css']
})
export class ModifyExamComponent implements OnInit {
  exam: Exam[] | undefined;

  constructor(private examService: ExamService, private router: Router,
              private dialogRef: MatDialog,
              private route: ActivatedRoute
  ) {
  }

  ngOnInit(): void {
    this.loadExam();
  }

  loadExam() {
    this.examService.getExamList().subscribe(data => {
      this.exam = data
      console.log(data)
    });
  }

  searchExam() {

  }

  sort() {

  }

  edit(exam: Exam) {
    this.router.navigate(['./', exam.examId],{relativeTo:this.route});

    // const dialogRef = this.dialogRef.open(ModifyExamChildComponent,
    //   {width: ' 400px', data: exam});
    //
    // dialogRef.afterClosed().subscribe(result => {
    //   this.router.navigate(['../'], {relativeTo: this.route});
    //   this.examService.getExamList().subscribe(data => this.exam = data);
    // })
  }

  deleteExam(exam: Exam) {
    this.examService.removeExam(exam).subscribe(data => {
        console.log(data);
        this.loadExam();
      },
      error => console.log(error)
    );
  }

  createExam() {
    this.router.navigate(['./newExam'],{relativeTo:this.route})
  }
}
