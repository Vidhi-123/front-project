import { Component, OnInit } from '@angular/core';
import { BatchServiceService } from '../../allservices/batch-service.service';
import { batch_class } from '../../allclasses/batch_class';
import { Router, ActivatedRoute } from '@angular/router';
import { batchstandard_class } from '../../allclasses/batchstandard_class';

@Component({
  selector: 'app-updatebatch',
  templateUrl: './updatebatch.component.html',
  styleUrls: ['./updatebatch.component.css']
})
export class UpdatebatchComponent implements OnInit {
  batch_id:number;
  batch_name:string;
  fk_standard_id:number;
  arr1:batchstandard_class[]=[];
  selected1:number;
  sel:number;
  onUpdate(){
    console.log(this.batch_id,this.fk_standard_id);
    this._ser.updateBatch(new batch_class(this.batch_id,this.batch_name,this.fk_standard_id)).subscribe(

      (data:any)=>{
        console.log(this.batch_id,this.fk_standard_id);
        console.log(data);
        this._route.navigate(['../menu/batch'])
      }
    )

  }
  onBack(){
    this._route.navigate(['../menu/batch'])
  }
  constructor(public _ser:BatchServiceService,private _route:Router,public _actroute:ActivatedRoute) { }

  ngOnInit() {
    this.batch_id=this._actroute.snapshot.params['batch_id'];
    this._ser.getBatchById(this.batch_id).subscribe(
      (data:batchstandard_class[])=>{
        console.log('hi')
        this.batch_name=data[0].batch_name;
        console.log(this.batch_name);
        this.fk_standard_id=data[0].fk_standard_id;

      }
    )
    this._ser.getAllStandard().subscribe(
      (data:any)=>{
        this.arr1=data;
      }
    );
    }

}




