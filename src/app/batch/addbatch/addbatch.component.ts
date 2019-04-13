import { Component, OnInit } from '@angular/core';
import { batchstandard_class } from '../../allclasses/batchstandard_class';
import { BatchServiceService } from '../../allservices/batch-service.service';
import { batch_class } from '../../allclasses/batch_class';
import { add_batch } from '../../allclasses/add_batch';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addbatch',
  templateUrl: './addbatch.component.html',
  styleUrls: ['./addbatch.component.css']
})
export class AddbatchComponent implements OnInit {
  batch_name:string;
  batch_id:number;
  fk_standard_id:number;
  arr:batch_class[]=[];
  arr1:batchstandard_class[]=[];
  selected:batchstandard_class;
  standard_id:number;
  standard_no:number;
  arr2:add_batch[]=[];
  i:number;
  batcharr:batch_class[]=[];
  flag:boolean=false;

  constructor(private _ser:BatchServiceService,private _route:Router) { }
  onAdd()
  {
    for(this.i=0;this.i<this.batcharr.length;this.i++){

      if(this.batcharr[this.i].batch_name==this.batch_name){

        this.flag=true;
        break;

      }
    }
    if(this.flag==true){
      alert('batch name already present');
      this.flag=false;
      this._route.navigate(['../menu/batch'])

    }
    else
    {
  // const fd=new FormData();

  //   fd.append('batch_name',this.batch_name);
  //   //fd.append('dish_price',this.dish_price.toString());
  //  // fd.append('image',this.selectedFile,this.selectedFile.name);

  //   fd.append('fk_standard_id',this.selected.standard_id.toString());

  //   console.log(fd);
    this._ser.addBatch(new add_batch(this.batch_name,this.selected.standard_id)).subscribe(
      (data:any)=>{
        console.log(data);
        this.arr2.push(new add_batch(this.batch_name,this.selected.standard_id));
        this._route.navigate(['../menu/batch']);

      }

    );




     }
    }
    onBack(){
      this._route.navigate(['../menu/batch']);
    }

  ngOnInit() {
    this._ser.getAllStandard().subscribe(
      (data:any)=>{
        this.arr1=data;
        console.log(this.arr1);
      }
    );
    this._ser.getAllBatch().subscribe(
      (data:any)=>{
        this.batcharr=data;
        console.log(this.batcharr)
      }
    )

  }

}
