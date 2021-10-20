
export class ExamPayload{

  private _examId: number |undefined;
  private _examName: string = "";
  private _levels : ExamLevelPayload[] = [];


  constructor(examId: number | undefined, examName: string, levels: ExamLevelPayload[]) {
    this._examId = examId;
    this._examName = examName;
    this._levels = [new ExamLevelPayload(1,70,[])];
  }


  get examId(): number | undefined {
    return this._examId;
  }

  set examId(value: number | undefined) {
    this._examId = value;
  }

  get examName(): string {
    return this._examName;
  }

  set examName(value: string) {
    this._examName = value;
  }

  get levels(): ExamLevelPayload[] {
    return this._levels;
  }

  set levels(value: ExamLevelPayload[]) {
    this._levels = value;
  }

  createNewLevel(): ExamLevelPayload[]{
    this.levels.push(new ExamLevelPayload(0,0,[]));
    return this.levels;
  }
}

class ExamLevelPayload {

  private _examLevelId : number | undefined;
  private _passingCriteria : number | undefined;

  private _questions : Question[] = [];


  constructor(examLevelId: number | undefined, passingCriteria: number | undefined, questions: Question[]) {
    this._examLevelId = examLevelId;
    this._passingCriteria = passingCriteria;
    this._questions = [new Question(3, "Hi","1,1","1"),
      new Question(4, "Hi","1,1","1")];
  }


  get examLevelId(): number | undefined {
    return this._examLevelId;
  }

  set examLevelId(value: number | undefined) {
    this._examLevelId = value;
  }

  get passingCriteria(): number | undefined {
    return this._passingCriteria;
  }

  set passingCriteria(value: number | undefined) {
    this._passingCriteria = value;
  }

  get questions(): Question[] {
    return this._questions;
  }

  set questions(value: Question[]) {
    this._questions = value;
  }

  createNewQuestion(): Question[]{
    this.questions.push(new Question(0,"","",""))

    return this.questions;
  }

}

class Question {

  private _questionId : number | undefined;
  private _questionStatement : string = "";

  private _options : string = "";

  private _answers : string = "";


  constructor(questionId: number | undefined, questionStatement: string, options: string, answers: string) {
    this._questionId = questionId;
    this._questionStatement = questionStatement;
    this._options = options;
    this._answers = answers;
  }


  get questionId(): number | undefined {
    return this._questionId;
  }

  set questionId(value: number | undefined) {
    this._questionId = value;
  }

  get questionStatement(): string {
    return this._questionStatement;
  }

  set questionStatement(value: string) {
    this._questionStatement = value;
  }

  get options(): string {
    return this._options;
  }

  set options(value: string) {
    this._options = value;
  }

  get answers(): string {
    return this._answers;
  }

  set answers(value: string) {
    this._answers = value;
  }
}
