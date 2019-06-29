import { Injectable } from '@angular/core';
import { CanActivate,ActivatedRouteSnapshot,RouterStateSnapshot,Router } from "@angular/router";
import { FacultyService } from './allservices/faculty.service';

@Injectable({
  providedIn: 'root'
})
export class AuthserviceService {


  faculty_id:string="";

  constructor(private fac_ser:FacultyService,private _router:Router) { }

  canActivate(route:ActivatedRouteSnapshot,state:RouterStateSnapshot): boolean{
    this.faculty_id=localStorage.getItem('faculty_id');
    
    if(this.faculty_id!=null)
    {
      console.log("yes");
      console.log(this.faculty_id);
      return true;
    }
    else
    {
      console.log("no");
      console.log(this.faculty_id);
      alert("login Requries");
      this._router.navigate(['']);
      
    }

  }
}
