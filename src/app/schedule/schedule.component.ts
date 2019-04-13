import { Component, OnInit,ViewChild } from '@angular/core';
import { ScheduleService } from '../allservices/schedule.service';
import { Router } from '@angular/router';
import { batch_std_sub_fac_schedule } from '../allclasses/batch_std_sub_fac_schedule';
import { MatTableDataSource,MatPaginator,MatSort } from '@angular/material';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']
})
export class ScheduleComponent implements OnInit {
  constructor(private _ser:ScheduleService,private _route:Router) { }
  today: number = Date.now();
  merge_arr:batch_std_sub_fac_schedule[]=[]
  del_arr:batch_std_sub_fac_schedule[]=[];
  i:number;
  delarr:batch_std_sub_fac_schedule[]=[];
  dataSource = new MatTableDataSource();
  displayedColumns: string[] = ['select','timings','subject_name','standard_no','batch_name','faculty_name','schedule_date','action'];
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort:MatSort;
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  onAdd(){
    this._route.navigate(['../menu/addschedule']);
  }
  onUpdate(item){
    this._route.navigate(['../menu/updateschedule',item.schedule_id])

  }
  onCheckChange(item:batch_std_sub_fac_schedule){
    if(this.delarr.find(x=>x==item)){
      this.delarr.splice(this.delarr.indexOf(item),1);
    }
    else{
      this.delarr.push(item)
    }
    console.log(this.delarr);
  }
  onDelete()
  {
  this._ser.deleteAllSchedule(this.delarr).subscribe(
    (data:any)=>{
      console.log(data);
      for(this.i=0;this.i<this.delarr.length;this.i++){
        if(this.merge_arr.find(x=>x==this.merge_arr[this.i])){
          this.merge_arr.splice(this.merge_arr.indexOf(this.merge_arr[this.i]),1)
        }
      }
      this.dataSource.data=this.merge_arr;
    }
  );

}


  onDel(item)
  {
    this._ser.deleteSchedule(item).subscribe(
      (data:any)=>{
        this.merge_arr.splice(this.merge_arr.indexOf(item),1);
        console.log(this.merge_arr);
        this.dataSource.data=this.merge_arr;
      }
    );

  }


  ngOnInit() {
    this.dataSource.paginator=this.paginator;
    this.dataSource.sort=this.sort;
    this._ser.getAllScheduleBatchFacultystdsubject().subscribe(
      (data:any)=>{
        console.log(data);
        this.merge_arr=data;
        console.log(this.merge_arr);
        this.dataSource.data=this.merge_arr;
      }
    )
  }

}
