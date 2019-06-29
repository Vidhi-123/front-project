import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { schedule } from '../allclasses/schedule';
import { batch_std_sub_fac_schedule } from '../allclasses/batch_std_sub_fac_schedule';
import { url } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ScheduleService {
  schedule:string=url.endPoint+"schedule"
  schedule1:string=url.endPoint+"schedule1/"

  constructor(private _http:HttpClient) { }
  getAllScheduleBatchFacultystdsubject(){
   
    return this._http.get(this.schedule);
  }
  getAllDate(){
    return this._http.get(this.schedule1);
  }
  getScheduleById(schedule_id:number){
    return this._http.get(this.schedule1+schedule_id);
  }
  updateSchedule(item:schedule){
    let body=JSON.stringify(item);
    let head1=new HttpHeaders().set('Content-Type','application/json')
    return this._http.put(this.schedule1+item.schedule_id,body,{headers:head1});
  }
  deleteSchedule(item:schedule){

    let head1=new HttpHeaders().set('Content-Type','application/json')
    return this._http.delete(this.schedule1+item.schedule_id,{headers:head1});
  }

  deleteAllSchedule(item:batch_std_sub_fac_schedule[]){
    let body=JSON.stringify(item)
    let _abc=new HttpHeaders().set('Content-Type','application/json')
    return this._http.post(this.schedule1,body,{headers:_abc});
  }



    addSchedule(item){
    let body=JSON.stringify(item);
    let head1=new HttpHeaders().set('Content-Type','application/json')
    return this._http.post(this.schedule,body,{headers:head1});
  }
}
