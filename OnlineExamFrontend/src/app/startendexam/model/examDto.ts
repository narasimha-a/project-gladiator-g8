export class examDto{
    examId: number = 0;
    examName : string= "";

    constructor(examId:number, examName:string){
        this.examId=examId;
        this.examName=examName;
    }

    
}