export class Student {

  private _rollno:number=0
  private _name:string=""
  private _maths:number=0
  private _science:number=0
  private _english:number=0


  get rollno(): number {
    return this._rollno;
  }

  set rollno(value: number) {
    this._rollno = value;
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get maths(): number {
    return this._maths;
  }

  set maths(value: number) {
    this._maths = value;
  }

  get science(): number {
    return this._science;
  }

  set science(value: number) {
    this._science = value;
  }

  get english(): number {
    return this._english;
  }

  set english(value: number) {
    this._english = value;
  }
}
