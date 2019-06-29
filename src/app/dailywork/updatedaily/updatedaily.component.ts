import { Component, OnInit } from '@angular/core';
import { DailyworkService } from '../../allservices/dailywork.service';
import { dailywork_class } from '../../allclasses/dailywork_class';
import { batch_class } from '../../allclasses/batch_class';
import { subject_class } from '../../allclasses/subject_class';
import { BatchServiceService } from '../../allservices/batch-service.service';
import { ActivatedRoute, Router } from '@angular/router';
//import { batchstandardsubjectdaily_class } from '../../allclasses/batchstandardsubjectdaily_class';
import { standard_class } from '../../allclasses/standard_class';
import { batchstandardsubjectdaily_class } from "../../allclasses/batchstandardsubjectdaily_class"

@Component({
  selector: 'app-updatedaily',
  templateUrl: './updatedaily.component.html',
  styleUrls: ['./updatedaily.component.css']
})
export class UpdatedailyComponent implements OnInit {
  title:string;
  work_id:number;
  fk_standard_id:number;
  fk_subject_id:number;
  selectedFile:File=null;
  flag:boolean=false;
  fk_batch_id:number;
  up_image:string;
  selectedStandard:batchstandardsubjectdaily_class;
  selectedBatch:batchstandardsubjectdaily_class;
  selectedSubject:batchstandardsubjectdaily_class;
  arr:dailywork_class[]=[];
  arr_image:batchstandardsubjectdaily_class[]=[];

  pdf:string;
  arrbatch:batch_class[]=[];
  arrstandard:standard_class[]=[];
  arrsubject:subject_class[]=[];

  onChange(value)
  {
    this.flag=true;
    this.selectedFile=<File>value.target.files[0];
  }
  onUpdate()
  {

    // if(this.flag){
    //   console.log(this.fk_standard_id);
    //   const fd=new FormData;
    //   fd.append('work_id',this.work_id.toString());
    //   fd.append('title',this.title);
    //   fd.append('pdf',this.selectedFile,this.selectedFile.name);
    //   fd.append('fk_standard_id',this.fk_standard_id.toString());
    //   fd.append('fk_batch_id',this.fk_batch_id.toString());
    //   fd.append('fk_subject_id',this.fk_subject_id.toString());

    //   console.log(fd);
    //   this._ser.updatedailyImage(fd).subscribe(
    //     (data:any)=>{
    //       console.log(data);
    //       this._route.navigate(['/alldaily'])
    //       //this.arr.push(new dailywork_class(this.work_id,this.image,this.selected.standard_id,this.selected2.subject_id,this.selected1.batch_id,this.title));
    //     }
    //   );
    // }

    console.log(this.work_id,this.fk_standard_id);
    this._ser.updateDaily(new dailywork_class(this.work_id,this.pdf,this.fk_standard_id,this.fk_subject_id,this.fk_batch_id,this.title)).subscribe(

      (data:any)=>{
        console.log(this.work_id,this.fk_standard_id);
        console.log(data);
        // this._route.navigate(['/']);
      }
    )


}
  onBack(){
    this._route.navigate(['../menu/alldaily'])
  }

  constructor(private _ser:DailyworkService,private _ser1:BatchServiceService,public _route:Router,public _actroute:ActivatedRoute) { }

  ngOnInit() {
    this.work_id=this._actroute.snapshot.params['work_id'];
    this._ser.getDailyById(this.work_id).subscribe(
      (data:batchstandardsubjectdaily_class[])=>{
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
        //this.arr_image=data;

      }
    )
    this._ser1.getAllStandard().subscribe(
      (data:any)=>{
        this.arrstandard=data;
      }
    )
    this._ser.getAllSubject().subscribe(
      (data:any)=>{
        this.arrsubject=data;
      }
    )
    this._ser1.getAllBatch().subscribe(
      (data:any)=>{
        this.arrbatch=data;

      }
    )


  }

}
