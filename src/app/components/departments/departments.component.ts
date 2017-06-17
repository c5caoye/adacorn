import { Component, OnInit }    from '@angular/core';
import { Router }               from '@angular/router'
import { trigger, state, animate, transition, style }   from '@angular/animations';

import { DepartmentService }    from '../../services/department.service';
import { Department }           from '../../models/department'

@Component({
  selector: 'app-departments',
  templateUrl: './departments.component.html',
  styleUrls: ['./departments.component.css'],
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
export class DepartmentsComponent implements OnInit {
    departments: Department[];

  constructor(
      private departmentService : DepartmentService,
      private router : Router
  ) { }

  ngOnInit() {
      this.getDepartments();
  }

  getDepartments(): void {
      this.departmentService.getDepartments()
        .then(dept => {
            this.departments = dept;
        })
  }

  gotoDetail(code: string): void {
      this.router.navigate(['/dept', code.toLowerCase()]);
    }

}
