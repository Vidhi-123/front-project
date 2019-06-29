import { Component, OnInit } from '@angular/core';
import { ForgetpassService } from '../forgetpass.service';
import { Router } from '@angular/router';
import { forgetemail } from './forgetemail';

@Component({
  selector: 'app-forgetpass',
  templateUrl: './forgetpass.component.html',
  styleUrls: ['./forgetpass.component.css']
})
export class ForgetpassComponent implements OnInit {

  email_id1:string;
  password:string;
  constructor(private _ser:ForgetpassService,private _router:Router) { }

  onclicksendpassword()

  {

   this._ser.getfacultyByemail(this.email_id1).subscribe(

     (data:any[])=>

     {
       console.log(data);

       if(data.length==0)

       {

         alert("invalid email_id");

       }

       else

       {

         this.password=data[0].password;

         localStorage.setItem('Email_id',this.email_id1);

        console.log(this.email_id1);
        console.log(this.password);
         this._ser.sentMail(new forgetemail(this.email_id1,"your password is","Your  Password is : "+this.password)).subscribe(

         (data:any[])=>

         {

           console.log(data);


         }

         );



         this._router.navigate(['/login']);

         //this.dialogRef.close();



       }

     }

   );

  }

  onclickcancel()
  {
    this._router.navigate(['/login']);
  }
  ngOnInit() {
  
  }

}
