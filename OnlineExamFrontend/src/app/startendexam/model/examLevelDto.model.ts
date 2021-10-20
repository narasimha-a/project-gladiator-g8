export class ExamLevelDto{
    examId!:number;
    examLevelId!:number;
    passingCriteria!:number;
    submissionId!: number;
    selectedOptionsMap !: Map<string,string>;
}