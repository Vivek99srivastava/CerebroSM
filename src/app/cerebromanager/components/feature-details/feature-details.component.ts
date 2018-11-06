import { Component, OnInit,ViewChild } from '@angular/core';
import { UserService } from '../../services/user.service';
import {FormControl, Validators} from '@angular/forms';
import { Observable } from 'rxjs';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';


export interface AttachmentData {
  file: string;
  user: string;
  createdDate: string;
  

}


export interface Features {
  value: string;
  viewValue: string;

}


const USER: string[] = ['AK807X', 'AC763F'];
        const FILE: string[] = ['file1.png','file2.doc',''];
        const CREATEDDATE: string[] = ['10/4/2018','12/5/2018','7/9/2018','8/4/2018','23/10/2018'];


        
@Component({
  selector: 'app-feature-details',
  templateUrl: './feature-details.component.html',
  styleUrls: ['./feature-details.component.css']
})

export class FeatureDetailsComponent implements OnInit {

  displayedColumns: string[] = ['file', 'user','createdDate'];
  dataSource: MatTableDataSource<AttachmentData>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  
  features: Features[] = [
    {value: 'steak-0',viewValue: 'Cerebros'},
    {value: 'steak-1',viewValue: 'Warp'},
    {value: 'tacos-2',viewValue: 'Steak'}
  ];
  

  constructor(private TicketService: UserService) {

      const log = Array.from({length: 100}, (_, k) => createNewLog());
     

     // Assign the data to the data source for the table to render
     this.dataSource = new MatTableDataSource(log);

   }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;

   
  }
  newCustomer(): void {
  
  }
  
  


}


function createNewLog(): AttachmentData {
  const user =
      USER[Math.round(Math.random() * (USER.length - 1))] + ' ' +
      USER[Math.round(Math.random() * (USER.length - 1))].charAt(0) + '.';
  const file =
      FILE[Math.round(Math.random() * (FILE.length - 1))] + ' ';
  
  const createdDate =
      CREATEDDATE[Math.round(Math.random() * (CREATEDDATE.length - 1))] + ' ';

  return {
    file : file,
    user: user,
    createdDate:createdDate,
    
  };
}

