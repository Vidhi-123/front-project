import { Component, OnInit } from '@angular/core';
import { ForgetpassService } from '../forgetpass.service';
import { Router } from '@angular/router';
import { forgetemail } from '../forgetpass/forgetemail';

@Component({
  selector: 'app-stumail',
  templateUrl: './stumail.component.html',
  styleUrls: ['./stumail.component.css']
})
export class StumailComponent implements OnInit {
  email_id1:string;
student_name:string;
  constructor(private _ser:ForgetpassService,private _router:Router) { }

  onclicksendpassword()

  {

   this._ser.getstudentbyemailid(this.email_id1).subscribe(

     (data:any[])=>

     {
       console.log(data);

       if(data.length==0)

       {

         alert("invalid email_id");

       }

       else

       {

        this.student_name=data[0].student_name;
         this._ser.sentMail(new forgetemail(this.email_id1,"absent","Your Child "+this.student_name+" Is Absent Today")).subscribe(

         (data:any[])=>

         {

           console.log(data);


         }

         );



         this._router.navigate(['../menu/student']);

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
