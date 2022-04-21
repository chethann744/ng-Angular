import { NgModule } from '@angular/core';
import { NotFoundError } from 'rxjs';
import { RouterModule, Routes } from '@angular/router';
import { CreateTicketComponent } from './Components/create-ticket/create-ticket.component';
import { ListTicketComponent } from './Components/list-ticket/list-ticket.component';
import { LoginComponent } from './Components/login/login.component';

const routes: Routes = [

  {path:'login',component:LoginComponent},

  {path:'create-ticket',component:CreateTicketComponent},

  {path:'list-ticket',component:ListTicketComponent}

]



@NgModule({

  imports: [RouterModule.forRoot(routes)],

  exports: [RouterModule]

})

export class AppRoutingModule { }