import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-dialogbox',
  templateUrl: './dialogbox.component.html',
  styleUrls: ['./dialogbox.component.css']
})
export class DialogboxComponent implements OnInit {

  constructor(private diaogRef :MatDialogRef<DialogboxComponent>) { }

  ngOnInit() {
  }
  onclose()
  {
    this.diaogRef.close();
  }
  onsubmit()
  {
    
  }

}
