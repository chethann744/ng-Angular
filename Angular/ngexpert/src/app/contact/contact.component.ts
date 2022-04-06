import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  @Input() label:any;
  @Input() profile:any;

  constructor() { }

  ngOnInit(): void {
    // alert(this.label);
    // alert(this.profile)
  }

}
