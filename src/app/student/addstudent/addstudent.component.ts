import { Component, OnInit } from '@angular/core';
import { standard_class } from 'src/app/allclasses/standard_class';
import { batch_class } from 'src/app/allclasses/batch_class';
import { StudentService } from 'src/app/allservices/student.service';
import { BatchServiceService } from 'src/app/allservices/batch-service.service';
import { DailyworkService } from 'src/app/allservices/dailywork.service';
import { student } from 'src/app/allclasses/student';
import { Router } from '@angular/router';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { subject_class } from 'src/app/allclasses/subject_class';
import { sub } from 'src/app/allclasses/sub';

@Component({
  selector: 'app-addstudent',
  templateUrl: './addstudent.component.html',
  styleUrls: ['./addstudent.component.css']
})
export class AddstudentComponent implements OnInit {
  student_name:string;
  student_password:string;
  joining_date:Date;
  date_of_birth:Date;
student_id:number;
  selectedstandard:number;
  arr_standard:standard_class[]=[];
  selected_batch:batch_class;
  arr_batch:batch_class[]=[];
  maths:string;
  science:string;
  english:string;
  physics:string;
  biology:string;
  date1:Date;
  date2:Date;
  i:number=0;
  arr_subject:subject_class[]=[];
  arr_sub:subject_class[]=[];
  constructor(private _studentservice:StudentService,private _stuser:StudentService,private _daily:DailyworkService,private _batch:BatchServiceService,private _route:Router) { }
  onStandardChange(){
    console.log("hi");
    this._daily.getbatchbystandardID(this.selectedstandard).subscribe(
      (data:batch_class[])=>{
        this.arr_batch=data;
        console.log(data);
      }
    );
this._stuser.getSubjectByStandard(this.selectedstandard).subscribe(
  (data:any[])=>{

    this.arr_subject=data
  }
)

  }

  onCheckChange(item)
  {
    console.log("xyz");
    if(this.arr_sub.find(x=>x==item)){
      this.arr_sub.splice(this.arr_sub.indexOf(item),1);
    }
    else{
      this.arr_sub.push(item)
    }
    console.log(this.arr_sub);

  }
  onAdd(){
    this.date1=new Date(this.joining_date);
    this.date2=new Date(this.date_of_birth);
    console.log(this.student_name);
    this._studentservice.addStudent(new student(0,this.student_password,this.student_name,this.date2,this.date1,this.selected_batch.batch_id,this.selectedstandard)).subscribe(
      (data:any)=>{
        console.log(data);
          this.student_id=data.insertId;
        for(this.i=0;this.i<this.arr_sub.length;this.i++)
        {
          console.log(this.arr_sub[this.i].subject_id);
          this._stuser.AddSubject(new sub(this.student_id,this.arr_sub[this.i].subject_id)).subscribe(
            (data:any)=>
            {
              console.log(data);
            }
          );
        }
      }
    )
  }
  onBack(){
    this._route.navigate(['../menu/student']);
  }

  ngOnInit() {
    this._batch.getAllStandard().subscribe(
      (data:any)=>{
        this.arr_standard=data;
      }
    )
  }

}
