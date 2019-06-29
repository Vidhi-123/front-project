export class fees{
  constructor(public student_fees_id:number,
    public fk_student_id:number,
    public total_fees:number,
    public remaining_fees?:number,
    public paid_amount?:number,
    public student_name?:string,
    public batch_name?:string

    ){}
}
