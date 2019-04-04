import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student-ques-disp',
  templateUrl: './student-ques-disp.component.html',
  styleUrls: ['./student-ques-disp.component.css']
})
export class StudentQuesDispComponent implements OnInit {

  constructor() { }
public questionNo:number=4;
public options : string[]=['option 1','option 2','option 3','option 4']
public putYourQuestionsOutHere:String="You could not live with your own failures Where did it brings you Back to me" 
  ngOnInit() {
  }

}
