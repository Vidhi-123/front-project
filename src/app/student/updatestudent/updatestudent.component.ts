import { Component, OnInit } from '@angular/core';
import { standard_class } from 'src/app/allclasses/standard_class';
import { batch_class } from 'src/app/allclasses/batch_class';
import { BatchServiceService } from 'src/app/allservices/batch-service.service';
import { StudentService } from 'src/app/allservices/student.service';
import { ActivatedRoute, Router } from '@angular/router';
import { student } from 'src/app/allclasses/student';

@Component({
  selector: 'app-updatestudent',
  templateUrl: './updatestudent.component.html',
  styleUrls: ['./updatestudent.component.css']
})
export class UpdatestudentComponent implements OnInit {
  student_name:string;
  student_password:string;
  joining_date:Date;
  date_of_birth:Date;

 fk_standard_id:number;
  arr_standard:standard_class[]=[];
  selected_batch:batch_class;
  arrbatch:batch_class[]=[];
  maths:string;
  science:string;
  fk_batch_id:number
  english:string;
  physics:string;
  biology:string;
  student_id:number;
  date1:Date;
  date2:Date;


  constructor(private _batch:BatchServiceService,private _student:StudentService,private _route:Router,private _actroute:ActivatedRoute) { }
  onUpdate(){
    this.date1=new Date(this.joining_date);
    this.date2=new Date(this.date_of_birth);
    //console.log(this.batch_id,this.fk_standard_id);
    this._student.updateStudent(new student(this.student_id,this.student_password,this.student_name,this.date2,this.date1,this.fk_batch_id,this.fk_standard_id)).subscribe(

      (data:any)=>{
        //console.log(this.batch_id,this.fk_standard_id);
        console.log(data);
        this._route.navigate(['/student']);
      }
    )
  }
  onBack(){
    this._route.navigate(['../menu/student']);
  }
  ngOnInit() {
    this.student_id=this._actroute.snapshot.params['student_id'];
    this._student.getStudentById(this.student_id).subscribe(
     (data:student[])=>{
       console.log('hi')
       this.student_name=data[0].student_name;
       this.student_password=data[0].student_password;
       this.joining_date=data[0].joining_date;
       this.date_of_birth=data[0].date_of_birth;
       this.fk_standard_id=data[0].fk_standard_id;
       this.fk_batch_id=data[0].fk_batch_id;


     }
   )
    this._batch.getAllBatch().subscribe(
      (data:any)=>{
        this.arrbatch=data;
      }
    )
    this._batch.getAllStandard().subscribe(
      (data:any)=>{
        this.arr_standard=data;
      }
    )

  }

}
