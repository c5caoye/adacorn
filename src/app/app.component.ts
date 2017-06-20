import { Component, OnInit, Input }        from "@angular/core";

import { AuthGuard }                from "./_guard/auth.guard";

import { MemberService }            from './services/member.service';
import { AuthenticationService }    from './services/authentication.service';

import { User }                     from './models/user';

@Component({
    selector: "my-app",
    templateUrl: "./app.component.html",
    styleUrls: [ "./app.component.css" ]
})
export class AppComponent {
    title = 'ADACORN';


    currentUser: User;
    name: string;
    @Input() loggedIn = false;

    constructor(
        // private memberService : MemberService;
        private authenticationService : AuthenticationService,
    ) {}

    ngOnInit(): void {
        let user = this.authenticationService.getCurrentUser();
        user ? (this.loggedIn = true) : this.loggedIn = false;
        this.currentUser = JSON.parse(user);
        this.name = this.loggedIn ? this.currentUser.firstName + " " + this.currentUser.lastName : null;
        this.title = this.name + '| ADACORN'
        console.log(this.title);
    }

    logout(): void {
        this.authenticationService.logout()
        this.loggedIn = false;
    }

    refresh(): void {
        console.log('refreshing appComponent')
        let user = this.authenticationService.getCurrentUser();
        user ? (this.loggedIn = true) : this.loggedIn = false;
        this.currentUser = JSON.parse(user);
        this.name = this.loggedIn ? this.currentUser.firstName + " " + this.currentUser.lastName : null;
        this.title = this.name + '| ADACORN'
        console.log(this.loggedIn);
        console.log(this.title);
    }
}
