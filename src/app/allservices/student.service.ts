import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { student } from '../allclasses/student';
import { url } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  student:string=url.endPoint+"student/";
  deletestudent:string=url.endPoint+"deletestudent/"
  studentsubject:string=url.endPoint+"studentsubject/"
  add_subject:string=url.endPoint+"subject/"
  totalstudent:string=url.endPoint+"totalstudent/";
  studentbybatch:string=url.endPoint+'studentbatchdisplay/';
  constructor(private _http:HttpClient) { }
  getStudent(){
    return this._http.get(this.student)
  }
  gettotalStudent(){
    return this._http.get(this.totalstudent);
  }
  AddSubject(item){
    let body=JSON.stringify(item);
    let head1=new HttpHeaders().set('Content-Type','application/json')
    return this._http.post(this.add_subject,body,{headers:head1});
  }
  getSubjectByStandard(standard_id:number)
  {
    return this._http.get(this.studentsubject+standard_id);
  }
  getStudentById(student_id:number){
    return this._http.get(this.student+student_id)
  }

  addStudent(item){
    console.log(item);
    let body=JSON.stringify(item);
    let head1=new HttpHeaders().set('Content-Type','application/json')
    return this._http.post(this.student,body,{headers:head1});
  }
  deleteStudent(item:student)
  {


      let head1=new HttpHeaders().set('Content-Type','application/json')
      return this._http.delete(this.student+item.student_id,{headers:head1});

}
multipleDeleteStudent(item:student[]){
  let body=JSON.stringify(item)
    let _abc=new HttpHeaders().set('Content-Type','application/json')
    return this._http.post(this.deletestudent,body,{headers:_abc});
}
updateStudent(item:student){
  let body=JSON.stringify(item);
  let head1=new HttpHeaders().set('Content-Type','application/json')
  return this._http.put(this.student+item.student_id,body,{headers:head1});
}
getStudentByBatchId(batch_id){
  return this._http.get(this.studentbybatch+batch_id);
}
}
