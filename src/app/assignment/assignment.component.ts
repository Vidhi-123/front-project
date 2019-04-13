import { Component, OnInit,ViewChild } from '@angular/core';
import { batchstandardsubjectassign } from '../allclasses/batchstandardsubjectassign';
import { MatTableDataSource,MatPaginator,MatSort } from '@angular/material';
import { AssignmentService } from '../allservices/assignment.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-assignment',
  templateUrl: './assignment.component.html',
  styleUrls: ['./assignment.component.css']
})
export class AssignmentComponent implements OnInit {
  today: number = Date.now();
  merge_arr:batchstandardsubjectassign[]=[];
  del_arr:batchstandardsubjectassign[]=[];
  i:number;
  dataSource = new MatTableDataSource();
  displayedColumns: string[] = ['select', 'title', 'pdf', 'standard_no', 'subject_name', 'batch_name',  'submisson_date','action'];
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort:MatSort;
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  constructor(private _ser:AssignmentService,private _route:Router) { }
  onAdd(){
    this._route.navigate(['../menu/assignmentadd']);
  }
  onUpdate(item){
    console.log(item.assignment_id);
    this._route.navigate(['../menu/updateassignment',item.assignment_id])

  }
  onCheckChange(item:batchstandardsubjectassign){
    if(this.del_arr.find(x=>x==item)){
      this.del_arr.splice(this.del_arr.indexOf(item),1);
    }
    else{
      this.del_arr.push(item)
    }
    console.log(this.del_arr);
  }

  onDelete(){

    this._ser.deleteAllAssignment(this.del_arr).subscribe(
      (data:any)=>{
        console.log(data);
        for(this.i=0;this.i<this.del_arr.length;this.i++){
          if(this.merge_arr.find(x=>x==this.del_arr[this.i])){
            this.merge_arr.splice(this.merge_arr.indexOf(this.del_arr[this.i]),1)
          }
        }
        this.dataSource.data=this.merge_arr ;
      }
    );
  }
  onDel(item)
  {

    this._ser.deleteAssignment(item).subscribe(
      (data:any)=>{
        //console.log(data);
        this.merge_arr.splice(this.merge_arr.indexOf(item),1);
        console.log(this.merge_arr);
        this.dataSource.data=this.merge_arr;
      }
    );



  }

  ngOnInit() {
    this.dataSource.paginator=this.paginator;
    this.dataSource.sort=this.sort;
    this._ser.getAllAssignment().subscribe(
      (data:any)=>{
        this.merge_arr=data;
        console.log(this.merge_arr);
        this.dataSource.data=this.merge_arr;
      }
    )
  }

}
