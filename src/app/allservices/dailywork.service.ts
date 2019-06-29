import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { batchstandardsubjectdaily_class } from '../allclasses/batchstandardsubjectdaily_class';
import { dailywork_class } from '../allclasses/dailywork_class';
import { url } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DailyworkService {
  dailyworkadd:string=url.endPoint+'dailyworkadd/';
  batch:string=url.endPoint+"batch/"
  standard:string=url.endPoint+"standard/"
  subject:string= url.endPoint+"subject/"
  alldaily:string=url.endPoint+"alldaily/";
  updatedailywork:string=url.endPoint+"dailyworkadd/"
  dailyAllDel:string=url.endPoint+"dailyworkdel/";
  updateimage:string=url.endPoint+"updatedailyImage/";
  dailysubject:string=url.endPoint+"dailysubject/";

  constructor(private _http:HttpClient) { }
  dailywork(item:FormData){
    console.log(item)
    return this._http.post(this.dailyworkadd,item);
    
  }
  getAllBatch(){
    return this._http.get(this.batch)
  }
  getAllStandard(){
    return this._http.get(this.standard)
  }
  getAllSubject(){
    return this._http.get(this.subject)
  }
  getbatchbystandardID(standard_id){
    return this._http.get(this.dailyworkadd+standard_id);
  }
  getBatchStandardSubjectonDailyWork(){
    return this._http.get(this.alldaily);
  }
  getSubjectByStandard(standard_id){
    console.log(standard_id);
    return this._http.get(this.dailysubject+standard_id);
  }
  updateDaily(item:dailywork_class)
  {
    let body=JSON.stringify(item);
    let head1=new HttpHeaders().set('Content-Type','application/json');
    return this._http.put(this.updatedailywork+item.work_id,body,{headers:head1});
  }
  updatedailyImage(item:FormData){
    return this._http.put(this.updateimage,item)
  }
  getDailyById(work_id:number){
    return this._http.get(this.alldaily+work_id);
  }
  deleteDaily(item:dailywork_class){
    // let body=JSON.stringify(item);
    let head1=new HttpHeaders().set('Content-Type','application/json');
    return this._http.delete(this.dailyworkadd+item.work_id,{headers:head1});
  }
  deleteAllDaily(item:batchstandardsubjectdaily_class[]){
    let body=JSON.stringify(item)
    let _abc=new HttpHeaders().set('Content-Type','application/json')
    return this._http.post(this.dailyAllDel,body,{headers:_abc});
  }


}
