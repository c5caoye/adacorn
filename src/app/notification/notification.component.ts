import { Component, OnInit } from "@angular/core";
import { trigger, state, animate, transition, style }   from '@angular/animations';

@Component({
    templateUrl: './notification.component.html',
    styleUrls: [ './notification.component.css' ],
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

export class NotificationComponent implements OnInit {


    constructor() { }

    ngOnInit(): void {
        // this.heroService.getUsers()
        // .then(users => this.users = users.slice(1, 5));
    }

}
