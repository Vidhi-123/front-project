import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { faculty } from '../allclasses/faculty';

@Injectable({
  providedIn: 'root'
})
export class FacultyService {
faculty:string="http://localhost:3000/faculty/"
  constructor(private _http:HttpClient) { }
  getAllFaculty(){
    return this._http.get(this.faculty);
  }
  getLoginById(item:faculty){
    let body=JSON.stringify(item)   ;
    let head1=new HttpHeaders().set('Content-Type','application/json');
    return this._http.post(this.faculty,body,{headers:head1});
  }

}
