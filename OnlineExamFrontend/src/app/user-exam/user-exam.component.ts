import {Component, OnInit} from '@angular/core';
import {UserExamPayload} from "./user-exam-payload";
import {ExamService} from "../exam.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Location} from "@angular/common";
import {LevelSubmissionPayload} from "./level-submission-payload";
import {TSMap} from "typescript-map";
import {UserService} from "../user.service";
import {MatDialog} from "@angular/material/dialog";
import {ExamReportDialogComponent} from "./exam-report-dialog/exam-report-dialog.component";

@Component({
  selector: 'app-user-exam',
  templateUrl: './user-exam.component.html',
  styleUrls: ['./user-exam.component.css']
})
export class UserExamComponent implements OnInit {


  examPayload: UserExamPayload;

  currentLevelSubmissionPayload!: LevelSubmissionPayload;

  currentLevel = 0;

  currentQuestion = 0;

  isDataLoaded = false;


  constructor(private examService: ExamService,
              private userService: UserService,
              private route: ActivatedRoute,
              private matDialog: MatDialog,
              private router: Router,
              private location: Location) {
    // let reqExamId = this.route.snapshot.paramMap.get('examId');
    // console.log(reqExamId);

    this.examPayload = new UserExamPayload(-1, "", [])

    this.examService.getExamWithOutAnswersByExamId(108).subscribe(data => {
      console.log(data)
      this.examPayload = new UserExamPayload(data.examId, data.examName, data.levels);
      this.isDataLoaded = true;
      console.log(sessionStorage.getItem("submissionId"))
      console.log(this.examPayload);
      this.currentLevelSubmissionPayload = new LevelSubmissionPayload(108,
        this.examPayload.levels[this.currentLevel].examLevelId,
        Number(sessionStorage.getItem("submissionId")),
        this.examPayload.levels[this.currentLevel].passingCriteria,
        new TSMap<number, string>()
      )
      //this.responseString = JSON.stringify(this.examPayload.getLevels()[0].getQuestions()()[0].options);
    })


    // if(reqExamId === 'exam'){
    //   this.examPayload = new ExamPayload(0,"",[]);
    //   this.isDataLoaded = true;
    // }
    // else if(reqExamId != null){
    //   this.examService.getExamByExamId(Number(reqExamId)).subscribe(data=>{
    //     console.log(data)
    //     this.examPayload = new ExamPayload(data.examId, data.examName, data.levels);
    //     this.isDataLoaded = true;
    //     console.log(this.examPayload);
    //     //this.responseString = JSON.stringify(this.examPayload.getLevels()[0].getQuestions()()[0].options);
    //   })
    // }

  }

  ngOnInit(): void {
    //console.log(this.examPayload.examName);

  }

  changeCurrentLevel(currentLevelIndex: number) {
    this.currentLevel = currentLevelIndex;
    this.currentQuestion = 0;
  }

  changeCurrentQuestion(currentQuestionIndex: number) {
    this.currentQuestion = currentQuestionIndex;
  }


  getSplitString(options: string) {
    return options.split(",");
  }

  submit() {
    console.log(JSON.stringify(this.currentLevelSubmissionPayload))
    this.examPayload.levels[this.currentLevel].questions.forEach(question => {
      if (question.questionId != null) {
        this.currentLevelSubmissionPayload.selectedOptionsMap.set(question.questionId, question.selectedAnswer)
      }
    })
    this.userService.postSubmission(this.currentLevelSubmissionPayload, Number(sessionStorage.getItem("userId")))
      .subscribe(data => {
        console.log(data.percentages)
        let percentageList = data.percentages.split(",")
        this.currentQuestion = 0;
        if (Number(percentageList[percentageList.length - 1]) >= Number(this.examPayload.levels[this.currentLevel].passingCriteria)) {
          if(this.currentLevel < this.examPayload.levels.length-1){
            const dialogRef = this.matDialog.open(ExamReportDialogComponent, {
              width: '250px',
              data: 1
            });

            dialogRef.afterClosed().subscribe(result => {
              console.log('The dialog was closed');
              if(this.currentLevel != this.examPayload.levels.length-1)
                this.currentLevel += 1;
            });
          }
          else {
            const dialogRef = this.matDialog.open(ExamReportDialogComponent, {
              width: '250px',
              data: 2
            });

            dialogRef.afterClosed().subscribe(result => {
              console.log('The dialog was closed');
              this.router.navigate(["./user/home"])
            });
          }
        }
        else{
          const dialogRef = this.matDialog.open(ExamReportDialogComponent, {
            width: '250px',
            data: 3
          });

          dialogRef.afterClosed().subscribe(result => {
            console.log('The dialog was closed');
            this.router.navigate(["./user/home"])
          });
        }
      })
  }

}
