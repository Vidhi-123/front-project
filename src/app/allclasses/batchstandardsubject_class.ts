export class batchstandardsubject_class{
  constructor(
    public standard_id:number,
    public standard_no:number,
    public batch_id:number,
    public batch_name: string,
    public fk_standard_id: number,
    public subject_id:number,
    public subject_name:string,

public fk_subject_id:number
  ){

  }
}
