import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { student } from '../allclasses/student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  student:string="http://localhost:3000/student/";
  deletestudent:string="http://localhost:3000/deletestudent/"
  studentsubject:string="http://localhost:3000/studentsubject/"
  add_subject:string="http://localhost:3000/subject/"
  totalstudent:string="http://localhost:3000/totalstudent/";
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
}
