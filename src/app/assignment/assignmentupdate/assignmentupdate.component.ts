import { Component, OnInit } from '@angular/core';
import { AssignmentService } from 'src/app/allservices/assignment.service';
import { BatchServiceService } from 'src/app/allservices/batch-service.service';
import { Router, ActivatedRoute } from '@angular/router';
import { batchstandardsubjectdaily_class } from 'src/app/allclasses/batchstandardsubjectdaily_class';
import { assignment } from 'src/app/allclasses/assignment';
import { batch_class } from 'src/app/allclasses/batch_class';
import { standard_class } from 'src/app/allclasses/standard_class';
import { subject_class } from 'src/app/allclasses/subject_class';
import { batchstandardsubjectassign } from 'src/app/allclasses/batchstandardsubjectassign';

@Component({
  selector: 'app-assignmentupdate',
  templateUrl: './assignmentupdate.component.html',
  styleUrls: ['./assignmentupdate.component.css']
})
export class AssignmentupdateComponent implements OnInit {
  title:string;
  assignment_id:number;
  fk_standard_id:number;
  fk_subject_id:number;
  selectedFile:File=null;
  flag:boolean=false;
  fk_batch_id:number;
  up_image:string;
  selectedStandard:batchstandardsubjectdaily_class;
  selectedBatch:batchstandardsubjectdaily_class;
  selectedSubject:batchstandardsubjectdaily_class;
  arr:assignment[]=[];
  arr_image:batchstandardsubjectassign[]=[];

  pdf:string;
  arrbatch:batch_class[]=[];
  arrstandard:standard_class[]=[];
  arrsubject:subject_class[]=[];

  onChange(value)
  {
    this.flag=true;
    this.selectedFile=<File>value.target.files[0];
  }
  onUpdate(){
    if(this.flag){
      console.log(this.fk_standard_id);
      const fd=new FormData;
      fd.append('assignment_id',this.assignment_id.toString());
      fd.append('title',this.title);
      fd.append('pdf',this.selectedFile,this.selectedFile.name);
      fd.append('fk_standard_id',this.fk_standard_id.toString());
      fd.append('fk_batch_id',this.fk_batch_id.toString());
      fd.append('fk_subject_id',this.fk_subject_id.toString());

      console.log(fd);
      this._assser.updateAssignmentImage(fd).subscribe(
        (data:any)=>{
          console.log(data);
          this._route.navigate(['../menu/assignment']);
          //this.arr.push(new dailywork_class(this.work_id,this.image,this.selected.standard_id,this.selected2.subject_id,this.selected1.batch_id,this.title));
        }
      );
    }
    else{
    console.log(this.assignment_id,this.fk_standard_id);
    this._assser.updateAssignment(new assignment(this.assignment_id,this.pdf,this.fk_standard_id,this.fk_subject_id,this.fk_batch_id,this.title)).subscribe(

      (data:any)=>{
        console.log(this.assignment_id,this.fk_standard_id);
        console.log(data);
        // this._route.navigate(['/']);
        this._route.navigate(['../menu/assignment']);
      }
    )

  }
}
  onBack(){
    this._route.navigate(['../menu/assignment']);
  }

  constructor(public _assser:AssignmentService,public _batchser:BatchServiceService,public _route:Router,public _actroute:ActivatedRoute) { }

  ngOnInit() {
    this.assignment_id=this._actroute.snapshot.params['assignment_id'];
    this._assser.getAssignmentById(this.assignment_id).subscribe(
      (data:batchstandardsubjectassign[])=>{
        console.log('hi')
        this.title=data[0].title;
        this.pdf=data[0].pdf;
        console.log(this.pdf)
        // console.log(this.batch_name);
        this.fk_standard_id=data[0].fk_standard_id;

        this.fk_subject_id=data[0].fk_subject_id;
        console.log(this.fk_subject_id);
        this.fk_batch_id=data[0].fk_batch_id;
        console.log(this.fk_batch_id);
        this.arr_image=data;

      }
    )
    this._batchser.getAllStandard().subscribe(
      (data:any)=>{
        this.arrstandard=data;
      }
    )
    this._assser.getAllSubject().subscribe(
      (data:any)=>{
        this.arrsubject=data;
      }
    )
    this._batchser.getAllBatch().subscribe(
      (data:any)=>{
        this.arrbatch=data;

      }
    )

  }

}
