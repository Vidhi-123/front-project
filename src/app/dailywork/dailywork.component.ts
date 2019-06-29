import { Component, OnInit,ViewChild } from '@angular/core';
import {MatTableDataSource,MatPaginator,MatSort} from '@angular/material';
import {animate, state, style, transition, trigger} from '@angular/animations';
import { batchstandardsubjectdaily_class } from "../allclasses/batchstandardsubjectdaily_class"
import { DailyworkService } from '../allservices/dailywork.service';
import { Router } from '@angular/router';
import { SelectionModel, DataSource } from '@angular/cdk/collections';
import { dailywork_class } from '../allclasses/dailywork_class';

@Component({
  selector: 'app-dailywork',
  templateUrl: './dailywork.component.html',
  styleUrls: ['./dailywork.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0', display: 'none'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class DailyworkComponent implements OnInit {
  today: number = Date.now();
  selection = new SelectionModel(true, []);

  constructor(private _ser:DailyworkService,private _route:Router) { }
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort:MatSort;
  merge_arr:batchstandardsubjectdaily_class[]=[];
  del_arr:batchstandardsubjectdaily_class[]=[];

  i:number;
  dataSource = new MatTableDataSource();
  expandedElement;
  displayedColumns: string[] = ['select','title','pdf', 'standard_no','subject_name','batch_name','daily_date','action'];
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  onAdd(){
    this._route.navigate(['../menu/dailywork']);
  }
  onUpdate(item){
    this._route.navigate(['../menu/updatedaily',item.work_id])

  }
  onDel(item)
  {

    this._ser.deleteDaily(item).subscribe(
      (data:any)=>{
        //console.log(data);
        this.merge_arr.splice(this.merge_arr.indexOf(item),1);
        console.log(this.merge_arr);
        this.dataSource.data=this.merge_arr;
      }
    );



  }
  onCheckChange(item:batchstandardsubjectdaily_class){
    if(this.del_arr.find(x=>x==item)){
      this.del_arr.splice(this.del_arr.indexOf(item),1);
    }
    else{
      this.del_arr.push(item)
    }
    console.log(this.del_arr);
  }

  onDelete(){

    this._ser.deleteAllDaily(this.del_arr).subscribe(
      (data:any)=>{
        console.log(data);
        for(this.i=0;this.i<this.del_arr.length;this.i++){
          if(this.merge_arr.find(x=>x==this.del_arr[this.i])){
            this.merge_arr.splice(this.merge_arr.indexOf(this.del_arr[this.i]),1)
          }
          this.dataSource.data=this.merge_arr; 
        }
        
      }
    );
  }


  ngOnInit() {
    this.dataSource.paginator=this.paginator;
    this.dataSource.sort=this.sort;
    this._ser.getBatchStandardSubjectonDailyWork().subscribe(
      (data:any)=>{
        this.merge_arr=data;
        console.log(this.merge_arr);
        this.dataSource.data=this.merge_arr;
      }
    )


  }

}
