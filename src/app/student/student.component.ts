import { Component, OnInit,ViewChild } from '@angular/core';
import { student } from '../allclasses/student';
import { StudentService } from '../allservices/student.service';
import { MatTableDataSource,MatPaginator,MatSort } from '@angular/material';
import { Router } from '@angular/router';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  displayedColumns: string[] = ['select','student_name','student_password','parents_email_id','date_of_birth','joining_date','batch_name','standard_no','action'];
    student_arr:student[]=[];
    delarr:student[]=[];
    i:number;
    dataSource = new MatTableDataSource();
    @ViewChild(MatPaginator) paginator: MatPaginator;
    @ViewChild(MatSort) sort:MatSort;
  constructor(private _studentservice:StudentService,private _route:Router) { }
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  onAdd(){
    this._route.navigate(['../menu/addstudent'])
  }
  onCheckChange(item:student){
    if(this.delarr.find(x=>x==item)){
      this.delarr.splice(this.delarr.indexOf(item),1);
    }
    else{
      this.delarr.push(item)
    }
    console.log(this.delarr);
  }

  onDel(item)
  {
    this._studentservice.deleteStudent(item).subscribe(
      (data:any)=>{
        this.student_arr.splice(this.student_arr.indexOf(item),1);
        console.log(this.student_arr);
        this.dataSource.data=this.student_arr;
      }
    );

  }

  onDelete()
  {
  this._studentservice.multipleDeleteStudent(this.delarr).subscribe(
    (data:any)=>{
      console.log(data);
      for(this.i=0;this.i<this.delarr.length;this.i++){
        if(this.student_arr.find(x=>x==this.student_arr[this.i])){
          this.student_arr.splice(this.student_arr.indexOf(this.student_arr[this.i]),1)
        }
        this.dataSource.data=this.student_arr;
      }
      
    }
  );

}
onUpdate(item){
  this._route.navigate(['../menu/updatestudent',item.student_id])

}


  ngOnInit() {
    this.dataSource.paginator=this.paginator;
    this.dataSource.sort=this.sort;
    this._studentservice.getStudent().subscribe(
      (data:any)=>{
        this.student_arr=data;
        this.dataSource.data=this.student_arr;
        console.log(this.student_arr)
      }
    )
  }


}
