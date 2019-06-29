import { Component, OnInit } from '@angular/core';
import { fees } from 'src/app/allclasses/fees';
import { FeesService } from 'src/app/allservices/fees.service';
import { MatTableDataSource } from '@angular/material';
import { Router } from '@angular/router';

@Component({
  selector: 'app-remaining-fees',
  templateUrl: './remaining-fees.component.html',
  styleUrls: ['./remaining-fees.component.css']
})
export class RemainingFeesComponent implements OnInit {
  arr:fees[]=[];
  displayedColumns:string[]=['student_name','total_fees'];
  dataSource=new MatTableDataSource();

  constructor(private _feesservice:FeesService,private _route:Router) { }
  onBack()
  {
    this._route.navigate(['../menu/fees']);
  }

  ngOnInit() {
    this._feesservice.getStudentWholeRemainingFees().subscribe(
    (data:any)=>
    {
      this.arr=data;
      this.dataSource.data=this.arr;
      console.log(this.arr);
    }
    )
  }

}
