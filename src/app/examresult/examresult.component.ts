import { Component, OnInit, ViewChild } from '@angular/core';
import { SelectionModel } from '@angular/cdk/collections';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { examresult } from '../allclasses/examresult_class';
import { ExamresultService } from '../allservices/examresult.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-examresult',
  templateUrl: './examresult.component.html',
  styleUrls: ['./examresult.component.css']
})
export class ExamresultComponent implements OnInit {
  selection = new SelectionModel(true, []);
  dataSource = new MatTableDataSource();

  displayedColumns: string[] = ['select','student_name','batch_name','standard_no','subject_name', 'exam_date','marks','marks_obtained','action'];
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  result_id:number;
  examresult_arr:examresult[]=[];

  @ViewChild(MatPaginator) paginator:MatPaginator;
  @ViewChild(MatSort) sort:MatSort;

  constructor(public examresult_ser:ExamresultService,public route:Router) { }
  onAdd(){
    this.route.navigate(['../menu/addexamresult']);
  }
  onUpdate(item:examresult){
    this.route.navigate(['../menu/updateexamresult',item.result_id]);
  }
  onDel(item)
  {

    this.examresult_ser.deleteExamResult(item).subscribe(
      (data:any)=>{
        //console.log(data);
        this.examresult_arr.splice(this.examresult_arr.indexOf(item),1);
        console.log(this.examresult_arr);
        this.dataSource.data=this.examresult_arr;
      }
    );



  }
  ngOnInit() {
    this.dataSource.paginator=this.paginator;
    this.dataSource.sort=this.sort;
    this.examresult_ser.getExamStudent().subscribe(
      (data:any)=>{

        this.examresult_arr=data;
        this.dataSource.data=this.examresult_arr;
      }
    );

  }

}
