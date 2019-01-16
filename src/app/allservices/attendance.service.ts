import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { attendance } from '../allclasses/attendance';

@Injectable({
  providedIn: 'root'
})
export class AttendanceService {

  attendance:string="http://localhost:3000/attendance/"
  attendance1:string="http://localhost:3000/attendance1/"
  attendance2:string="http://localhost:3000/attendance2/";
  adddata:string="http://localhost:3000/addattendance/"
  addatt:string="http://localhost:3000/attadd/"

  constructor(private _http:HttpClient) { }
  getAttendanceByBatch(batch_id){
    return this._http.get(this.attendance+batch_id);
  }
  getAttendanceByNameBatchStandard(){
    return this._http.get(this.attendance)
  }
  getAttendenceStatuById(date1:any){
    return this._http.get(this.attendance1+date1);
  }
  getAttendanceByBatchId(batch_id){
    return this._http.get(this.attendance2+batch_id)
  }
  getAddAttendance(batch_id){
    return this._http.get(this.addatt+batch_id)
  }
  getDataOnAddForm(batch_id){
    return this._http.get(this.adddata+batch_id)
  }
  addAttendance(item:attendance[]){
    let body=JSON.stringify(item);
    let head1=new HttpHeaders().set('Content-Type','application/json')
    return this._http.post(this.attendance1,body,{headers:head1});
  }
  updateAttendance(item){
    let body=JSON.stringify(item);
    let head1=new HttpHeaders().set('Content-Type','application/json')
    return this._http.put(this.attendance1,body,{headers:head1});
  }
}
