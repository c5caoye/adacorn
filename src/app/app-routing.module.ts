import { NgModule }                 from '@angular/core';
import { RouterModule, Routes }     from '@angular/router';


import { DashboardComponent }       from './dashboard/dashboard.component';
import { NotificationComponent }    from './notification/notification.component';
import { MembersComponent }         from './members/members.component';
import { MemberComponent }         from './member/member.component';
import { LoginComponent }           from './login/login.component';
import { DepartmentsComponent } from './departments/departments.component';
import { DepartmentComponent } from './department/department.component';

import { AuthGuard }                from './_guard/auth.guard';

const routes: Routes = [
    {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'dashboard',
        component: DashboardComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'notification',
        component: NotificationComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'members',
        component: MembersComponent,
        // canActivate: [AuthGuard]
    },
    {
        path: 'members/:stunum',
        component: MemberComponent,
        // canActivate: [AuthGuard]
    },
    {
        path: 'dept',
        component: DepartmentsComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'dept/:code',
        component: DepartmentComponent
    },
]

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})

export class AppRoutingModule {}
