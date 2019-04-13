import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointState, BreakpointObserver } from '@angular/cdk/layout';
export interface PeriodicElement {
  total_batches:string;
  exam_date:string;
  subject_name:string;
  exam_timings:string;
   
 }
 export interface PeriodicElement1 {
  total_batches:string;
  exam_date:string;
  subject_name:string;
  exam_timings:string;
   
 }
 export interface PeriodicElement2 {
  total_batches:string;
  exam_date:string;
  subject_name:string;
  exam_timings:string;
   
 }
 export interface schedule {
  batch_name:string;
  timings:string;
  faculty_name:string;
  subject_name:string;
  
   
 }
 export interface fees {
  student_name:string;
  total_fees:number;
  pending_fees:number;
  paid_fees:number
  
   
 }
 const ELEMENT_DATA: PeriodicElement[] = [
  {total_batches: '8_B1', exam_date: '11-02-2019',subject_name:'maths',exam_timings:'8:00 am'},
  {total_batches: '8_B2', exam_date: '12-02-2019',subject_name:'science',exam_timings:'10:00 am'},
];
const ELEMENT_DATA1: PeriodicElement1[] = [
  {total_batches: '9_B1', exam_date: '13-02-2019',subject_name:'english',exam_timings:'8:00 am'},
  {total_batches: '9_B2', exam_date: '14-02-2019',subject_name:'science',exam_timings:'12:00 pm'},
];
const ELEMENT_DATA2: PeriodicElement2[] = [
  {total_batches: '10_B1', exam_date: '15-02-2019',subject_name:'english',exam_timings:'8:00 am'},
  {total_batches: '10_B2', exam_date: '16-02-2019',subject_name:'science',exam_timings:'12:00 pm'},
];
const schedule_data: schedule[] = [
  {batch_name: '10_B1', timings: '10:00 AM',faculty_name:'JAIMINI PATEL',subject_name:'english'},
  {batch_name: '9_B1', timings: '11:00 AM',faculty_name:'DIPTI BHATT',subject_name:'science'},
  {batch_name: '12_B1', timings: '12:00 PM',faculty_name:'HITESH PARMAR',subject_name:'physics'},
  {batch_name: '8_B1', timings: '1:00 PM',faculty_name:'POOJA GANDHI',subject_name:'maths'},
  
];
const fees_data: fees[] = [
  {student_name: 'HETVEE', total_fees: 10000,pending_fees:2000,paid_fees:6000},
  {student_name: 'VIDHI', total_fees: 12000,pending_fees:4000,paid_fees:8000},
  {student_name: 'KINJAL', total_fees: 14000,pending_fees:6000,paid_fees:8000},
  {student_name: 'NIKITA', total_fees: 12000,pending_fees:4000,paid_fees:8000},
  {student_name: 'DHRUVI', total_fees: 10000,pending_fees:4000,paid_fees:6000},
  
];
@Component({
  selector: 'app-home1',
  templateUrl: './home1.component.html',
  styleUrls: ['./home1.component.css']
})
export class Home1Component {
  displayedColumns: string[] = ['total_batches','exam_date','subject_name','exam_timings'];
  displayedColumns1: string[] = ['total_batches','exam_date','subject_name','exam_timings'];
  displayedColumns2: string[] = ['total_batches','exam_date','subject_name','exam_timings'];
  displayedschedule:string[]=['batch_name','timings','faculty_name','subject_name'];
  displayedfees:string[]=['student_name','total_fees','pending_fees','paid_fees'];
  dataSource = ELEMENT_DATA;
  dataSource1 = ELEMENT_DATA1;
  dataSource2 = ELEMENT_DATA2;
  schedulesource=schedule_data;
  feessource=fees_data;
  /** Based on the screen size, switch from standard to one column per row */
  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return [
          { title: 'Card 1', cols: 1, rows: 1 },
          { title: 'Card 2', cols: 1, rows: 1 },
          { title: 'Card 3', cols: 1, rows: 1 },
          { title: 'Card 4', cols: 1, rows: 1 }
        ];
      }

      return [
        { title: 'Card 1', cols: 2, rows: 1 },
        { title: 'Card 2', cols: 1, rows: 1 },
        { title: 'Card 3', cols: 1, rows: 2 },
        { title: 'Card 4', cols: 1, rows: 1 }
      ];
    })
  );

  constructor(private breakpointObserver: BreakpointObserver) {}
}
