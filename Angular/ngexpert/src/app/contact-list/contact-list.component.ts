import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {
  array=['one','two','three'];
details=[{name:'chethan',
age:22}]

  constructor() { }

  ngOnInit(): void {
  }

}
