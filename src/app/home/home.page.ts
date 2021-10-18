import { Component } from '@angular/core';
import * as moment from 'moment';
import { Day } from '../model/day';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  years = [];
  months = [];
  days = [];
  today = new Date();

  constructor() {
    let day = new Day();
    // day.description = 'Digital Art - Comms';
    this.days.push(day);
  }

  startWork() {
    this.days[0].start = moment();
    this.days[0].status = 'Working';
  }

  pauseWork() {
    this.days[0].status = 'Paused';
    let p = { m: moment(), action: this.days[0].status };

    this.days[0].pause.push(p);
  }

  returnWork() {
    this.days[0].status = 'Working';
    let p = { m: moment(), action: 'Returned' };

    this.days[0].pause.push(p);
  }

  endWork() {
    if (this.days[0].pause.length > 0) {
      this.days[0].end = this.days[0].pause[this.days[0].pause.length - 1].m;
    } else {
      this.days[0].end = moment();
    }

    this.days[0].status = 'Ended';
    this.returnDuration();
    this.log();
  }

  returnDuration() {
    this.days[0].duration = moment.duration(
      this.days[0].end.diff(this.days[0].start)
    );

    this.days[0].dMessage =
      'You worked ' +
      this.days[0].duration.asHours().toFixed(0) +
      ' hours, ' +
      this.days[0].duration.minutes() +
      ' minutes, ' +
      this.days[0].duration.seconds() +
      ' seconds.';
  }

  log() {
    console.log(this.days[0]);
    // console.log(this.days[0].pause[this.days[0].pause.length-1]);
  }
}
