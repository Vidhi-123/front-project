import { Component, OnInit, ViewChild } from '@angular/core';
import { batch_atten_stu_standard } from '../allclasses/batch_atten_stu_standard';
import { AttendanceService } from '../allservices/attendance.service';
import { BatchServiceService } from '../allservices/batch-service.service';
import { batch_class } from '../allclasses/batch_class';
import { Router } from '@angular/router';
import { MatTableDataSource, MatSelect, MatSort, MatPaginator } from '@angular/material';

export class att
{
  constructor(
    public attendance_date:Date,
    public student_name:string[]
  ){};
}

@Component({
  selector: 'app-attendance',
  templateUrl: './attendance.component.html',
  styleUrls: ['./attendance.component.css']
})
export class AttendanceComponent implements OnInit {

mergearr:batch_atten_stu_standard[]=[];
selected_batch:batch_atten_stu_standard;
arr:batch_atten_stu_standard[]=[];
student_name:string[]=[];
student_id:number[]=[];
attendence:Date[]=[];
attendence_Status:string[]=[];
i:number=0;
j:number=0;
k:number=0;
l:number=0;
flag:boolean=false;
flag1:boolean=false;
date1:Date[]=[];
date2:Date;
att_tbl:att[]=[];
dataSource = new MatTableDataSource();
@ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort:MatSort;
  constructor(private _ser1:AttendanceService,private _ser2:BatchServiceService,private _route:Router) { }
  displayedColumns: string[] = ['attendance_date','student_name', 'attendance_status'];
  onAttendance()
  {
    this._route.navigate(['../menu/stumail']);
  }
onBatchChange(batch_id){
  this._ser1.getAttendanceByBatchId(batch_id).subscribe(
    (data:batch_atten_stu_standard[])=>{
      console.log(data);
      this.arr=data;
      this.dataSource.data=this.arr;
      console.log(this.arr);
      console.log(this.dataSource.data);
    }
  )
  // this.student_name=[];
  // this.attendence=[];
  // this._ser1.getAttendanceByBatch(batch_id).subscribe(
  //   (data:batch_atten_stu_standard[])=>{
  //     this.arr=data;
  //     console.log(data);
  //     console.log(this.arr);
  //     for(this.i=0;this.i<data.length;this.i++)
  //     {
  //       this.flag=false;
  //       for(this.k=0;this.k<this.student_name.length;this.k++)
  //       {
  //         if(this.student_name[this.k]==data[this.i].student_name)
  //         {
  //           this.flag=true;
  //           break;
  //         }
  //       }
  //       if(this.flag==false)
  //       {
  //         this.student_name.push(data[this.k].student_name);
  //       }

  //     }
  //     for(this.j=0;this.j<data.length;this.j++)
  //     {
  //       this.flag1=false;
  //       for(this.l=0;this.l<this.attendence.length;this.l++)
  //       {
  //         this.date1=new Date(this.attendence[this.l]);
  //         this.date2=new Date(data[this.j].attendance_date);
  //         if(this.date1.toDateString()==this.date2.toDateString())
  //         {
  //           this.flag1=true;
  //           break;
  //         }
  //       }
  //         if(this.flag1==false)
  //         {
  //           this.attendence.push(new Date(data[this.l].attendance_date));
  //         }
  //         console.log(this.attendence+"");
  //      }
  //     for(this.i=0;this.i<data.length;this.i++)
  //     {
  //       this.attendence_Status.push(data[this.i].attendance_status);
  //     }
  //   }
  // );


  // this._ser1.getAttendanceByBatch(batch_id).subscribe(
  //   (data:any[])=>
  //   {
  //     console.log(data);
  //     for(this.i=0;this.i<data.length;this.i++)
  //     {
  //       this.date1.push(new Date(data[this.i].attendance_date));
  //       this.date2=new Date(data[this.i].attendance_date)
  //       console.log(this.date2);
  //       this._ser1.getAttendenceStatuById(data[this.i].attendance_date).subscribe(
  //         (data1:any)=>
  //         {
  //           this.student_name=data1;
  //           console.log(this.student_name);
  //         }
  //       );

  //      }

  // }
  // );


}
onAdd(){
  this._route.navigate(['../menu/addattendance']);
}
  ngOnInit() {
    this._ser2.getAllBatch().subscribe(
      (data:any)=>{
        this.mergearr=data;
        
      }
    );

  }

}
