import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { assignment } from '../allclasses/assignment';
import { batchstandardsubjectassign } from '../allclasses/batchstandardsubjectassign';
import { url } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AssignmentService {
  assignment:string=url.endPoint+'assignment/';
  standard:string=url.endPoint+"standard/";
  subject:string= url.endPoint+"subject/";
  dailyworkadd:string=url.endPoint+'dailyworkadd/';
  assignmentupdate=url.endPoint+'assignmentupdate/';
  constructor(private _http:HttpClient) { }
  getAllAssignment(){
    return this._http.get(this.assignment);
  }
  addAssignment(item:FormData){
    return this._http.post(this.assignment,item)
  }
  getbatchbystandardID(standard_id){
    return this._http.get(this.dailyworkadd+standard_id);
  }
  getAllStandard(){
    return this._http.get(this.standard)
  }
  getAllSubject(){
    return this._http.get(this.subject)
  }

  deleteAssignment(item:assignment){
    // let body=JSON.stringify(item);
    let head1=new HttpHeaders().set('Content-Type','application/json');
    return this._http.delete(this.assignment+item.assignment_id,{headers:head1});
  }
  updateAssignment(item:assignment){
    let body=JSON.stringify(item);
    let head1=new HttpHeaders().set('Content-Type','application/json');
    return this._http.put(this.assignment+item.assignment_id,body,{headers:head1});
  }
  updateAssignmentImage(item:FormData){
    return this._http.put(this.assignmentupdate,item)
  }
  getAssignmentById(assignment_id:number){
    return this._http.get(this.assignment+assignment_id);
  }
  deleteAllAssignment(item:batchstandardsubjectassign[]){
    let body=JSON.stringify(item)
    let _abc=new HttpHeaders().set('Content-Type','application/json')
    return this._http.post(this.assignmentupdate,body,{headers:_abc});
  }
}
