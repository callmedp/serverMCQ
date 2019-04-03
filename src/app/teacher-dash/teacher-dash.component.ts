import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-teacher-dash',
  templateUrl: './teacher-dash.component.html',
  styleUrls: ['./teacher-dash.component.css']
})
export class TeacherDashComponent implements OnInit {
  open = false;

  constructor(private router :Router) { }

  ngOnInit() {
  }
  navigate()
  {
    this.router.navigate(['/admin']);
  }

}
