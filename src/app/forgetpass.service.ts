import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ForgetpassService {


  url:string="http://localhost:3000/nodemail/";
url1:string="http://localhost:3000/faculty/";
url2:string="http://localhost:3000/student_id/"
  constructor(private _http:HttpClient) { }
  changePassword(item:any){
    let _abc=new HttpHeaders().set('Content-Type','application/json');
    let body=JSON.stringify(item);
    console.log(body);
    return this._http.put(this.url1,body,{headers:_abc});
  }
  sentMail(item){
    let _abc=new HttpHeaders().set('Content-Type','application/json');
    let body=JSON.stringify(item);
    console.log(body);
    return this._http.post(this.url,body,{headers:_abc});

  }
  getfacultyByemail(faculty_id){
    return this._http.get(this.url1+faculty_id);
  }
  getstudentbyemailid(parents_email_id)
  {
    return this._http.get(this.url2+parents_email_id);
  }
}
