import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatTableDataSource} from '@angular/material';

export interface Features {
  value: string;
  viewValue: string;

}

@Component({
  selector: 'app-completed-sprints',
  templateUrl: './completed-sprints.component.html',
  styleUrls: ['./completed-sprints.component.css']
})
export class CompletedSprintsComponent implements OnInit {
  selectedValue: string;
  features: Features[] = [
    {value: 'steak-0',viewValue: 'Cerebros'},
    {value: 'steak-1',viewValue: 'Warp'},
    {value: 'tacos-2',viewValue: 'Steak'}
  ];

  displayedColumns: string[] = ['item', 'priority', 'userstory','feature','points','assignedTo', 'points', 'progress'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
  }
}

export interface PeriodicElement {
  assignedTo: string;
  item: number;
  priority: string,
  userstory: string,
  feature: string,
  points: number;
  progress: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {item: 1, priority: 'low', userstory: 'asd', feature:'Finance 1', points: 1, assignedTo: 'Vivek',progress: '60'},
  {item: 2, priority: 'high', userstory: 'fg', feature:'Finance 4',points: 4,assignedTo: 'Amol',  progress: '80'},
  {item: 3, priority: 'average', userstory: 'gfs', feature:'Testing5 1', points: 9,assignedTo: 'Sana', progress: '70'},
  {item: 4, priority: 'low', userstory: 'dfs', feature:'Sales 1', points: 6,assignedTo: 'Mandy', progress: '78'},
  {item: 5, priority: 'low', userstory: 'asd', feature:'Finance 1', points: 1, assignedTo: 'Vivek',progress: '60'},
  {item: 6, priority: 'high', userstory: 'fg', feature:'Finance 4',points: 4,assignedTo: 'Amol',  progress: '80'},
  {item: 7, priority: 'average', userstory: 'gfs', feature:'Testing5 1', points: 9,assignedTo: 'Sana', progress: '70'},
  {item: 8, priority: 'low', userstory: 'dfs', feature:'Sales 1', points: 6,assignedTo: 'Mandy', progress: '78'},

];
