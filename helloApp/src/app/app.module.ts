import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FoodService } from './food.service';
import { TryDirective } from './try.directive';

@NgModule({
  declarations: [
    AppComponent,
    TryDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [FoodService],
  bootstrap: [AppComponent]
})
export class AppModule { }
