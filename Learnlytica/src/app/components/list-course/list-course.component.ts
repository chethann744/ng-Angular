import { Component, OnInit } from '@angular/core';
import { ConfigService } from 'src/app/services/config.service';

@Component({
  selector: 'app-list-course',
  templateUrl: './list-course.component.html',
  styleUrls: ['./list-course.component.css']
})
export class ListCourseComponent implements OnInit {
cList:any
  constructor(private mConfg: ConfigService) { }

  ngOnInit(): void {
    this.mConfg.getCourseList().subscribe((sdata)=>{
      this.cList=sdata
    })
  }

}
