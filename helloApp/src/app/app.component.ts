import { Component } from '@angular/core';
import { FoodService } from './food.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'helloApp';
  constructor(private nonVeg:FoodService ){}
    zomato(quantity:any){
      this.nonVeg.display(quantity)
    }
  }

