import { Component, OnInit } from '@angular/core';
import { batchstandardsubject_class } from "../allclasses/batchstandardsubject_class";
import { dailywork_class } from "../allclasses/dailywork_class";
import { DailyworkService } from "../allservices/dailywork.service";
import { batch_class } from "../allclasses/batch_class";
import { standard_class } from "../allclasses/standard_class";
import { subject_class } from "../allclasses/subject_class";
import { batchstandard_class } from '../allclasses/batchstandard_class';
import { BatchServiceService } from '../allservices/batch-service.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-dailyworkadd',
  templateUrl: './dailyworkadd.component.html',
  styleUrls: ['./dailyworkadd.component.css']
})
export class DailyworkaddComponent implements OnInit {
  batch_id:number;
  batch_name:string;
  title:string;
  pdf:string;
  selectedFile:File=null;
  selected:batchstandardsubject_class;
  selected1:batchstandardsubject_class;
  selected2:batchstandardsubject_class;
  daily:dailywork_class[]=[];
  arr:batch_class[]=[];
  arr_b:batch_class[]=[];
  arrbatch:batch_class[]=[];
  arr1:standard_class[]=[];
  arr2:subject_class[]=[];

  fk_standard_id:number;
  i:number;
  onChange(value)
  {
    this.selectedFile=<File>value.target.files[0];
  }

  onStandardChange(){
    console.log("hi");
    this._ser.getbatchbystandardID(this.selected1).subscribe(
      (data:batch_class[])=>{
        this.arr=data;
        console.log(data);
      }
    );
    }

  //   this._ser.getSubjectByStandard(this.selected1).subscribe(
      
  //     (data:any[])=>{
  //       console.log(this.selected1);
  //       this.arr2=data;
  //       console.log(data);
  //     }
  //   );

  // }

  // onSubjectChange(){
  //   console.log("hi");
  //   this._ser.getSubjectByStandard(this.selected2).subscribe(
  //     (data:subject_class[])=>{
  //       this.arr2=data;
  //       console.log(data);
  //     }
  //   );

  // }

  onCheckChange(item)
  {
    console.log("xyz");
    if(this.arr_b.find(x=>x==item)){
      this.arr_b.splice(this.arr_b.indexOf(item),1);
    }
    else{
      this.arr_b.push(item)
    }
    console.log(this.arr_b);

  }
  onBack()
  {
    
    this._route.navigate(['../menu/alldaily']);
  }
  onAdd(){
    console.log('hi')
    const fd=new FormData();
    for(this.i=0;this.i<this.arr_b.length;this.i++)
    {
      console.log(this.arr_b[this.i].batch_id);
      console.log(this.selected1);
      console.log(this.selected2);
      fd.set('title',this.title);
    fd.set('fk_batch_id',this.arr_b[this.i].batch_id.toString());
    fd.set('fk_standard_id',this.selected1.toString());

    fd.set('image',this.selectedFile,this.selectedFile.name);

    fd.set( 'fk_subject_id',this.selected2.subject_id.toString());

    console.log(fd);
    this._ser.dailywork(fd).subscribe(
      (data:any)=>
      {

        console.log(data);


      }
      
    );
  
  }
  this._route.navigate(['../menu/alldaily']);
    }



  constructor(private _ser:DailyworkService,private _ser1:BatchServiceService,public _actroute:ActivatedRoute,public _route:Router) { }

  ngOnInit() {
    // this._ser.getAllBatch().subscribe(
    //   (data:any)=>{
    //     this.arr=data
    //   }
    // )
    this._ser.getAllStandard().subscribe(
      (data:any)=>{
        this.arr1=data
      }
    )
    this._ser.getAllSubject().subscribe(
      (data:any)=>{
        this.arr2=data
      }
    )
    // this.batch_id=this._actroute.snapshot.params['batch_id'];
    // this._ser1.getBatchByStandard().subscribe(
    //   (data:batchstandard_class[])=>{
    //     this.arr3=data;
    //     console.log(this.arr3);
        /*this.batch_name=data[0].batch_name;
        console.log(this.batch_name);
        this.fk_standard_id=data[0].fk_standard_id;*/

    //   }
    // );
  }

  }


