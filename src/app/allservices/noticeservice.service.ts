import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { notice } from '../allclasses/notice_class';
import { noticestdbatch } from '../allclasses/noticestdbatch_class';
import { url } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class NoticeserviceService {
noticeurl:string=url.endPoint+'notice/';
multidelnotice:string=url.endPoint+'multidelnotice';
deleteAllNotice(item:noticestdbatch[]){
  let body=JSON.stringify(item)
  let _abc=new HttpHeaders().set('Content-Type','application/json')
  return this._http.post(this.multidelnotice,body,{headers:_abc});
}
  constructor(public _http:HttpClient) { }
  getAllNotice(){
    return this._http.get(this.noticeurl);
  }
  getNoticeStandardBatch(){
    return this._http.get(this.multidelnotice);
  }
  addNotice(item){
    let body=JSON.stringify(item);
    let head1=new HttpHeaders().set('Content-Type','application/json')
    return this._http.post(this.noticeurl,body,{headers:head1});
  }
  updateNotice(item:notice){
    let body=JSON.stringify(item);
    let head1=new HttpHeaders().set('Content-Type','application/json')
    return this._http.put(this.noticeurl+item.notice_id,body,{headers:head1});
  }
  getnoticebyid(notice_id:number){
    return this._http.get(this.noticeurl+notice_id);
  }
  deleteNotice(item:notice){

    let head1=new HttpHeaders().set('Content-Type','application/json')
    return this._http.delete(this.noticeurl+item.notice_id,{headers:head1});
  }
}
