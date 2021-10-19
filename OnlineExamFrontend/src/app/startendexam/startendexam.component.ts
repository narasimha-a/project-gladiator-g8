import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StartendexamService } from '../startendexam.service';
import { exam } from './model/exam.model';
// import { Observable } from 'rxjs'


@Component({
  selector: 'app-startendexam',
  templateUrl: './startendexam.component.html',
  styleUrls: ['./startendexam.component.css']
})
export class StartendexamComponent implements OnInit {
  currentExam!: exam;
  examList: exam[]= []; 

  constructor(private startendexam: StartendexamService, private router:Router) { }

  ngOnInit(): void {
    this.getExamById(78);
  }


  getExamById(examId:number){
    
    this.startendexam.getExamById(examId).subscribe(data =>{
      this.currentExam= data;
      console.log(this.currentExam);
    }, (error) => {console.log("no data found");
    })

    

    
  }

  
 
  



}
