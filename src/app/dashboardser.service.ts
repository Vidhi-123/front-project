import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { url } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class DashboardserService {
  public url:string=url.endPoint+'getAllMaterial/';
  public batchurl:string=url.endPoint+'getAllBatch/';
  public studenturl:string=url.endPoint+'getAllStudent/';
  public examurl:string=url.endPoint+'getAllExam/';
  public attendanceurl:string=url.endPoint+'getAllAttendance/';
  public examschedule:string=url.endPoint+'getAllExamSchedule/';
  constructor(public _http:HttpClient) { }
  getAllMaterial()
  {
    return this._http.get(this.url);
  }
  getAllBatch()
  {
    return this._http.get(this.batchurl);
  }
  getAllStudent()
  {
    return this._http.get(this.studenturl);
  }
  getAllExam()
  {
    return this._http.get(this.examurl);
  }
  getAllAttendance(fk_standard_id)
  {
    return this._http.get(this.attendanceurl+fk_standard_id);
  }
  getAllExamSchedule(batch_id)
  {
    return this._http.get(this.examschedule+batch_id);
  }
}
