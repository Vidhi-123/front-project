import { Component, OnInit } from '@angular/core';
import { FeesService } from 'src/app/allservices/fees.service';
import { student } from 'src/app/allclasses/student';
import { fees } from 'src/app/allclasses/fees';
import { Router } from '@angular/router';
import { StudentService } from 'src/app/allservices/student.service';
import { batch_class } from 'src/app/allclasses/batch_class';
import { BatchServiceService } from 'src/app/allservices/batch-service.service';

@Component({
  selector: 'app-feesadd',
  templateUrl: './feesadd.component.html',
  styleUrls: ['./feesadd.component.css']
})
export class FeesaddComponent implements OnInit {



student_arr:student[]=[];
selectedstudent:number;
selectedBatch:batch_class;
total_fees:number;
arr_student:student[]=[];

arr_batch:batch_class[]=[];
  constructor(private _ser:FeesService,private _route:Router,private _studentservice:StudentService,private _batchser:BatchServiceService) { }


  onBatchChange(){
    this._studentservice.getStudentByBatchId(this.selectedBatch.batch_id).subscribe(
      (data:any)=>{
        this.arr_student=data;
        console.log(this.arr_student);
        //console.log(this.arr_subject);
      }
    );
  
  }




  onAdd()
  {
   
     
    // const fd=new FormData();
  
    //   fd.append('batch_name',this.batch_name);
    //   //fd.append('dish_price',this.dish_price.toString());
    //  // fd.append('image',this.selectedFile,this.selectedFile.name);
  
    //   fd.append('fk_standard_id',this.selected.standard_id.toString());
  
    //   console.log(fd);
      this._ser.feesAdd(new fees(0,this.selectedstudent,this.total_fees)).subscribe(
        (data:any)=>{
          console.log(data);
          
          this._route.navigate(['../menu/fees']);
  
        }
  
      );
  
  
  
  
       }
       keyPressText(event:any)
  {
    const pattern = /[0-9]/;
    let inputChar=String.fromCharCode(event.charCode);
    if(!pattern.test(inputChar))
    {
      event.preventDefault();
    }
  }

      

  ngOnInit() {
    // this._ser.getAllStudentName().subscribe(
    //   (data:any[])=>{
    //     this.student_arr=data;
    //     console.log(this.student_arr);
    //   }
    // )


    this._batchser.getAllBatch().subscribe(
      (data:any)=>{
        this.arr_batch=data;
      }
    );
  }

}
