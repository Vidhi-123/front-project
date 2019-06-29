import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { examresult } from 'src/app/allclasses/examresult_class';
import { url } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ExamresultService {
public examresult_url:string=url.endPoint+'exam_result/';
public examresultmergedata_url:string=url.endPoint+'examresultmerge/';
public examresultadd_url:string=url.endPoint+'examresultmergedataadd/';
  constructor(public _http:HttpClient) { }
  getAllStudent(){
    return this._http.get(this.examresultadd_url);
  }
  getExamResult(fk_batch_id){
    return this._http.get(this.examresultadd_url+fk_batch_id);
  }
  getAllExamResult(){
    return this._http.get(this.examresult_url)
  }
  getAllExamResultbyID(result_id){
    return this._http.get(this.examresult_url+result_id);
  }
  getExamStudent(){
    return this._http.get(this.examresultmergedata_url)
  }
  addExamResult(item){
    let body=JSON.stringify(item);
    let head1=new HttpHeaders().set('Content-Type','application/json')
    return this._http.post(this.examresult_url,body,{headers:head1});
  }
  deleteExamResult(item){
    let head1=new HttpHeaders().set('Content-Type','application/json');
    return this._http.delete(this.examresult_url+item.result_id,{headers:head1});
  }
  updateExamSchedule(item:examresult){
    let body=JSON.stringify(item);
    let head1=new HttpHeaders().set('Content-Type','application/json');
    return this._http.put(this.examresult_url+item.result_id,body,{headers:head1});
  }

}
