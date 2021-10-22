import {TSMap} from "typescript-map";

export class LevelSubmissionPayload{
  examId : number | undefined;
  examLevelId : number | undefined;
  submissionId : number | undefined;
  passingCriteria : number | undefined;
  selectedOptionsMap! : TSMap<number, string>


  constructor(examId: number | undefined, examLevelId: number | undefined, submissionId: number | undefined, passingCriteria: number | undefined, selectedOptionsMap: TSMap<number, string>) {
    this.examId = examId;
    this.examLevelId = examLevelId;
    this.submissionId = submissionId;
    this.passingCriteria = passingCriteria;
    this.selectedOptionsMap = selectedOptionsMap;
  }
}
