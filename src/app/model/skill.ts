export class Skill{
  id?:number;
  name:string;
  cv:any;

  constructor(name: string, cv: any) {
    this.name = name;
    this.cv = cv;
  }
}
