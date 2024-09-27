import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyDateService {

  constructor() { }

  showTodayDate(){
    let ndate = new Date();
    return ndate;
  }
}
