import { Component, OnInit } from '@angular/core';
export interface PeriodicElement {
  name: string;
  position: number;
 marks : number;
 
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'sarthak',marks: 76},
  {position: 2, name: 'panday', marks: 76},
  
];
@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})



export class ReportComponent implements OnInit {
  displayedColumns: string[] = ['position', 'name','marks'];
  dataSource = ELEMENT_DATA;
  constructor() { }

  ngOnInit() {
  }
 
}
