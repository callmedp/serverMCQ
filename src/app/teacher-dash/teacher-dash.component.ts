import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog,MatDialogConfig } from '@angular/material';
import { DialogboxComponent } from '../dialogbox/dialogbox.component';


@Component({
  selector: 'app-teacher-dash',
  templateUrl: './teacher-dash.component.html',
  styleUrls: ['./teacher-dash.component.css']
})
export class TeacherDashComponent implements OnInit {
  open = false;

  constructor(private router :Router,
    private dialog :MatDialog) { }

  ngOnInit() {
  }
  navigate()
  {
    this.router.navigate(['/admin']);
  }

  openDialog()
  {
    const dialogConfig =new MatDialogConfig();
    dialogConfig.autoFocus=true;
    dialogConfig.width="20%";
    dialogConfig.height="25%";
    this.dialog.open(DialogboxComponent,dialogConfig);

  }

}
