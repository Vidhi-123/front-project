import { Component, OnInit } from '@angular/core';
import { batch_class } from 'src/app/allclasses/batch_class';
import { standard_class } from 'src/app/allclasses/standard_class';
import { subject_class } from 'src/app/allclasses/subject_class';
import { faculty } from 'src/app/allclasses/faculty';
import { BatchServiceService } from 'src/app/allservices/batch-service.service';
import { FacultyService } from 'src/app/allservices/faculty.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ScheduleService } from 'src/app/allservices/schedule.service';
import { batch_std_sub_fac_schedule } from 'src/app/allclasses/batch_std_sub_fac_schedule';
import { schedule } from 'src/app/allclasses/schedule';

@Component({
  selector: 'app-updateschedule',
  templateUrl: './updateschedule.component.html',
  styleUrls: ['./updateschedule.component.css']
})
export class UpdatescheduleComponent implements OnInit {

  constructor(private _ser1:BatchServiceService,private _ser2:FacultyService,private _ser3:ScheduleService,private _actroute:ActivatedRoute,private _route:Router) { }
  timings:string;
  schedule_id:number;
  arrbatch:batch_class[]=[];
  arrstandard:standard_class[]=[];
  arrsubject:subject_class[]=[];
  arrfaculty:faculty[]=[];
  fk_standard_id:number;
  fk_batch_id:number;
  fk_faculty_id:string;
  fk_subject_id:number;
  onUpdate(){
    //console.log(this.batch_id,this.fk_standard_id);
    this._ser3.updateSchedule(new schedule(this.schedule_id,this.fk_subject_id,this.fk_batch_id,this.fk_standard_id,this.fk_faculty_id,this.timings)).subscribe(

      (data:any)=>{
        //console.log(this.batch_id,this.fk_standard_id);
        console.log(data);
        this._route.navigate(['../menu/schedule']);
      }
    )
  }
  onBack()
  {
    this._route.navigate(['../menu/schedule']);
  }

  ngOnInit() {
    this.schedule_id=this._actroute.snapshot.params['schedule_id'];
     this._ser3.getScheduleById(this.schedule_id).subscribe(
      (data:batch_std_sub_fac_schedule[])=>{
        console.log('hi')
        this.timings=data[0].timings;
        this.fk_standard_id=data[0].fk_standard_id;
        this.fk_subject_id=data[0].fk_subject_id;
        this.fk_batch_id=data[0].fk_batch_id;
        this.fk_faculty_id=data[0].fk_faculty_id;


      }
    )
    this._ser1.getAllBatch().subscribe(
      (data:any)=>{
        this.arrbatch=data;
      }
    )
    this._ser1.getAllStandard().subscribe(
      (data:any)=>{
        this.arrstandard=data;
      }
    )
    this._ser1.getAllSubject().subscribe(
      (data:any)=>{
        this.arrsubject=data;
      }
    )
    this._ser2.getAllFaculty().subscribe(
      (data:any)=>{
        this.arrfaculty=data;
      }
    )

  }

}
