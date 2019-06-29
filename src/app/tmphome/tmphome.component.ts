import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointState, BreakpointObserver } from '@angular/cdk/layout';
import { StudentService } from '../allservices/student.service';
import { Router } from '@angular/router';
import { FeesService } from '../allservices/fees.service';
import { fees_detail } from '../allclasses/fees_detail';
import { fees_add } from '../allclasses/fees_add';
import { MatTableDataSource } from '@angular/material';
import { DashboardserService } from '../dashboardser.service';
import { batch_class } from '../allclasses/batch_class';
import { BatchServiceService } from '../allservices/batch-service.service';
import { ScheduleService } from '../allservices/schedule.service';
export interface PeriodicElement {
  total_batches:string;
  exam_date:string;
  subject_name:string;
  exam_timings:string;
   
 }
 export interface PeriodicElement1 {
  total_batches:string;
  exam_date:string;
  subject_name:string;
  exam_timings:string;
   
 }
 export interface PeriodicElement2 {
  total_batches:string;
  exam_date:string;
  subject_name:string;
  exam_timings:string;
   
 }
 export interface schedule {
  batch_name:string;
  timings:string;
  faculty_name:string;
  subject_name:string;
  
   
 }
 export class attendance{
   constructor(public fk_standard_id:number,public student_name:string,public batch_name:string,public total:number){

   }  
 }

 export class exam_schedule{
   constructor(public fk_standard_id:number,public batch_name:string,public exam_date:Date,public subject_name:string,public hours:number){}
 }
//  export interface fees {
//   student_name:string;
//   total_fees:number;
//   pending_fees:number;
//   paid_fees:number
  
   
//  }
 const ELEMENT_DATA: PeriodicElement[] = [
  {total_batches: '8_B1', exam_date: '11-02-2019',subject_name:'maths',exam_timings:'8:00 am'},
  {total_batches: '8_B2', exam_date: '12-02-2019',subject_name:'science',exam_timings:'10:00 am'},
];
const ELEMENT_DATA1: PeriodicElement1[] = [
  {total_batches: '9_B1', exam_date: '13-02-2019',subject_name:'english',exam_timings:'8:00 am'},
  {total_batches: '9_B2', exam_date: '14-02-2019',subject_name:'science',exam_timings:'12:00 pm'},
];const ELEMENT_DATA2: PeriodicElement2[] = [
  {total_batches: '10_B1', exam_date: '15-02-2019',subject_name:'english',exam_timings:'8:00 am'},
  {total_batches: '10_B2', exam_date: '16-02-2019',subject_name:'science',exam_timings:'12:00 pm'},
];
const schedule_data: schedule[] = [
  {batch_name: '10_B1', timings: '10:00 AM',faculty_name:'JAIMINI PATEL',subject_name:'english'},
  {batch_name: '9_B1', timings: '11:00 AM',faculty_name:'DIPTI BHATT',subject_name:'science'},
  {batch_name: '12_B1', timings: '12:00 PM',faculty_name:'HITESH PARMAR',subject_name:'physics'},
  {batch_name: '8_B1', timings: '1:00 PM',faculty_name:'POOJA GANDHI',subject_name:'maths'},
  
];
// const fees_data: fees[] = [
//   {student_name: 'HETVEE', total_fees: 10000,pending_fees:2000,paid_fees:6000},
//   {student_name: 'VIDHI', total_fees: 12000,pending_fees:4000,paid_fees:8000},
//   {student_name: 'KINJAL', total_fees: 14000,pending_fees:6000,paid_fees:8000},
//   {student_name: 'NIKITA', total_fees: 12000,pending_fees:4000,paid_fees:8000},
//   {student_name: 'DHRUVI', total_fees: 10000,pending_fees:4000,paid_fees:6000},
  
// ];
@Component({
  selector: 'app-tmphome',
  templateUrl: './tmphome.component.html',
  styleUrls: ['./tmphome.component.css']
})

export class TmphomeComponent implements OnInit {
  arr:fees_detail[]=[];
  student_list:fees_add[]=[];
  i:number=0;
  j:number=0;
  std_8:attendance[]=[];
  std_9:attendance[]=[];
  std_10:attendance[]=[];
  std_11:attendance[]=[];
  std_12:attendance[]=[];
  e_std_8:exam_schedule[]=[];
  e_std_9:exam_schedule[]=[];
  e_std_10:exam_schedule[]=[];
  e_std_11:exam_schedule[]=[];
  e_std_12:exam_schedule[]=[];
  batch_arr:batch_class[]=[];
  attendancedisplayedColumns: string[] = ['batch_name','student_name','total'];
  displayedColumns: string[] = ['batch_name','exam_date','subject_name','hours'];
  displayedColumns1: string[] = ['total_batches','exam_date','subject_name','exam_timings'];
  displayedColumns2: string[] = ['total_batches','exam_date','subject_name','exam_timings'];
  displayedschedule:string[]=['batch_name','timings','faculty_name','subject_name'];
  displayedfees:string[]=['student_name','total_fees','pending_fees','paid_fees'];
  dataSource = ELEMENT_DATA;
  dataSource1 = ELEMENT_DATA1;
  dataSource2 = ELEMENT_DATA2;
  
  std_8_dataSource=new MatTableDataSource();
  std_9_dataSource=new MatTableDataSource();
  std_10_dataSource=new MatTableDataSource();
std_11_dataSource=new MatTableDataSource();
std_12_dataSource=new MatTableDataSource();
  e_std_8_dataSource=new MatTableDataSource();
  e_std_9_dataSource=new MatTableDataSource();
  e_std_10_dataSource=new MatTableDataSource();
  e_std_11_dataSource=new MatTableDataSource();
  e_std_12_dataSource=new MatTableDataSource();
  feessource=new MatTableDataSource();
  examscheduledataSource=new MatTableDataSource();
  schedulesource=new MatTableDataSource();
  pdf:string;
  display_arr:schedule[]=[]
  batch_name:string;
  student_name:string;
  examcnt:string;
  date1:Date

  exam_date:Date;
  today:Date=new Date();
  /** Based on the screen size, switch from standard to one column per row */
  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return [
          { title: 'Card 1', cols: 1, rows: 1 },
          { title: 'Card 2', cols: 1, rows: 1 },
          { title: 'Card 3', cols: 1, rows: 1 },
          { title: 'Card 4', cols: 1, rows: 1 }
        ];
      }

      return [
        { title: 'Card 1', cols: 2, rows: 1 },
        { title: 'Card 2', cols: 1, rows: 1 },
        { title: 'Card 3', cols: 1, rows: 2 },
        { title: 'Card 4', cols: 1, rows: 1 }
      ];
    })
  );

  constructor(private batch_ser:BatchServiceService,private _scheduleser:ScheduleService,private breakpointObserver: BreakpointObserver,private _ser1:FeesService,private _route:Router,private stu_ser:StudentService,public _dashboardser:DashboardserService) {}
  
  ngOnInit()
  {
    this._ser1.getStudentNameByFees().subscribe(
      (data:any[])=>
      {
        console.log(data);
        this.student_list=data;
        for(this.i=0;this.i<this.student_list.length;this.i++)
        {
          
          this._ser1.getStudentRemaingFees(this.student_list[this.i].fk_student_id).subscribe(
          (data:any[])=>{
            if(data[0].total_fees!=null)
            {
              this.arr.push(data[0]);
              this.feessource.data=this.arr;
              console.log(this.feessource.data);
            }
            }
          )
        }
      }
    );
    this._dashboardser.getAllMaterial().subscribe(
      (data:any)=>{
        this.pdf=data[0].pdf;
        console.log(data);
        console.log(this.pdf);
      }
    );
    this._dashboardser.getAllBatch().subscribe(
      (data:any)=>{
        this.batch_name=data[0].batch_name;
        console.log(data);
        console.log(this.batch_name);
      }
    );
    this._dashboardser.getAllStudent().subscribe(
      (data:any)=>{
        this.student_name=data[0].student_name;
        console.log(data);
        console.log(this.student_name);
      }
    );
    this._dashboardser.getAllExam().subscribe(
      (data:any)=>{
        this.examcnt=data[0].exam_id;
        console.log(data);
        console.log(this.examcnt);
      }
    );
    this.batch_ser.getAllBatch().subscribe(
      (data:batch_class[])=>
      {
        console.log(data);
        this.batch_arr=data;
        console.log(this.batch_arr);
        for(this.j=0;this.j<this.batch_arr.length;this.j++)
        {
          this._dashboardser.getAllExamSchedule(this.batch_arr[this.j].batch_id).subscribe(
            (data2:exam_schedule[])=>
            {
              console.log(data2);
              if(data2.length>0)
              {
                this.exam_date=new Date(data2[0].exam_date);
                console.log("xyz");
                console.log(this.exam_date.getDate());
                console.log(this.today.getDate());
                console.log(this.exam_date.getDate()>this.today.getDate() );

                if(data2[0].fk_standard_id==1 &&  this.exam_date.getDate()>this.today.getDate())
                {
                 
                  this.e_std_8.push(data2[0]);
                  this.e_std_8_dataSource.data=this.e_std_8;
                  console.log(this.e_std_8);
                }
                else if(data2[0].fk_standard_id==2  && this.today.getDate()<this.exam_date.getDate() )
                {
                  this.e_std_9.push(data2[0]);
                 
                  this.e_std_9_dataSource.data=this.e_std_9;
                }
                else if(data2[0].fk_standard_id==3  && this.today.getDate()<this.exam_date.getDate() )
                {
                  this.e_std_10.push(data2[0]);
                 
                  this.e_std_10_dataSource.data=this.e_std_10;
                  console.log(this.e_std_10);
                }
                else if(data2[0].fk_standard_id==4 &&  this.exam_date.getDate()>this.today.getDate())
                {
                 
                  this.e_std_11.push(data2[0]);
                  this.e_std_11_dataSource.data=this.e_std_11;
                  console.log(this.e_std_11);
                }
                else if(data2[0].fk_standard_id==5 &&  this.exam_date.getDate()>this.today.getDate())
                {
                 
                  this.e_std_12.push(data2[0]);
                  this.e_std_12_dataSource.data=this.e_std_12;
                  console.log(this.e_std_12);
                }
                else{}
              }
            }
          );
        }
        for(this.i=0;this.i<this.batch_arr.length;this.i++)
        {
          this._dashboardser.getAllAttendance(this.batch_arr[this.i].fk_standard_id).subscribe(
            (data1:attendance[])=>{
              
              console.log(data1);
              if(data1.length>0)
              {
                if(data1[0].fk_standard_id==1){
                
                  this.std_8=data1;
                  
                  this.std_8_dataSource.data=this.std_8;
                  
                }
                else if(data1[0].fk_standard_id==2){
                  this.std_9=data1;
                  this.std_9_dataSource.data=this.std_9;
                }
                else if(data1[0].fk_standard_id==3){
                  this.std_10=data1;
                  this.std_10_dataSource.data=this.std_10;
                }
                else if(data1[0].fk_standard_id==4){
                  this.std_11=data1;
                  console.log(this.std_11);
                  this.std_11_dataSource.data=this.std_11;
                }
                else if(data1[0].fk_standard_id==5){
                  this.std_12=data1;
                  this.std_12_dataSource.data=this.std_12;
                }
                else{
      
                }
              }
              
            }
          );
        }
      }
    );   
    this._scheduleser.getAllScheduleBatchFacultystdsubject().subscribe(
      (data7:any[])=>{
        console.log(data7);
        for(this.i=0;this.i<data7.length;this.i++)
        {
          this.date1=new Date(data7[this.i].schedule_date);
          console.log(this.date1.getDate());
          if(this.date1.getDate()==this.today.getDate() && this.date1.getFullYear()==this.today.getFullYear() && this.date1.getMonth()==this.today.getMonth())
          {
            this.display_arr.push(data7[this.i]);
            this.schedulesource.data=this.display_arr;
            console.log(this.display_arr);

          }
        }
        
      
      }
    )
  }
  
}
