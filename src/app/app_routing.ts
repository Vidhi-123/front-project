import { Routes, RouterModule } from '@angular/router';
import { BatchComponent } from './batch/batch.component';
import { UpdatebatchComponent } from './batch/updatebatch/updatebatch.component';
import { AddbatchComponent } from './batch/addbatch/addbatch.component';
import { HomeComponent } from './home/home.component';
import { DailyworkaddComponent } from './dailyworkadd/dailyworkadd.component';
import { DailyworkComponent } from './dailywork/dailywork.component';
import { UpdatedailyComponent } from './dailywork/updatedaily/updatedaily.component';
import { NoticeComponent } from './notice/notice.component';
import { AddnoticeComponent } from './notice/addnotice/addnotice.component';
import { UpdatenoticeComponent } from './notice/updatenotice/updatenotice.component';
import { AssignmentComponent } from './assignment/assignment.component';
import { AssignmentaddComponent } from './assignment/assignmentadd/assignmentadd.component';
import { AssignmentupdateComponent } from './assignment/assignmentupdate/assignmentupdate.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { AddscheduleComponent } from './schedule/addschedule/addschedule.component';
import { AttendanceComponent } from './attendance/attendance.component';
import { UpdatescheduleComponent } from './schedule/updateschedule/updateschedule.component';
import { AddattendanceComponent } from './attendance/addattendance/addattendance.component';
import { FeesComponent } from './fees/fees.component';
import { FeespaidComponent } from './fees/feespaid/feespaid.component';
import { StudentComponent } from './student/student.component';
import { AddstudentComponent } from './student/addstudent/addstudent.component';
import { UpdatestudentComponent } from './student/updatestudent/updatestudent.component';
import { RemainingFeesComponent } from './fees/remaining-fees/remaining-fees.component';
import { AddfeesComponent } from './fees/addfees/addfees.component';
import { FeesdetailComponent } from './fees/feesdetail/feesdetail.component';
import { ExamscheduleComponent } from './examschedule/examschedule.component';
import { AddexamscheduleComponent } from './examschedule/addexamschedule/addexamschedule.component';
import { UpdateexamscheduleComponent } from './examschedule/updateexamschedule/updateexamschedule.component';
import { ExamresultComponent } from './examresult/examresult.component';
import { AddexamresultComponent } from './examresult/addexamresult/addexamresult.component';
import { LoginComponent } from './login/login.component';
import { MenuComponent } from './menu/menu.component';
import { ForgetpassComponent } from './forgetpass/forgetpass.component';
import { Home1Component } from './home1/home1.component';


const arr: Routes = [
  {path:'',component:LoginComponent},
  {path:'login',component:LoginComponent},
  {path:'menu',component:MenuComponent,children:[
    {path: '', component: Home1Component},

{path: 'batch', component: BatchComponent},
{path: 'updatebatch/:batch_id', component: UpdatebatchComponent},
{path:'addbatch',component:AddbatchComponent},
{path:'dailywork',component:DailyworkaddComponent},
{path:'alldaily',component:DailyworkComponent},
{path:'updatedaily/:work_id',component:UpdatedailyComponent},
{path:'notice',component:NoticeComponent},
{path:'addnotice',component:AddnoticeComponent},
{path:'updatenotice/:notice_id',component:UpdatenoticeComponent},
{path:'assignment',component:AssignmentComponent},
{path:'assignmentadd',component:AssignmentaddComponent},
{path:'updateassignment/:assignment_id',component:AssignmentupdateComponent},
{path:'schedule',component:ScheduleComponent},
{path:'addschedule',component:AddscheduleComponent},
{path:'attendance',component:AttendanceComponent},
{path:'updateschedule/:schedule_id',component:UpdatescheduleComponent},
{path:'addattendance',component:AddattendanceComponent},
{path:'fees',component:FeesComponent},
{path:'feespaid',component:FeespaidComponent},
{path:'student',component:StudentComponent},
{path:'addstudent',component:AddstudentComponent},
{path:'updatestudent/:student_id',component:UpdatestudentComponent},
{path:'fees_remaining',component:RemainingFeesComponent},
{path:'addfees',component:AddfeesComponent},
{path:'feesdetail/:fk_student_fees_id',component:FeesdetailComponent},
{path:'examschedule',component:ExamscheduleComponent},
{path:'addexamschedule',component:AddexamscheduleComponent},
{path:'updateexamschedule/:exam_id',component:UpdateexamscheduleComponent},
{path:'examresult',component:ExamresultComponent},
{path:'addexamresult',component:AddexamresultComponent},
{path:'forget',component:ForgetpassComponent},

  ]}
];
export const routing = RouterModule.forRoot(arr);
