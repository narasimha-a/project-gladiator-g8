// import { Component, OnInit } from '@angular/core';
// import { FormControl, FormGroup } from '@angular/forms';
// import { Exam } from '../exam';
// import { ExamService } from '../exam.service';
// import * as XLSX from 'xlsx';
// import { Question } from '../question';
// import { ExamLevel } from '../exam-level';

// @Component({
//   selector: 'app-add-exam',
//   templateUrl: './add-exam.component.html',
//   styleUrls: ['./add-exam.component.css']
// })
// export class AddExamComponent implements OnInit {

//   levelvalue:number | undefined;

//   numSequence(n: number): Array<number> {
//     return Array(n);}

//   exams=['Java','Python','PHP','SQL','C','C++'];


//   exam=new Exam();

//   constructor(private examService: ExamService) { }

//   ngOnInit(): void {
//   }

  

//   addExamData()
//   {
//     this.examService.addExam(this.exam)
//     .subscribe(data => console.log(data), error => console.log(error));
//   this.exam = new Exam();
  
//   }

//   convertedJson:string | undefined;

//   fileUpload(event: any){
//     console.log(event.target.files);
//     const selectedFile=event.target.files[0];
//     const fileReader=new FileReader();
//     fileReader.readAsBinaryString(selectedFile);
//     fileReader.onload=(event:any)=>{
//       console.log(event);
//       let binaryData=event.target.result;
//       let workbook=XLSX.read(binaryData,{type:'binary'});
//       workbook.SheetNames.forEach(sheet=>{
//         const data=XLSX.utils.sheet_to_json(workbook.Sheets[sheet]);
//         this.convertedJson=JSON.stringify(data,undefined,4);


//         //additional
//         let jsonval1=JSON.parse(this.convertedJson);
//         var val;
//         for (let i in jsonval1){
//           let jsonval=jsonval1[i];

          


//           var que=new Question();
//           que.questionStatement=jsonval["questionStatement"];
//           que.options=jsonval["option1"]+","+jsonval["option2"]+","+jsonval["option3"]+","+jsonval["option4"];
//           que.answers=jsonval["answers"];

//           var lev=new ExamLevel();
//           lev.passingCriteria=jsonval["passingCriteria"];
//           lev.questions?.push(que);

//           this.exam.examName=jsonval["examName"];
//           this.exam.levels?.push(lev);
//     }
//     //  this.convertedJson=JSON.stringify(val,undefined,4);

//       this.addExamData();
//       })
//     }
//   }
//   //end of file upload

// }
