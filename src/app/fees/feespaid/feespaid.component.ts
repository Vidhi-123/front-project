import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { fees } from 'src/app/allclasses/fees';
import { FeesService } from 'src/app/allservices/fees.service';
import { fees_detail } from 'src/app/allclasses/fees_detail';
import { student } from 'src/app/allclasses/student';
import { StudentService } from 'src/app/allservices/student.service';
import { fees_add } from 'src/app/allclasses/fees_add';
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-feespaid',
  templateUrl: './feespaid.component.html',
  styleUrls: ['./feespaid.component.css']
})
export class FeespaidComponent implements OnInit {
  arr:fees_detail[]=[];
  student_list:fees_add[]=[];
  i:number=0;
  displayedfees:string[]=['student_name','total_fees','pending_fees','paid_fees','action'];
  feessource=new MatTableDataSource();

  constructor(private _ser1:FeesService,private _route:Router,private stu_ser:StudentService) { }
  onDetails(item:fees_detail)
  {
    console.log(item.fk_student_fees_id);
    this._route.navigate(['../menu/feesdetail',item.fk_student_fees_id]);
  }
  onBack()
  {
    this._route.navigate(['../menu/fees']);
  }
  applyFilter(filterValue: string) {
    this.feessource.filter = filterValue.trim().toLowerCase();
  }
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
            this.arr.push(data[0]);
            console.log(this.arr);
            this.feessource.data=this.arr;
            }
          )
        }
      }
    );




  }

}
