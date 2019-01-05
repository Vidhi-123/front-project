import { Component, OnInit } from '@angular/core';
import { batchstandardsubject_class } from 'src/app/allclasses/batchstandardsubject_class';
import { standard_class } from 'src/app/allclasses/standard_class';
import { subject_class } from 'src/app/allclasses/subject_class';
import { batch_std_sub_fac_schedule } from 'src/app/allclasses/batch_std_sub_fac_schedule';
import { ScheduleService } from 'src/app/allservices/schedule.service';
import { FacultyService } from 'src/app/allservices/faculty.service';
import { BatchServiceService } from 'src/app/allservices/batch-service.service';
import { batch_class } from 'src/app/allclasses/batch_class';
import { DailyworkService } from 'src/app/allservices/dailywork.service';
import { schedule } from 'src/app/allclasses/schedule';
import { Scheduler } from 'rxjs';
import { and } from '@angular/router/src/utils/collection';

@Component({
  selector: 'app-addschedule',
  templateUrl: './addschedule.component.html',
  styleUrls: ['./addschedule.component.css']
})
export class AddscheduleComponent implements OnInit {
timings:string;
schedule_date:Date;
selectedstandard:number;
arr_standard:standard_class[]=[];
selectedsubject:number;
arr_subject:subject_class[]=[];
selectedfaculty:batch_std_sub_fac_schedule;
arr_faculty:batch_std_sub_fac_schedule[]=[];
arr_batch:batch_class[]=[];
arr_batchchange:batch_class[]=[];
merge_arr:batch_std_sub_fac_schedule[]=[];
selected_batch:batch_class;
i:number;
schedule_id:number;
fk_subject_id:number;
fk_standard_id:number;
fk_batch_id:number;
fk_faculty_id:number;
date1:Date;
date2:Date;
sc_date:string;

sche:schedule[]=[];

flag:boolean;
flag1:number=0;
faculty_name:string
  constructor(private _ser1:ScheduleService,private _ser2:FacultyService,private _ser3:BatchServiceService,private _ser4:DailyworkService) { }
  onStandardChange(){
    console.log("hi");
    this._ser4.getbatchbystandardID(this.selectedstandard).subscribe(
      (data:batch_class[])=>{
        this.arr_batch=data;
        console.log(data);
      }
    );

  }
  onAdd()
  {
  this._ser1.getAllScheduleBatchFacultystdsubject().subscribe(
    (data:schedule[])=>
    {
      this.sche=data;
      for(this.i=0;this.i<this.sche.length;this.i++)
      {
       // this.flag=false;
        if(this.sche[this.i].fk_faculty_id==this.selectedfaculty.faculty_id)
        {
          if(this.sche[this.i].timings==this.timings)
          {
            this.date1=new Date(this.sche[this.i].schedule_date);
            this.date2=new Date(this.schedule_date);
           if(this.date1.toDateString()==this.date2.toDateString())
           {
             console.log(this.selected_batch);
             console.log(this.selectedfaculty);
             console.log(this.selectedstandard);
             console.log(this.selectedsubject);
             console.log(this.sche[this.i].fk_subject_id,this.selectedsubject,this.sche[this.i].fk_batch_id,this.selected_batch.batch_id,this.sche[this.i].fk_standard_id,this.selectedstandard);
              if(this.sche[this.i].fk_subject_id==this.selectedsubject && this.sche[this.i].fk_batch_id==this.selected_batch.batch_id && this.sche[this.i].fk_standard_id==this.selectedstandard)
             {
               console.log(this.flag1)

               alert("already added");
               this.flag1=2
               console.log(this.flag1)
               break;
             }
             else
             {
             // this.flag=true;
              this.flag1=1
              break;
             }

           }


        }

        }
      }
      if(this.flag1==1)
      {
        console.log("faculty is busy");
      }
      else if(this.flag1==2)
      {
        console.log("added");
      }



      else if(this.flag1==0){

        console.log("available");
       this._ser1.addSchedule(new schedule(0,this.fk_subject_id,this.fk_batch_id,this.fk_standard_id,this.fk_faculty_id,this.timings,this.schedule_date)).subscribe(
         (data:any)=>
         {
           console.log(data);
         }
       );
      }
    }
  );



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
  ngOnInit() {


    this._ser3.getAllStandard().subscribe(
      (data:any)=>{
        this.arr_standard=data;
      }
    )
    this._ser3.getAllSubject().subscribe(
      (data:any)=>{
        this.arr_subject=data;
      }
    )
    this._ser2.getAllFaculty().subscribe(
      (data:any)=>{
        this.arr_faculty=data;
      }
    )
    this._ser1.getAllScheduleBatchFacultystdsubject().subscribe(
      (data:any)=>{
        this.merge_arr=data;
        console.log(this.merge_arr)
        this.date1=this.merge_arr[0].schedule_date;
        console.log(this.date1);
      }
    )

  }

}
