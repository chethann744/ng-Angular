import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/user.service';


@Component({
  selector: 'app-list-ticket',
  templateUrl: './list-ticket.component.html',
  styleUrls: ['./list-ticket.component.css']
})

export class ListTicketComponent implements OnInit {

  userlist:any;

  constructor(private myusersrv: UserService) { }

  ngOnInit(): void {
    this.myusersrv.getProfiles().subscribe((result:any)=>{
      this.userlist=result;
      console.log(result);
      
    });
  }

}