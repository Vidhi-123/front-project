import { Component, OnInit } from '@angular/core';
import { FacultyService } from '../allservices/faculty.service';
import { faculty } from '../allclasses/faculty';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

faculty_id:string;
password:string;
hide:boolean=true;


onforget(){
  this._router.navigate(['/forget'])
}


onLogin(){
  console.log(this.faculty_id);
    console.log(this.password);
    this._ser.getLoginById(new faculty(this.faculty_id,this.password)).subscribe(
      (data:any[])=>{
        console.log(data);
        if(data.length>0){

          alert("login successfully");
          localStorage.setItem('faculty_id',data[0].faculty_id);
          this._router.navigate(['menu']);

          // //  this._route.navigate(['/viewprofile']);
          //  localStorage.setItem('user_id',this.user_id);
          //  this._route.navigate(['/table'])
          }
          else
          {
            alert("unsuccesful")
          }
      }
    );


}

  constructor(private _ser:FacultyService,private _router:Router) { }

  ngOnInit() {
  }

}
