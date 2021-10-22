import {Component, OnInit} from '@angular/core';
import {ExamService} from '../exam.service';
import {SearchStudentDto} from '../search-student-dto';

@Component({
  selector: 'app-filter-students',
  templateUrl: './filter-students-component.component.html',
  styleUrls: ['./filter-students-component.component.css']
})


export class FilterStudentsComponentComponent implements OnInit {

  filterList = {
    states: ['Maharastra', 'Karnataka', 'Goa'],
    cities: ['Mumbai', 'Mangaluru'],
    exams: ['Java', 'SQL'],
  };


  studentsInfo: SearchStudentDto[] = [];
  copyData: SearchStudentDto[] = this.studentsInfo;

  constructor(private examService: ExamService) {
  }

  ngOnInit(): void {

    this.examService.searchStudents().subscribe((data) => {
      console.log(data);
      console.log(data[0]);
      for (var index in data) {
        var val = data[index];
        //  console.log("val=",val.searchId);
        console.log("split=", val.split(","));
        var arr: string[] = val.split(",");
        const stud = new SearchStudentDto();
        console.log(arr[0]);
        stud.userName = arr[0];
        stud.userEmail = arr[1];
        stud.userMobile = arr[2];
        stud.city = arr[3];
        stud.state = arr[4];
        stud.examName = arr[5];
        stud.percentages = arr[6];
        this.studentsInfo.push(stud);

      }
      console.log(this.studentsInfo);

    });
  }

  states = "";
  cities = "";
  exams = "";

  filterChange(appliedfilters: any) {
    console.log(appliedfilters);
    this.states = appliedfilters.appliedFilterValues.states;
    this.cities = appliedfilters.appliedFilterValues.cities;
    this.exams = appliedfilters.appliedFilterValues.exams;

    /*let you have selected India as country and IT sector.

    you will get an object here i.e.

   { appliedFilterValues: {country: "India",sector: "IT"}
   isFilter: true
   }
    */
    this.studentsInfo = this.copyData;

    if (this.states) {
      this.studentsInfo = this.studentsInfo.filter(item => item.state === this.states);
    }

    if (this.cities) {
      this.studentsInfo = this.studentsInfo.filter(item => item.city === this.cities);
    }

    if (this.exams) {
      this.studentsInfo = this.studentsInfo.filter(item => item.examName === this.exams);
    }


    //now do your awesome filtering work here.
  }

}
