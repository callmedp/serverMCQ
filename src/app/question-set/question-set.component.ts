import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-question-set',
  templateUrl: './question-set.component.html',
  styleUrls: ['./question-set.component.css']
})
export class QuestionSetComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  items=[1,2,3,4]
}
