import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FeesService } from 'src/app/allservices/fees.service';
import { fees_detail } from 'src/app/allclasses/fees_detail';
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-feesdetail',
  templateUrl: './feesdetail.component.html',
  styleUrls: ['./feesdetail.component.css']
})
export class FeesdetailComponent implements OnInit {
fk_student_fees_id:number;
date:Date;
amount:number
arr:fees_detail[]=[];
displayedfees:string[]=['fees_date','amount'];
  feessource=new MatTableDataSource();
  constructor(private _actroutes:ActivatedRoute,private _feesservice:FeesService,public _route:Router) { }
  onBack(){
    this._route.navigate(['../menu/feespaid']);
  }
  ngOnInit() {
    this.fk_student_fees_id=this._actroutes.snapshot.params['fk_student_fees_id'];
    this._feesservice.getFeesDetail(this.fk_student_fees_id).subscribe(
      (data:any)=>{
        this.arr=data;
        this.feessource.data=this.arr;
        console.log(this.feessource.data);
        console.log(this.arr);
      }
    )

  }

}
