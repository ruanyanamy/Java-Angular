export class Person {
  constructor(
    public id:any,
    public firstname:string,
    public lastname:string,
    public street:string,
    public city:string,
    public _links:{"self":{"href":string}}
  ){}
}
