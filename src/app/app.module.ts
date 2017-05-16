import { BrowserModule }            from '@angular/platform-browser';
import { NgModule }                 from '@angular/core';
import { FormsModule }              from '@angular/forms';
import { HttpModule }               from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule }         from './app-routing.module';

import { MemberService }            from './member.service';
import { DepartmentService }            from './department.service';
import { AlertService }             from './alert.service';
import { AuthenticationService }    from './authentication.service';
import { AuthGuard }                from './_guard/auth.guard';

import { AppComponent }             from './app.component';
import { DashboardComponent }       from './dashboard/dashboard.component';
import { NotificationComponent }    from './notification/notification.component';
import { CardComponent }            from './card/card.component';
import { MembersComponent }         from './members/members.component';
import { LoginComponent }           from './login/login.component';
import { DepartmentsComponent } from './departments/departments.component';
import { DepartmentComponent } from './department/department.component';
import { MemberComponent } from './member/member.component';
import { AlertComponent } from './alert/alert.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    NotificationComponent,
    CardComponent,
    MembersComponent,
    LoginComponent,
    DepartmentsComponent,
    DepartmentComponent,
    MemberComponent,
    AlertComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    BrowserAnimationsModule,
  ],
  providers: [
      MemberService,
      AlertService,
      AuthenticationService,
      DepartmentService,
      AuthGuard,
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
