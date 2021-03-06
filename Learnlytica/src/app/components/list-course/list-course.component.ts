import { Component, OnInit } from '@angular/core';
import { ConfigService } from 'src/app/services/config.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-list-course',
  templateUrl: './list-course.component.html',
  styleUrls: ['./list-course.component.css']
})
export class ListCourseComponent implements OnInit {
  cList: any
  userList: any;

  myTitle: string = 'THBS';
  braket: number = 100;
  constructor(private mConfg: ConfigService,
    private myUserSrv: UserService) { }

  ngOnInit(): void {
    this.mConfg.getCourseList().subscribe((sdata) => {
      this.cList = sdata
    })
    this.myUserSrv.getProfile().subscribe((result: any) => {
      this.userList = result;
    })

  }

}
