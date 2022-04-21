import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private myHttp: HttpClient) { }

  getProfiles() {
    return this.myHttp.get('http://localhost:4200/api/users/tickets') //obs
  }
}

