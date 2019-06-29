import { Component, OnInit } from '@angular/core';
import { batch_atten_stu_standard } from 'src/app/allclasses/batch_atten_stu_standard';
import { AttendanceService } from 'src/app/allservices/attendance.service';
import { BatchServiceService } from 'src/app/allservices/batch-service.service';
import { attendance_status } from 'src/app/allclasses/attendace_status';
import { attendance } from 'src/app/allclasses/attendance';
import { Router } from '@angular/router';

export class att
{
  constructor(public student_id:number[]){}
}
@Component({
  selector: 'app-addattendance',
  templateUrl: './addattendance.component.html',
  styleUrls: ['./addattendance.component.css']
})
export class AddattendanceComponent implements OnInit {
  mergearr:batch_atten_stu_standard[]=[];
  arr:batch_atten_stu_standard[]=[];
  arr2:batch_atten_stu_standard[]=[];
  abs_no:number[]=[];
  g1:string='present';
  attendance_date:Date;
  arr1:attendance_status[]=[];
  present:"present";
  c1:"present";
  attendancearr:attendance[]=[];
  tmp_arr:attendance[]=[];
  dat1:Date=new Date();
  tmp_date:Date;
  att_flag:boolean=false;
  x:number=0;
  onCheckChange(item:batch_atten_stu_standard){
    if(this.arr2.find(x=>x==item)){
      this.arr2.splice(this.arr2.indexOf(item),1);
      this.abs_no.splice(this.abs_no.indexOf(item.fk_student_id),1);
    }
    else{
      this.arr2.push(item);
      this.abs_no.push(item.student_id);
    }
    console.log(item);
    console.log(this.abs_no);
  }

  onclickupdate()
  {
    console.log(this.abs_no);
    this._ser1.updateAttendance(new att(this.abs_no)).subscribe(
      (data:any)=>
      {
        console.log(data);

      }
    );
    this._route.navigate(['../menu/attendance']);

  }

  onBatchChange(batch_id){

    // this._ser1.getAddAttendance(batch_id).subscribe(
    //   (data:any)=>{
    //     this.arr=data;
    //     console.log(data);
    //     console.log(this.arr);
    //     console.log(this.dat1);
    //     this._ser1.getAttendanceByBatch(batch_id).subscribe(
    //       (data2:any)=>
    //       {
    //         console.log(data2);
    //         this.tmp_arr=data2;
    //         console.log(this.arr.length);
    //             for(let x=0,y=0;x<this.tmp_arr.length;x++)
    //             {
    //               this.tmp_date=new Date(this.tmp_arr[x].date)
    //               console.log(x+" "+y+" "+this.arr.length);
    //               for(y=0;y<this.arr.length;y++)
    //               {
    //                 if(this.tmp_arr[x].fk_student_id==this.arr[y].fk_student_id && this.tmp_date.getDate()==this.dat1.getDate() && this.tmp_date.getMonth()==this.dat1.getMonth() && this.tmp_date.getFullYear()==this.dat1.getFullYear())
    //                 {
    //                   this.att_flag=true;
    //                 }
    //                 console.log(y+" "+this.arr.length);
    //                   if(y==this.arr.length-1)
    //                   {
    //                     if(this.att_flag)
    //                     {
    //                       this.att_flag=false;
    //                       alert("already added");
    //                       console.log("in");
    //                     }
    //                     else
    //                     {
    //                       this.attendancearr.push(new attendance(0,"present",this.dat1,data[x].student_id,data[x].fk_batch_id,data[x].fk_standard_id,data[x].fk_faculty_id));
    //                       console.log("out");
    //                     }
    //                   }
    //               }
                  
    //             }
                
    //             this._ser1.addAttendance(this.attendancearr).subscribe(
    //               (data:any)=>{
    //                 console.log(data);
    //               }
    //             );
    //             console.log(this.attendancearr);
    //           }
    //         )
    //       }
    //     );
        
    this.arr=[];
    this.attendancearr=[];
    this._ser1.getAttendanceByBatch(batch_id).subscribe(
      (data:any)=>
      {
        console.log(data);
        this._ser1.getAddAttendance(batch_id).subscribe(
          (data1:any)=>
          {
            console.log(data1);
            if(data.length==0)
            {
              this.arr=data1;
              for(let y=0;y<data1.length;y++)
              {
                this.attendancearr.push(new attendance(0,"present",this.dat1,data1[y].student_id,data1[y].batch_id,data1[y].fk_standard_id,1));

                if(y==data1.length-1 && this.attendancearr.length>0) 
                {
                    
                    this._ser1.addAttendance(this.attendancearr).subscribe(
                      (data:any)=>
                      {
                        console.log(data);
                      }
                    );        
                }
              }
            }
            else
            {
              for(this.x=0;this.x<data.length;this.x++)
              {
                for(let y=0;y<data1.length;y++)
                {
                  this.tmp_date=new Date(data[this.x].attendance_date);
                  if(data1[y].fk_student_id==data[this.x].student_id && this.tmp_date.getDate()==this.dat1.getDate() && this.tmp_date.getMonth()==this.dat1.getMonth() && this.tmp_date.getFullYear()==this.dat1.getFullYear())
                  {
                    this.att_flag=true;
                    console.log("already done");
                    break;
                  } 
                  if(y==data1.length-1)
                  {
                    if(this.att_flag==true)
                    {
                      this.att_flag=false;
                    }
                    else
                    {
                      this.arr.push(data[this.x]);
                      this.attendancearr.push(new attendance(0,"present",this.dat1,data[this.x].fk_student_id,data[this.x].fk_batch_id,data[this.x].fk_standard_id,data[this.x].fk_faculty_id));
                    }
                  }
                }
                console.log(this.arr.length);
                if(this.x==data.length-1 && this.attendancearr.length>0) 
                {
                    
                    this._ser1.addAttendance(this.attendancearr).subscribe(
                      (data:any)=>
                      {
                        console.log(data);
                      }
                    );        
                }
              }
            }
          }
            
        );        
         
      }
    );

    

    }


  constructor(private _ser1:AttendanceService,private _ser2:BatchServiceService,private _route:Router) { }

onBack(){
  this._route.navigate(['../menu/attendance']);
}
  ngOnInit() {
    this._ser2.getAllBatch().subscribe(
      (data:any)=>{
        this.mergearr=data;
        
      }
    );

  }


}
