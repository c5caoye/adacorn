import { BrowserModule }            from '@angular/platform-browser';
import { NgModule }                 from '@angular/core';
import { FormsModule }              from '@angular/forms';
import { HttpModule }               from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule }         from './app-routing.module';

import { MemberService }            from './services/member.service';
import { DepartmentService }        from './services/department.service';
import { AlertService }             from './services/alert.service';
import { AuthenticationService }    from './services/authentication.service';
import { AuthGuard }                from './_guard/auth.guard';

import { AppComponent }             from './app.component';
import { DashboardComponent }       from './components/dashboard/dashboard.component';
import { NotificationComponent }    from './components/notification/notification.component';
import { CardComponent }            from './components/card/card.component';
import { MembersComponent }         from './components/members/members.component';
import { LoginComponent }           from './components/login/login.component';
import { DepartmentsComponent } from './components/departments/departments.component';
import { DepartmentComponent } from './components/department/department.component';
import { MemberComponent } from './components/member/member.component';
import { AlertComponent } from './components/alert/alert.component';

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
