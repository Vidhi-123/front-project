import { Component, OnInit } from '@angular/core';
import { StudentService } from 'src/app/allservices/student.service';
import { student } from 'src/app/allclasses/student';
import { FeesService } from 'src/app/allservices/fees.service';
import { fees_detail } from 'src/app/allclasses/fees_detail';
import { Router } from '@angular/router';
import { fees_add } from 'src/app/allclasses/fees_add';
import { fees } from 'src/app/allclasses/fees';
import { batch_class } from 'src/app/allclasses/batch_class';
import { BatchServiceService } from 'src/app/allservices/batch-service.service';
import { d } from '@angular/core/src/render3';

@Component({
  selector: 'app-addfees',
  templateUrl: './addfees.component.html',
  styleUrls: ['./addfees.component.css']
})
export class AddfeesComponent implements OnInit {
arr_student:student[]=[];
selectedstudent:number;
fk_fees_id:number;
selectedbatch:batch_class;
amount:number;
fees_arr:student[]=[];
mode:string;
rem_fees:number=0;
arr_batch:batch_class[]=[];
arr2:fees_detail[]=[];
onBack(){
  this._route.navigate(['../menu/fees']);
}
onAdd(){
  if(this.rem_fees<this.amount)
  {
    alert("remaining fees only : "+this.rem_fees);
    this.amount=null;
  }
  else
  {
    this._feesservice.addFees(new fees_detail(0,this.fk_fees_id,this.amount,this.mode)).subscribe(
      (data:any)=>{
        console.log(data);
        this.arr2.push(new fees_detail(0,this.fk_fees_id,this.amount,this.mode));
        console.log(this.arr2)
        this._route.navigate(['../menu/fees']);
  
      }
  
    );
    
  }
  
}

onBatchChange(){
  this._studentservice.getStudentByBatchId(this.selectedbatch.batch_id).subscribe(
    (data:any)=>{
      console.log(data);
      this.fees_arr=data;
      // for(let x=0;x<data.length;x++)
      // {
      //   if(data[x].student_fees_id!=undefined)
      //   {
      //     this.fees_arr.push(data[0]);
      //   }
      // }

      //console.log(this.arr_subject);
    }
  );

}

onFeesChange(){
  console.log(this.selectedstudent);

  this._feesservice.getStudentfeesidByStudentid(this.selectedstudent).subscribe(
    (data:any[])=>{
      console.log(data);
      if(data.length>=1)
      {
        this.fk_fees_id=data[0].student_fees_id;
        this._feesservice.getFeesDetail(this.fk_fees_id).subscribe(
          (data1:any[])=>
          {
            console.log(data1);
            this.rem_fees=data[0].total_fees-data1[0].amount;
            if(this.rem_fees==0)
            {
              alert("fees alredy paid");
              this.selectedstudent=null;
            }
          }
        );
      }
      else
      {
        alert("no record of student in fees table ");
        this.selectedstudent=null;
      }
      console.log(data);
      console.log(this.fk_fees_id);
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

  constructor(private _studentservice:StudentService,private _feesservice:FeesService,private _batchser:BatchServiceService,private _route:Router) { }

  ngOnInit() {


    // this._feesservice.getStudentNameByFees().subscribe(
    //   (data:any)=>{
    //     this.fees_arr=data;
    //     console.log(this.fees_arr);
    //   }
    // )
    // this._studentservice.getStudent().subscribe(
    //   (data:any)=>{
    //     this.arr_student=data;
    //     console.log(this.arr_student);
    //   }
    // )
  
    this._batchser.getAllBatch().subscribe(
      (data:any)=>{
        this.arr_batch=data;
      }
    );


  }

}
