import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  constructor(private myHttp: HttpClient) { 

  }
  getCourseConfigs(){
    return this.myHttp.get('https://httpstat.us/200')
  }
  getCourseList() {
    //observable
    return this.myHttp.get('assets/mock-data/courses-list.json');
  }
}
