import { Component, OnInit }        from "@angular/core";
import { AuthGuard }                from "./_guard/auth.guard";
import { MemberService }            from './member.service';
import { AuthenticationService }    from './authentication.service';

@Component({
    selector: "my-app",
    templateUrl: "./app.component.html",
    styleUrls: [ "./app.component.css" ]
})
export class AppComponent {
    currentUser: any;
    title = 'ADACORN';
    name = 'Jiacheng Jiang';
    loggedIn = false;

    constructor(
        // private memberService : MemberService;
        private authenticationService : AuthenticationService,
    ) {}

    ngOnInit(): void {
        let user = this.authenticationService.getCurrentUser();
        user ? (this.loggedIn = true) : this.loggedIn = false;
        this.currentUser = JSON.parse(user);
        this.name = this.loggedIn ? this.currentUser.firstName + " " + this.currentUser.lastName : null;
    }

    logout(): void {
        this.authenticationService.logout()
        this.loggedIn = false;
    }
}
