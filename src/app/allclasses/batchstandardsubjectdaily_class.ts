export class batchstandardsubjectdaily_class{
  constructor(
    public standard_id:number,
    public standard_no:number,
    public batch_id:number,
    public batch_name: string,
    public fk_standard_id: number,
    public subject_id:number,
    public subject_name:string,
    public title:string,
    public fk_batch_id:number,
    public fk_subject_id:number,
    public pdf:string,
    public work_id:number,
    public daily_date:Date


  ){

  }
}
