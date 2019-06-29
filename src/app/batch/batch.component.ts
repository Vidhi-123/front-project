import { Component, OnInit,ViewChild } from '@angular/core';
import { BatchServiceService } from '../allservices/batch-service.service';
import { batch_class } from '../allclasses/batch_class';
import {MatTableDataSource,MatPaginator,MatSort} from '@angular/material';
import { batchstandard_class } from '../allclasses/batchstandard_class';
import { Routes, Router } from '@angular/router';
import {SelectionModel} from '@angular/cdk/collections';

@Component({
  selector: 'app-batch',
  templateUrl: './batch.component.html',
  styleUrls: ['./batch.component.css']
})
export class BatchComponent implements OnInit {
  arrbatch:batchstandard_class[]=[];
  delarr:batchstandard_class[]=[];
  batch_name:string;
  constructor(public _ser:BatchServiceService,public _route:Router) { }
  displayedColumns: string[] = ['select','batch_name', 'standard_no','action'];
  selection = new SelectionModel(true, []);

  dataSource = new MatTableDataSource();
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort:MatSort;
  i:number;
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  onDel(item)
  {

    this._ser.deleteBatch(item).subscribe(
      (data:any)=>{
        //console.log(data);
        this.arrbatch.splice(this.arrbatch.indexOf(item),1);
        console.log(this.arrbatch);
        this.dataSource.data=this.arrbatch;
      }
    );



  }
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected() ?
        this.selection.clear() :
        this.dataSource.data.forEach(row => this.selection.select(row));

        console.log(this.delarr);

  }

  onUpdate(item){
    // localStorage.setItem('cusine_id',item.cusine_id);
     this._route.navigate (['../menu/updatebatch',item.batch_id]);
   }
   onCheckChange(item:batchstandard_class){
    if(this.delarr.find(x=>x==item)){
      this.delarr.splice(this.delarr.indexOf(item),1);
    }
    else{
      this.delarr.push(item)
    }
    console.log(this.delarr);
  }
  onDelete(){

      this._ser.deleteAllBatch(this.delarr).subscribe(
        (data:any)=>{
          console.log(data);
          for(this.i=0;this.i<this.delarr.length;this.i++){
            if(this.arrbatch.find(x=>x==this.delarr[this.i])){
              this.arrbatch.splice(this.arrbatch.indexOf(this.delarr[this.i]),1)
            }
          }
          this.dataSource.data=this.arrbatch ;
        }
      );
    }
    onAdd(){
      this._route.navigate(['../menu/addbatch']);
    }
    onBack(){
      this._route.navigate(['../menu/batch'])
    }

  ngOnInit() {
    this.dataSource.paginator=this.paginator;
    this.dataSource.sort=this.sort;
    this._ser.getBatchByStandard().subscribe(
      (data:batchstandard_class[])=>{
        this.arrbatch=data;
        console.log(this.arrbatch);
        this.dataSource.data=this.arrbatch;
        console.log(this.dataSource.data);
      }
    );
  }

}
