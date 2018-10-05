import { Component, OnInit, ViewChild } from '@angular/core';
import {MatSort, MatTableDataSource} from '@angular/material';

export interface SPRINT {
  value: string;
  viewValue: string;
}
export interface USERSTORY {
  value1: string;
  viewValue1: string;
}



@Component({
  selector: 'app-worklogs',
  templateUrl: './worklogs.component.html',
  styleUrls: ['./worklogs.component.css']
})
export class WorklogsComponent implements OnInit {

  sprints: SPRINT[] = [
    {value: 'sprint-0', viewValue: 'Sprint 1'},
    {value: 'sprint-1', viewValue: 'Sprint 2'},
    {value: 'sprint-2', viewValue: 'Sprint 3'},
    {value: 'sprint-3', viewValue: 'Sprint 4'}
  ];
  users: USERSTORY[] = [
    {value1: 'us-0', viewValue1: 'US-34 AMOL'},
    {value1: 'us-1', viewValue1: 'US-24 VIVEK'},
    {value1: 'us-2', viewValue1: 'US-45 MACK'},
    {value1: 'us-3', viewValue1: 'US-23 SANA'}
  ];



  ngOnInit() {
    
  }
}
