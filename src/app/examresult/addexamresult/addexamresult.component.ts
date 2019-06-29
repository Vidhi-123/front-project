import { Component, OnInit } from '@angular/core';
import { examresult } from 'src/app/allclasses/examresult_class';
import { ExamresultService } from 'src/app/allservices/examresult.service';
import { student } from 'src/app/allclasses/student';
import { Router } from '@angular/router';
import { examschedule } from 'src/app/allclasses/examschedule';
import { batch_class } from 'src/app/allclasses/batch_class';
import { BatchServiceService } from 'src/app/allservices/batch-service.service';
import { StudentService } from 'src/app/allservices/student.service';
import { ExamscheduleService } from 'src/app/allservices/examschedule.service';
import { exam_schedule } from 'src/app/home1/home1.component';

export class examsc{
  constructor(private batch_id:number,private subject_id:number){}
}

@Component({
  selector: 'app-addexamresult',
  templateUrl: './addexamresult.component.html',
  styleUrls: ['./addexamresult.component.css']
})
export class AddexamresultComponent implements OnInit {
  selectedstudent:student;
  selectedsubject:examresult;
  selectedBatch:batch_class;
  arr_batch:batch_class[]=[];
  arr_student:student[]=[];
  arr_subject:examresult[]=[];
  student_id:number;
  subject_id:number;
  i:number;
  selectedexam:examresult;
  marks_obtained:number;
  total_marks:number;
  selectedexam1:examresult;

  

  constructor(public ex_sc:ExamscheduleService,public examresultser:ExamresultService,public route:Router,public _batchser:BatchServiceService,public _studentser:StudentService) { }
  onBatchChange(){
    this._studentser.getStudentByBatchId(this.selectedBatch.batch_id).subscribe(
      (data:any)=>{
        this.arr_student=data;
        //console.log(this.arr_subject);
      }
    );

  }
  onStudentChange(){
    console.log(this.selectedstudent);
    this.examresultser.getExamResult(this.selectedstudent.fk_batch_id).subscribe(
      (data:any)=>{
        this.arr_subject=data;
        console.log(this.arr_subject);
      }
    );


  }
  keyPressText(event:any)
  {
    const pattern = /[0-9]/;
    let inputChar=String.fromCharCode(event.charCode);
    if(!pattern.test(inputChar))
    {
      event.preventDefault();
    }
  }


  onSubjectChange(){

    
    for(this.i=0;this.i<this.arr_subject.length;this.i++){
      if(this.arr_subject[this.i].subject_name==this.selectedsubject.subject_name){

        this.selectedexam=this.arr_subject[this.i];
        console.log(this.selectedexam);
          break;

      }
    }
  }

  
  onAdd(){
    console.log(this.selectedexam1);
    if(this.selectedexam1.marks>=this.marks_obtained)
    {
      this.examresultser.addExamResult(new examresult(0,this.marks_obtained,this.selectedsubject.exam_id,this.selectedstudent.student_id)).subscribe(
        (data:any)=>{
          console.log(data);
          this.route.navigate(['../menu/examresult']);
        }
      );
  
    }
    else
    {
      alert("marks can not be greater than "+this.selectedexam1.marks);
    }

    console.log(this.selectedstudent.student_id);
    console.log(this.selectedsubject.exam_id);
    console.log(this.marks_obtained);

  }
  onBack(){
    this.route.navigate(['../menu/examresult']);
  }
  ngOnInit() {
    // this.examresultser.getAllStudent().subscribe(
    //   (data:any)=>{
    //     this.arr_student=data;
    //     // this.arr_subject=data;
    //   }
    // );
    this._batchser.getAllBatch().subscribe(
      (data:any)=>{
        this.arr_batch=data;
      }
    );
  
  }


}
