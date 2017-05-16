import { Component, OnInit } from "@angular/core";

import { Member } from '../member';
import { MemberService } from '../member.service';
import { trigger, state, animate, transition, style }   from '@angular/animations';

@Component({
    selector: "my-dashboard",
    templateUrl: './dashboard.component.html',
    styleUrls: [ './dashboard.component.css' ],
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

export class DashboardComponent implements OnInit {

    members: Member[] = [];

    constructor() { }

    ngOnInit(): void {
        // this.heroService.getUsers()
        // .then(users => this.users = users.slice(1, 5));
    }

}
