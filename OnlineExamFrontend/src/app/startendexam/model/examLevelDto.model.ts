export class ExamLevelDto{
    examId!:number;
    examLevelId!:number;
    passingCriteria!:number;
    selectedOptionsMap !: Map<string,string>;
}