import { Component, OnInit } from '@angular/core';
import { batchstandardsubject_class } from 'src/app/allclasses/batchstandardsubject_class';
import { batch_class } from 'src/app/allclasses/batch_class';
import { assignment } from 'src/app/allclasses/assignment';
import { standard_class } from 'src/app/allclasses/standard_class';
import { subject_class } from 'src/app/allclasses/subject_class';
import { batchstandard_class } from 'src/app/allclasses/batchstandard_class';
import { AssignmentService } from 'src/app/allservices/assignment.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-assignmentadd',
  templateUrl: './assignmentadd.component.html',
  styleUrls: ['./assignmentadd.component.css']
})
export class AssignmentaddComponent implements OnInit {
  batch_id:number;
  batch_name:string;
  title:string;
  image:string;
  selectedFile:File=null;
  selected:batchstandardsubject_class;
  selectedstandard:batchstandardsubject_class;
  selectedsubject:batchstandardsubject_class;
  arr_assignment:assignment[]=[];
  arr_standardchange:batch_class[]=[];
  arr_batchchange:batch_class[]=[];
  arr_batch:batch_class[]=[];
  arr_standard:standard_class[]=[];
  arr_subject:subject_class[]=[];
  arr_batchstandard:batchstandard_class[]=[];
  fk_standard_id:number;
  i:number;
  constructor(private _ser:AssignmentService,private _route:Router) { }
  onChange(value)
  {
    this.selectedFile=<File>value.target.files[0];
  }

  onStandardChange(){
    console.log("hi");
    this._ser.getbatchbystandardID(this.selectedstandard).subscribe(
      (data:batch_class[])=>{
        this.arr_batch=data;
        console.log(data);
      }
    );

  }

  onCheckChange(item)
  {

    if(this.arr_batchchange.find(x=>x==item)){
      this.arr_batchchange.splice(this.arr_batchchange.indexOf(item),1);
    }
    else{
      this.arr_batchchange.push(item)
    }
    console.log(this.arr_batchchange);

  }
  onBack(){
    this._route.navigate(['../menu/assignment']);
  }
  onAdd(){

    const fd=new FormData();
    for(this.i=0;this.i<this.arr_batchchange.length;this.i++)
    {
      console.log(this.arr_batchchange[this.i].batch_id);
      console.log(this.selectedstandard);
      fd.set('title',this.title);
    fd.set('fk_batch_id',this.arr_batchchange[this.i].batch_id.toString());
    fd.set('fk_standard_id',this.selectedstandard.toString());

    fd.set('image',this.selectedFile,this.selectedFile.name);

    fd.set( 'fk_subject_id',this.selectedsubject.subject_id.toString());

    console.log(fd);
    this._ser.addAssignment(fd).subscribe(
      (data:any)=>{
        console.log(data);


      }
    );
  }
  this._route.navigate(['../menu/assignment']);
    }





  ngOnInit() {
    this._ser.getAllStandard().subscribe(
      (data:any)=>{
        this.arr_standard=data
      }
    )
    this._ser.getAllSubject().subscribe(
      (data:any)=>{
        this.arr_subject=data
      }
    )
  }

}
