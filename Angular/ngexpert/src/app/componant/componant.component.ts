import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-componant',
  templateUrl: './componant.component.html',
  styleUrls: ['./componant.component.css']
})
export class ComponantComponent implements OnInit {

  person = [
    {
      "name": "unkown",
      "age": 100,
      "country": 'MARS'
    },
    {
      "name": "nikitha",
      "age": 32,
      "country": 'USA'
    },
    {
      "name": "chethan",
      "age": 22,
      "country": 'IND'
    },
    {
      "name": "nishanth",
      "age": 34,
      "country": 'UK'
    },

  ];


  getColors(code:string){
    switch(code){
      case 'IND':
        return 'red';
        break;
        case 'USA':
        return 'green';
        break;
      default:
        return 'yellow';
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}
