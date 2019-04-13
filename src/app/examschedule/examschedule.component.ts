import { Component, OnInit, ViewChild } from '@angular/core';
import { SelectionModel } from '@angular/cdk/collections';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { ExamscheduleService } from '../allservices/examschedule.service';
import { examschedule } from '../allclasses/examschedule';
import { Router } from '@angular/router';

@Component({
  selector: 'app-examschedule',
  templateUrl: './examschedule.component.html',
  styleUrls: ['./examschedule.component.css']
})
export class ExamscheduleComponent implements OnInit {
  selection = new SelectionModel(true, []);
  dataSource = new MatTableDataSource();

  displayedColumns: string[] = ['select','batch_name','standard_no','subject_name', 'exam_date','marks','hours','action'];

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  exam_schedule_arr:examschedule[]=[];

  @ViewChild(MatPaginator) paginator:MatPaginator;
  @ViewChild(MatSort) sort:MatSort;
  constructor(public _examscheduleser:ExamscheduleService,public _route:Router) { }
  onAdd(){
      this._route.navigate(['../menu/addexamschedule']);
  }
  onUpdate(item){
    this._route.navigate(['../menu/updateexamschedule',item.exam_id])

  }
  onDel(item)
  {

    this._examscheduleser.deleteExamSchedule(item).subscribe(
      (data:any)=>{
        //console.log(data);
        this.exam_schedule_arr.splice(this.exam_schedule_arr.indexOf(item),1);
        console.log(this.exam_schedule_arr);
        this.dataSource.data=this.exam_schedule_arr;
      }
    );



  }
  ngOnInit() {
    this.dataSource.paginator=this.paginator;
    this.dataSource.sort=this.sort;
    this._examscheduleser.getBatchStdSubjectExam().subscribe(
      (data:any)=>{
        console.log(data);
        this.exam_schedule_arr=data;
        this.dataSource.data=this.exam_schedule_arr;
      }
    );
  }

}
