import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})
export class TimerComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  color = 'warn';
  mode = 'determinate';
  value = 50;
  bufferValue = 75;

}
