import { Component, OnInit } from '@angular/core';
import {FormControl, Validators , FormGroup} from '@angular/forms';
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
  {position: 1, name: 'Vivek', weight: 1, symbol: '12/4/2018'},
  {position: 2, name: 'Amol', weight: 4, symbol: '14/6/2108'},
  {position: 3, name: 'Sana', weight: 6, symbol: '30/9/2-18'},
  // {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  // {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  // {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  // {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  // {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  // {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  // {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];

@Component({
  selector: 'app-create-release',
  templateUrl: './create-release.component.html',
  styleUrls: ['./create-release.component.css']
})
export class CreateReleaseComponent implements OnInit {

  selectedValues: string;
  sname = new FormControl('', [Validators.required]);
  
  createrelease = new FormGroup({
    application1 : new FormControl(''),
    rname : new FormControl(''),
    rversion : new FormControl(''),
    planneddate : new FormControl(''),
    actualdate : new FormControl(''),
    description : new FormControl(''),
   
    
  });

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

  onSubmit() {
    // this.submitted = true;
    // this.save();
    console.log(this.createrelease.value);
  }



}
