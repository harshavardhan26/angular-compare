import { Component } from '@angular/core';
import moment from 'moment'

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  firstDate: any; 
  secondDate: any;
  diffInDays: number;

  constructor() {
    this.firstDate = moment('2019/03/31');
    this.secondDate = moment('2019/04/01');
    // this.diffInDays = this.firstDate.diff(this.secondDate, 'days')  
    this.diffInDays = Math.abs(this.firstDate.diff(this.secondDate, 'days')); 
  }

}
