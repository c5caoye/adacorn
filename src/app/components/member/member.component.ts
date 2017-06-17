import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router }   from '@angular/router';
import { Location }                 from '@angular/common';
import { trigger, state, animate, transition, style }   from '@angular/animations';

import { DepartmentService }    from '../../services/department.service';
import { Department }           from '../../models/department';
import { MemberService }    from '../../services/member.service';
import { Member }           from '../../models/member';

import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-member',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.css'],
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
export class MemberComponent implements OnInit {
  member: Member;

  constructor(
    private departmentService: DepartmentService,
    private memberService: MemberService,
    private route: ActivatedRoute,
    private location: Location,
    private router : Router
  ) { }

  ngOnInit(): void {
    this.route.params
        .switchMap((params: Params) => this.memberService.getMemberByStunum(params['stunum']))
        .subscribe(member => this.member = member);
  }

  goBack(): void {
      this.location.back();
  }

  goBackToMembers(): void {
      this.router.navigate(['/members']);
  }
}
