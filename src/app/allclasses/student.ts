export class student{
  constructor(
    public student_id:number,
   public student_password:string,
   public student_name:string,
   public date_of_birth:Date,
   public joining_date:Date ,
   public fk_batch_id:number,
   public fk_standard_id:number,
  ){

  }
}
