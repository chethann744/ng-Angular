import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ListContactComponent } from './components/list-contact/list-contact.component';
import { ListCourseComponent } from './components/list-course/list-course.component';
import { LoginComponent } from './components/login/login.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ServicesComponent } from './components/services/services.component';
import { DetailProfileComponent } from './detail-profile/detail-profile.component';
import { ListProfilesComponent } from './list-profiles/list-profiles.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'course', component: ListCourseComponent },
  { path: 'login', component: LoginComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'profiles', component: ListProfilesComponent },
  { path: 'contact', component: ListContactComponent },
  { path: 'profiles/:pid',  component: DetailProfileComponent },
  { path: '**', component: NotFoundComponent },
  { path: '', component: HomeComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
