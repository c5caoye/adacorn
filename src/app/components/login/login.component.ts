import { Component, OnInit }        from '@angular/core';
import { Router, ActivatedRoute }   from '@angular/router';
import { AuthenticationService }    from '../../services/authentication.service';
import { AlertService }             from '../../services/alert.service';
import { trigger, state, animate, transition, style }   from '@angular/animations';

import { AppComponent }             from '../../app.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  animations: [trigger(
    'openClose',
    [
      transition(":enter", [
        style({ opacity: 0 }),
        animate('500ms', style({ opacity: 1 }))
      ]),
      transition(":leave", [
        animate('500ms', style({ opacity: 0 }))
      ])
    ])],
    host: {
        '[@openClose]': 'true',
        'style': 'display: block;'
    },
})
export class LoginComponent implements OnInit {
    model: any = {};
    loading = false;
    returnUrl: string;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private authenticationService: AuthenticationService,
        private appComponent: AppComponent,
        private alertService: AlertService) { }

  ngOnInit() {
      // reset login status
      console.log(Router)
      console.log(this.router)

        this.authenticationService.logout();

        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  login() {
        this.loading = true;
        this.authenticationService.login(this.model.username, this.model.password, this.returnUrl)
            .subscribe(
                data => {
                    this.router.navigate([this.returnUrl]);
                    this.appComponent.refresh(); // After user logged in, refresh the side bar.
                    this.loading = false;
                },
                error => {
                    this.alertService.error(error._body);
                    this.loading = false;
                });
    }

}
