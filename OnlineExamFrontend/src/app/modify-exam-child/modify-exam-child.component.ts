import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { Exam } from '../exam';
import { ExamService } from '../exam.service';

@Component({
  selector: 'app-modify-exam-child',
  templateUrl: './modify-exam-child.component.html',
  styleUrls: ['./modify-exam-child.component.css']
})
export class ModifyExamChildComponent implements OnInit {

  editval:Exam;

  constructor(private examService: ExamService,public dialogRef: MatDialogRef<ModifyExamChildComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
        this.editval = new Exam();
        console.log("data:",data);
        this.editval=<Exam>data;
    }


  ngOnInit(): void {
  }

  save() : Observable<Exam>{

    console.log(this.editval);
    this.dialogRef.close();
    return this.examService.addExam(this.editval);
    

  }

}
