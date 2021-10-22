export class UserExamPayload {

  examId: number | undefined;
  examName: string = "";
  levels: UserExamLevelPayload[] = [];


  constructor(examId: number | undefined, examName: string, levels: UserExamLevelPayload[]) {
    this.examId = examId;
    this.examName = examName;
    if (levels.length < 1) {
      this.levels.push(new UserExamLevelPayload(0, 0,
        [new UserQuestion(0, "", ",")]))
    }
    levels.forEach((value) => {
      let examLevelPayload = new UserExamLevelPayload(value.examLevelId, value.passingCriteria, value.questions)
      this.levels.push(examLevelPayload);
      console.log(examLevelPayload);
    })
  }

}

class UserExamLevelPayload {

  examLevelId: number | undefined;
  passingCriteria: number | undefined;

  questions: UserQuestion[] = [];


  constructor(examLevelId: number | undefined, passingCriteria: number | undefined, questions: UserQuestion[]) {
    this.examLevelId = examLevelId;
    this.passingCriteria = passingCriteria;
    questions.forEach((value => {
      let question = new UserQuestion(value.questionId, value.questionStatement, value.options);
      this.questions.push(question);
      console.log(question);
    }));
  }

}

class UserQuestion {

  questionId: number;
  questionStatement: string = "";
  options: string = "";

  selectedAnswer: string = "";


  constructor(questionId: number, questionStatement: string, options: string) {
    this.questionId = questionId;
    this.questionStatement = questionStatement;
    this.options = options;
    console.log(options.split(",")[0])
  }

  getOptions(): string[] {
    return this.options.split(",");
  }

  setOptions(values: string) {
    this.options = values;
  }

}
