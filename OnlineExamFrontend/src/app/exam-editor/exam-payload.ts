export class ExamPayload {

  examId: number | undefined;
  examName: string = "";
  levels: ExamLevelPayload[] = [];

  //[new ExamLevelPayload(0, 0, [new Question(0,"",",","")])];


  constructor(examId: number | undefined, examName: string, levels: ExamLevelPayload[]) {
    this.examId = examId;
    this.examName = examName;
    if (levels.length < 1) {
      this.levels.push(new ExamLevelPayload(0, 0,
        [new Question(0, "", ",", "")]))
    }
    levels.forEach((value) => {
      let examLevelPayload = new ExamLevelPayload(value.examLevelId, value.passingCriteria, value.questions)
      this.levels.push(examLevelPayload);
      console.log(examLevelPayload);
    })
    //this.levels = levels;
  }


  getExamId() {
    return this.examId;
  }

  setExamId(examId: number) {
    this.examId = examId;
  }

  getExamName() {
    return this.examName;
  }

  setExamName(examName: string) {
    this.examName = examName;
  }

  getLevels() {
    return this.levels;
  }

  setLevels(levels: ExamLevelPayload[]) {
    this.levels = levels;
  }


  createNewLevel(): ExamLevelPayload[] {
    this.levels.push(new ExamLevelPayload(0, 0,
      [new Question(0, "", ",", "")]));
    return this.levels;
  }
}

class ExamLevelPayload {

  examLevelId: number | undefined;
  passingCriteria: number | undefined;

  questions: Question[] = [];


  constructor(examLevelId: number | undefined, passingCriteria: number | undefined, questions: Question[]) {
    this.examLevelId = examLevelId;
    this.passingCriteria = passingCriteria;
    questions.forEach((value => {
      let question = new Question(value.questionId, value.questionStatement, value.options, value.answers);
      this.questions.push(question);
      console.log(question);
    }));
    //this.questions = questions;
  }


  getExamLevelId(): number | undefined {
    return this.examLevelId;
  }

  setExamLevelId(value: number | undefined) {
    this.examLevelId = value;
  }

  getPassingCriteria(): number | undefined {
    return this.passingCriteria;
  }

  setPassingCriteria(value: number | undefined) {
    this.passingCriteria = value;
  }

  getQuestions(): Question[] {
    return this.questions;
  }

  setQuestions(value: Question[]) {
    this.questions = value;
  }

  createNewQuestion() {
    console.log("in createNewQuestion")
    this.questions.push(new Question(0, "", ",", ""))

    return this.questions;
  }

}

class Question {

  questionId: number | undefined;
  questionStatement: string = "";
  options: string = "";

  answers: string = "";


  constructor(questionId: number | undefined, questionStatement: string, options: string, answers: string) {
    this.questionId = questionId;
    this.questionStatement = questionStatement;
    this.options = options;
    console.log(options.split(",")[0])
    this.answers = answers;
  }


  getQuestionId(): number | undefined {
    return this.questionId;
  }

  setQuestionId(value: number | undefined) {
    this.questionId = value;
  }

  getQuestionStatement(): string {
    return this.questionStatement;
  }

  setQuestionStatement(value: string) {
    this.questionStatement = value;
  }

  getOptions(): string[] {
    return this.options.split(",");
  }

  setOptions(values: string) {
    this.options = values;
  }

  updateOption(event: any, ind: number) {
    let optionList = this.getOptions();
    optionList[ind] = event.target.value;
    this.setOptions(optionList.toString())
    console.log(this.getOptions())
  }

  getAnswers(): string[] {
    return this.answers.split(",");
  }

  setAnswers(value: string) {
    this.answers = value;
  }

  createNewOption() {
    this.options += ",";
    console.log(this.options);
    return this.options;
  }

  deleteOption(index: number) {
    this.options = this.getOptions().splice(index, 1).toString();
    return this.options;
  }

}
