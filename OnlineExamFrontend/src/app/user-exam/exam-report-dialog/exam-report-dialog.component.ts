import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-exam-report-dialog',
  templateUrl: './exam-report-dialog.component.html',
  styleUrls: ['./exam-report-dialog.component.css']
})
export class ExamReportDialogComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<ExamReportDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public isEligible: number) { }

  ngOnInit(): void {
  }

}
