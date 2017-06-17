import { Component, OnInit }                            from '@angular/core';
import { ActivatedRoute, Params, Router }               from '@angular/router';
import { MemberService }                                from '../../services/member.service';
import { Member }                                       from '../../models/member';
import * as moment                                      from 'moment';
import { trigger, state, animate, transition, style }   from '@angular/animations';
let now = moment().format('LLLL');

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.css'],
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

export class MembersComponent implements OnInit {
    members: Member[];
    selectedMember: Member;
    countUpdateTimeFromNow: string;
    loading = false;


  constructor(
      private memberService: MemberService,
      private route: ActivatedRoute,
      private router: Router,
  ) { }

  getUsers(): void {
    //   this.userService.getUsers().then(users => this.users = users);
    this.loading = true;
      this.memberService.getMembers()
        .then(res => {
            this.members = res;
            this.countUpdateTimeFromNow = moment(new Date()).fromNow();
            this.loading = false;
        });
  }

  ngOnInit(): void {
      this.getUsers();
  }

  onSelect(member: Member):  void {
      this.selectedMember = member;
  }

  goToDetail(): void {
    //   this.router.navigate(['/detail', this.selectedMember.id]);
  }
}
