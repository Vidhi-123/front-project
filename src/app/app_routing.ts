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
import { FeesaddComponent } from './fees/feesadd/feesadd.component';
import { Home2Component } from './home2/home2.component';
import { AuthserviceService } from './authservice.service';
import { TmphomeComponent } from './tmphome/tmphome.component';
import { StumailComponent } from './stumail/stumail.component';


const arr: Routes = [
  {path:'',component:LoginComponent},
  {path:'login',component:LoginComponent},
  {path:'forget',component:ForgetpassComponent},
  {path:'menu',component:MenuComponent,children:[
    {path: '', component: TmphomeComponent,canActivate:[AuthserviceService]},

{path: 'batch', component: BatchComponent,canActivate:[AuthserviceService]},
{path: 'updatebatch/:batch_id', component: UpdatebatchComponent,canActivate:[AuthserviceService]},
{path:'addbatch',component:AddbatchComponent,canActivate:[AuthserviceService]},
{path:'dailywork',component:DailyworkaddComponent,canActivate:[AuthserviceService]},
{path:'alldaily',component:DailyworkComponent,canActivate:[AuthserviceService]},
{path:'updatedaily/:work_id',component:UpdatedailyComponent,canActivate:[AuthserviceService]},
{path:'notice',component:NoticeComponent,canActivate:[AuthserviceService]},
{path:'addnotice',component:AddnoticeComponent,canActivate:[AuthserviceService]},
{path:'updatenotice/:notice_id',component:UpdatenoticeComponent,canActivate:[AuthserviceService]},
{path:'assignment',component:AssignmentComponent,canActivate:[AuthserviceService]},
{path:'assignmentadd',component:AssignmentaddComponent,canActivate:[AuthserviceService]},
{path:'updateassignment/:assignment_id',component:AssignmentupdateComponent,canActivate:[AuthserviceService]},
{path:'schedule',component:ScheduleComponent,canActivate:[AuthserviceService]},
{path:'addschedule',component:AddscheduleComponent,canActivate:[AuthserviceService]},
{path:'attendance',component:AttendanceComponent,canActivate:[AuthserviceService]},
{path:'updateschedule/:schedule_id',component:UpdatescheduleComponent,canActivate:[AuthserviceService]},
{path:'addattendance',component:AddattendanceComponent,canActivate:[AuthserviceService]},
{path:'fees',component:FeesComponent,canActivate:[AuthserviceService]},
{path:'feespaid',component:FeespaidComponent,canActivate:[AuthserviceService]},
{path:'student',component:StudentComponent,canActivate:[AuthserviceService]},
{path:'addstudent',component:AddstudentComponent,canActivate:[AuthserviceService]},
{path:'updatestudent/:student_id',component:UpdatestudentComponent,canActivate:[AuthserviceService]},
{path:'fees_remaining',component:RemainingFeesComponent,canActivate:[AuthserviceService]},
{path:'addfees',component:AddfeesComponent,canActivate:[AuthserviceService]},
{path:'feesdetail/:fk_student_fees_id',component:FeesdetailComponent,canActivate:[AuthserviceService]},
{path:'examschedule',component:ExamscheduleComponent,canActivate:[AuthserviceService]},
{path:'addexamschedule',component:AddexamscheduleComponent,canActivate:[AuthserviceService]},
{path:'updateexamschedule/:exam_id',component:UpdateexamscheduleComponent,canActivate:[AuthserviceService]},
{path:'examresult',component:ExamresultComponent,canActivate:[AuthserviceService]},
{path:'addexamresult',component:AddexamresultComponent,canActivate:[AuthserviceService]},
{path:'feesadd',component:FeesaddComponent,canActivate:[AuthserviceService]},
{path:'stumail',component:StumailComponent}

  ]}
];
export const routing = RouterModule.forRoot(arr);
