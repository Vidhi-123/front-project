import { Component, OnInit } from '@angular/core';
import { StudentService } from 'src/app/allservices/student.service';
import { student } from 'src/app/allclasses/student';
import { FeesService } from 'src/app/allservices/fees.service';
import { fees_detail } from 'src/app/allclasses/fees_detail';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addfees',
  templateUrl: './addfees.component.html',
  styleUrls: ['./addfees.component.css']
})
export class AddfeesComponent implements OnInit {
arr_student:student[]=[];
selectedstudent:number;
fk_fees_id:number;
amount:number;
mode:string;
arr2:fees_detail[]=[];
onBack(){
  this._route.navigate(['../menu/fees']);
}
onAdd(){
  this._feesservice.addFees(new fees_detail(0,this.fk_fees_id,this.amount,this.mode)).subscribe(
    (data:any)=>{
      console.log(data);
      this.arr2.push(new fees_detail(0,this.fk_fees_id,this.amount,this.mode));
      console.log(this.arr2)
      this._route.navigate(['../menu/fees']);

    }

  );

}
onFeesChange(){

  this._feesservice.getStudentfeesidByStudentid(this.selectedstudent).subscribe(
    (data)=>{
      this.fk_fees_id=data[0].student_fees_id;
      console.log(data);
      console.log(this.fk_fees_id);
    }
  );

}

  constructor(private _studentservice:StudentService,private _feesservice:FeesService,private _route:Router) { }

  ngOnInit() {
    this._studentservice.getStudent().subscribe(
      (data:any)=>{
        this.arr_student=data;
        console.log(this.arr_student);
      }
    )
  }

}
