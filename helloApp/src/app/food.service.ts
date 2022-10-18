import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() {
    console.log("food service provider")
   }
   display(numBurger:any){
    console.log("number of burger",numBurger)
   }
}
