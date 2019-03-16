import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { BatchComponent } from './batch/batch.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatDatepickerModule} from '@angular/material/datepicker';
//import { routing } from '../../app_routing';
import { routing } from "./app_routing";
import { FusionChartsModule } from 'angular-fusioncharts';
import * as FusionCharts from 'fusioncharts';
// Load Charts module
import * as Charts from 'fusioncharts/fusioncharts.charts';
// Load fusion theme
import * as FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';

// Add dependencies to FusionChartsModule


import { MatInputModule,MatFormFieldControl,MatMenuModule, MatPaginatorModule,MatProgressSpinnerModule, MatSortModule, MatCardModule,MatSelectModule,MatOptionModule, MatIconModule, MatCheckboxModule, MatRadioModule, MatToolbarModule, MatSidenavModule, MatListModule, MatGridListModule, MatNativeDateModule} from '@angular/material';
import { UpdatebatchComponent } from './batch/updatebatch/updatebatch.component';
import { AddbatchComponent } from './batch/addbatch/addbatch.component';
import { DailyworkaddComponent } from './dailyworkadd/dailyworkadd.component';
import { MenuComponent } from './menu/menu.component';
import { LayoutModule } from '@angular/cdk/layout';
import { HomeComponent } from './home/home.component';
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
import { ResultComponent } from './result/result.component';
import { AttendanceComponent } from './attendance/attendance.component';
import { AddattendanceComponent } from './attendance/addattendance/addattendance.component';
import { UpdatescheduleComponent } from './schedule/updateschedule/updateschedule.component';
import { FeesComponent } from './fees/fees.component';
import { FeespaidComponent } from './fees/feespaid/feespaid.component';
import { StudentComponent } from './student/student.component';
import { AddstudentComponent } from './student/addstudent/addstudent.component';
import { UpdatestudentComponent } from './student/updatestudent/updatestudent.component';

import { RemainingFeesComponent } from './fees/remaining-fees/remaining-fees.component';
import { AddfeesComponent } from './fees/addfees/addfees.component';
import { FeesdetailComponent } from './fees/feesdetail/feesdetail.component';
import { UpdateexamscheduleComponent } from './examschedule/updateexamschedule/updateexamschedule.component';
import { ExamscheduleComponent } from './examschedule/examschedule.component';
import { AddexamscheduleComponent } from './examschedule/addexamschedule/addexamschedule.component';
import { ExamresultComponent } from './examresult/examresult.component';
import { AddexamresultComponent } from './examresult/addexamresult/addexamresult.component';
import { LoginComponent } from './login/login.component';
import { ForgetpassComponent } from './forgetpass/forgetpass.component';



FusionChartsModule.fcRoot(FusionCharts, Charts, FusionTheme)
@NgModule({
  declarations: [
    AppComponent,
    BatchComponent,
    UpdatebatchComponent,
    AddbatchComponent,
    DailyworkaddComponent,
    MenuComponent,
    HomeComponent,
    DailyworkComponent,
    UpdatedailyComponent,
    NoticeComponent,
    AddnoticeComponent,
    UpdatenoticeComponent,
    AssignmentComponent,
    AssignmentaddComponent,
    AssignmentupdateComponent,
    ScheduleComponent,
    AddscheduleComponent,
    ResultComponent,
    AttendanceComponent,
    AddattendanceComponent,
    UpdatescheduleComponent,
    FeesComponent,
    FeespaidComponent,
    StudentComponent,
    AddstudentComponent,
    UpdatestudentComponent,
    ExamscheduleComponent,
    AddexamscheduleComponent,
    UpdateexamscheduleComponent,
    ExamresultComponent,
    AddexamresultComponent,
    RemainingFeesComponent,

    AddfeesComponent,

    FeesdetailComponent,

    LoginComponent,

    ForgetpassComponent,

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    MatButtonModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatPaginatorModule,
    MatProgressSpinnerModule,
    MatSortModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    FusionChartsModule,
    MatSelectModule,
    MatOptionModule,
    routing,
    MatCheckboxModule,
    MatRadioModule,
    LayoutModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatGridListModule,
    MatDatepickerModule,
    MatNativeDateModule,


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
