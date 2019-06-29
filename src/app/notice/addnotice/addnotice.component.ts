import { Component, OnInit } from '@angular/core';
import { batch_class } from '../../allclasses/batch_class';
import { standard_class } from '../../allclasses/standard_class';
import { BatchServiceService } from '../../allservices/batch-service.service';
import { DailyworkService } from '../../allservices/dailywork.service';
import { NoticeserviceService } from '../../allservices/noticeservice.service';
import { notice } from '../../allclasses/notice_class';
import { Router } from '@angular/router';


export class extra
{
  public constructor(
   public fk_batch_id:number,
  public fk_standard_id:number
  ){}

}

@Component({
  selector: 'app-addnotice',
  templateUrl: './addnotice.component.html',
  styleUrls: ['./addnotice.component.css']
})



export class AddnoticeComponent implements OnInit {
  arr_batch:batch_class[]=[];
  arr_standard:standard_class[]=[];
  arr1_batch:batch_class[]=[];
  arr1_standard:standard_class[]=[];
  i:number;
  notice_name:string;
  notice_desc:string;

  extras:extra[]=[];

  constructor(private _ser:BatchServiceService,private _daily_ser:DailyworkService,private _notice_ser:NoticeserviceService,public _route:Router) { }
onChange(item){
  console.log("xyz");
  if(this.arr1_batch.find(x=>x==item)){
    this.arr1_batch.splice(this.arr1_batch.indexOf(item),1);


    this.extras.splice(this.extras.indexOf(new extra(item.batch_id,item.fk_standard_id)),1);
    console.log(this.extras);

  }
  else{
    this.arr1_batch.push(item)

    this.extras.push(new extra(item.batch_id,item.fk_standard_id));
    console.log(this.extras);

  }
  console.log(this.arr1_batch);


}
onChangeStandard(item){
  if(this.arr1_standard.find(x=>x==item)){
    this.arr1_standard.splice(this.arr1_standard.indexOf(item),1);

    this._daily_ser.getbatchbystandardID(item.standard_id).subscribe(
      (data:batch_class[])=>{
        for(this.i=0;this.i<data.length;this.i++)
        {
          this.arr_batch.splice(this.arr_batch.indexOf(data[this.i]),1);
        }
      }
    );

  }
  else{
    this.arr1_standard.push(item)

    this._daily_ser.getbatchbystandardID(item.standard_id).subscribe(
      (data:batch_class[])=>{
        for(this.i=0;this.i<data.length;this.i++)
        {
          this.arr_batch.push(data[this.i]);

        }
      }
    );
  }



  console.log(this.arr1_standard);
  console.log(this.arr_batch);

}

onAdd()
{
  for(this.i=0;this.i<this.extras.length;this.i++)
  {
    this._notice_ser.addNotice(new notice(this.notice_name,this.notice_desc,this.extras[this.i].fk_standard_id,this.extras[this.i].fk_batch_id)).subscribe(
      (data:any[])=>
      {
        console.log(data);
        this._route.navigate(['../menu/notice']);
      }
    );
  }
  
}
onBack(){
  this._route.navigate(['../menu/notice']);
}

  ngOnInit() {


      this._ser.getAllStandard().subscribe(
        (data:any)=>{
          this.arr_standard=data;
        }
      )

  }


}
