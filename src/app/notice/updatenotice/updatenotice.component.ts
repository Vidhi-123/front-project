import { Component, OnInit } from '@angular/core';
import { batch_class } from '../../allclasses/batch_class';
import { standard_class } from '../../allclasses/standard_class';
import { BatchServiceService } from '../../allservices/batch-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NoticeserviceService } from '../../allservices/noticeservice.service';
import { noticestdbatch } from '../../allclasses/noticestdbatch_class';
import { notice } from '../../allclasses/notice_class';

@Component({
  selector: 'app-updatenotice',
  templateUrl: './updatenotice.component.html',
  styleUrls: ['./updatenotice.component.css']
})
export class UpdatenoticeComponent implements OnInit {
  arrbatch:batch_class[]=[];
  arrstandard:standard_class[]=[];
  notice_id:number;
  notice_desc:string;
  notice_name:string;
  fk_batch_id:number;
  fk_standard_id:number;

  constructor(public _ser:BatchServiceService,public _actroute:ActivatedRoute,public _ser1:NoticeserviceService,public _route:Router) { }
  onUpdate(){
    console.log('hi');
    this._ser1.updateNotice(new notice(this.notice_name,this.notice_desc,this.fk_standard_id,this.fk_batch_id,this.notice_id)).subscribe(
      (data:any)=>{

        console.log(data);
      }
    );
    this._route.navigate(['../menu/notice']);
  }
  onBack(){
    this._route.navigate(['../menu/notice']);
  }
  ngOnInit() {
    this.notice_id=this._actroute.snapshot.params['notice_id'];
     this._ser1.getnoticebyid(this.notice_id).subscribe(
      (data:noticestdbatch[])=>{
        console.log('hi')
        this.notice_name=data[0].notice_name;
        this.notice_desc=data[0].notice_desc;
        this.fk_standard_id=data[0].fk_standard_id;
        this.fk_batch_id=data[0].fk_batch_id;


      }
    )
    this._ser.getAllBatch().subscribe(
      (data:any)=>{
        this.arrbatch=data;
      }
    );
    this._ser.getAllStandard().subscribe(
      (data:any)=>{
        this.arrstandard=data;
      }
    );
  }

}
