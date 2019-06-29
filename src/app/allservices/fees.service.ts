import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { fees } from '../allclasses/fees';
import { url } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class FeesService {
  fees_remaining:string=url.endPoint+"fees/";
  admin_fees_remaining:string=url.endPoint+"admin_fees/";
  whole_remaining:string=url.endPoint+"wholefees/"
  getStudentFees:string=url.endPoint+"getfees/";
  detail:string=url.endPoint+"feesdetail/"
  feesadd:string=url.endPoint+"feesadd/";
  newfeesadd:string=url.endPoint+"newfeesadd/";


  constructor(private _http:HttpClient) { }
  getStudentRemaingFees(id){
    return this._http.get(this.admin_fees_remaining+id);
  }
  getAllStudentName(){
    return this._http.get(this.feesadd);
  }
  getStudentNameByFees()
  {
    return this._http.get(this.newfeesadd);
  }
  feesAdd(item){
    let body=JSON.stringify(item);
    let head1=new HttpHeaders().set('Content-Type','application/json');
   return this._http.post(this.feesadd,body,{headers:head1});
  }

  getStudentWholeRemainingFees(){
    return this._http.get(this.whole_remaining);
  }

  getAllStudentFees(){
    return this._http.get(this.getStudentFees);
  }
  getStudentfeesidByStudentid(fk_student_id){
    console.log(fk_student_id);
    return this._http.get(this.fees_remaining+fk_student_id);
  }
  addFees(item){
    let body=JSON.stringify(item);
    let head1=new HttpHeaders().set('Content-Type','application/json');
   return this._http.post(this.fees_remaining,body,{headers:head1});
 }
 getFeesDetail(fk_student_fees_id:number)
 {
   return this._http.get(this.detail+fk_student_fees_id);
 }

}
