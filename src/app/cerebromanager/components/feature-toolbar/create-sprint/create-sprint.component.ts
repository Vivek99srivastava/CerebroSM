import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {MatTableDataSource} from '@angular/material';

export interface Application1 {
  value: string;
  viewValue: string;

}
export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}


const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Vivek', weight: 1, symbol: 'ux'},
  {position: 2, name: 'Amol', weight: 4, symbol: 'db'},
  {position: 3, name: 'Sana', weight: 6, symbol: 'web'},
   {position: 4, name: 'Beryllium', weight: 9, symbol: 'Be'},
   {position: 5, name: 'Boron', weight: 2, symbol: 'B'},
   {position: 6, name: 'Carbon', weight: 2, symbol: 'C'},
   {position: 7, name: 'Nitrogen', weight: 4, symbol: 'N'},
   
];




@Component({
  selector: 'app-create-sprint',
  templateUrl: './create-sprint.component.html',
  styleUrls: ['./create-sprint.component.css']
})
export class CreateSprintComponent implements OnInit {
  selectedValues: string;
  sname = new FormControl('', [Validators.required]);
  minDate = new Date(2000, 0, 1);
  maxDate = new Date(2020, 0, 1);

  getErrorsnameMessage(){
    return this.sname.hasError('required') ? 'You must enter sprint name' :'';
  }

  applications: Application1[] = [
    {value: 'steak-0',viewValue: 'Cerebros'},
    {value: 'steak-1',viewValue: 'Waper'},
    {value: 'tacos-2',viewValue: 'Git'}
  ];

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }



  constructor() { }

  ngOnInit() {
  }

}
