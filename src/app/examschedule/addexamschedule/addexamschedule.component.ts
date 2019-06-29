import { Component, OnInit } from '@angular/core';
import { batch_class } from 'src/app/allclasses/batch_class';
import { subject_class } from 'src/app/allclasses/subject_class';
import { standard_class } from 'src/app/allclasses/standard_class';
import { BatchServiceService } from 'src/app/allservices/batch-service.service';
import { DailyworkService } from 'src/app/allservices/dailywork.service';
import { ExamscheduleService } from 'src/app/allservices/examschedule.service';
import { examschedule } from 'src/app/allclasses/examschedule';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addexamschedule',
  templateUrl: './addexamschedule.component.html',
  styleUrls: ['./addexamschedule.component.css']
})
export class AddexamscheduleComponent implements OnInit {
  exam_schedule_arr:examschedule[]=[];
  exam_date:Date;
  selectedstandard:number;
  arr_standard:standard_class[];
  selectedsubject:number;
  arr_subject:subject_class[]=[];
  arr_batch:batch_class[]=[];
  arr_batchchange:batch_class[]=[];
  selected_batch:batch_class;
  i:number;
  exam_schedule_id:number;
  fk_subject_id:number;
  fk_standard_id:number;
  fk_batch_id:number;
  marks:number;
  arr2:subject_class[]=[];
  hours:number;
  date1:Date;
  date2:Date;
  sc_date:string;
  flag:boolean;
  flag2:number=0;
  constructor(public recordservice:DailyworkService,public examscheduleservice:ExamscheduleService,public _route:Router,private _ser3:DailyworkService) { }
  onBack(){
    this._route.navigate(['../menu/examschedule']);
  }
  onStandardChange(){
    console.log("hi");
    this.recordservice.getbatchbystandardID(this.selectedstandard).subscribe(
      (data:batch_class[])=>{
        this.arr_batch=data;
        console.log(data);
      }
    );

    this._ser3.getSubjectByStandard(this.selectedstandard).subscribe(
      
      (data:any[])=>{
        console.log(this.selectedstandard);
        this.arr2=data;
        console.log(data);
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
  onCheckChange(item)
  {

    if(this.arr_batchchange.find(x=>x==item)){
      this.arr_batchchange.splice(this.arr_batchchange.indexOf(item),1);
    }
    else{
      this.arr_batchchange.push(item);
    }
    console.log(this.arr_batchchange);

  }

     onAdd()
     {
      //  console.log("hi");
      //   this.examscheduleservice.getBatchStdSubjectExam().subscribe(
      //    (data:examschedule[])=>
      //    {
      //      this.exam_schedule_arr=data;
      //      for(this.i=0;this.i<this.exam_schedule_arr.length;this.i++)
      //      {
      //        this.flag=false;

      //        this.flag2=0;
      //        this.date1=new Date(this.exam_schedule_arr[this.i].exam_date);
      //        this.date2=new Date(this.exam_date);
      //         if(this.exam_schedule_arr[this.i].fk_batch_id==this.selected_batch.batch_id)
      //        {
      //          this.flag2=1;
      //        }
      //        if(this.flag2==1)
      //        {
      //          if(this.date1.toDateString()==this.date2.toDateString())
      //          {
      //            this.flag=true;
      //             console.log(this.flag2);
      //            break;
      //          }
      //        }


      //        console.log(this.flag2);
      //      }
      //      if(this.flag==false)
      //      {
        this.date2=new Date(this.exam_date);
            this.examscheduleservice.addExamSchedule(new examschedule(0,this.selected_batch.batch_id,this.selectedstandard,this.selectedsubject,new Date(this.date2.getFullYear(),this.date2.getMonth(),this.date2.getDate()+1),this.marks,this.hours)).subscribe(
               (datas:any)=>
               {
                 console.log(datas);
                 this._route.navigate(['../menu/examschedule']);
               }
             );
              }
        //    }
        //    else
        //    {
        //     if(this.flag2==1)
        //    {
        //      alert("already added");
        //    }

        //    else if(this.flag2==1)
        //    {
        //      alert("batch is busy");
        //    }

        //    }

        //  }
    //    );
    //  }

  ngOnInit() 
  {
    this.recordservice.getAllStandard().subscribe(
      (data:any)=>{
        this.arr_standard=data;
      }
    )
    this.recordservice.getAllSubject().subscribe(
      (data:any)=>{
        this.arr_subject=data;
      }
    )
  }

}
