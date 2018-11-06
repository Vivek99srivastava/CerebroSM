import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';

export interface UserData {
  ticketId: string;
  businessunit: string;
  title: string,
  ticketType: string;
  subCategory: string;
  assignedTo: string;
  currentStage: string;
  severity: string;
  creationDate: string;
  lastupdate: string;

}

    const TICEKTID: string[] = ['WARP-10', 'KALTURA-2', 'CEREBRO-12', 'CEREBRO-11'];
    const BUSINESSUNIT: string[] = ['IMWS',''];
    const TITLE: string[] = ['title 1','title 2','title 3'];
    const TICKETTYPE: string[] = ['Data','Others','CR'];
    const SUBCATEGORY: string[] = ['Milestone Date Edit','','CR Cancellation'];
    const ASSIGNEDTO: string[] = ['AK807X'];
    const CURRENTSTAGE: string[] = ['Email Confirmation / Closed','Open','Triage & BU Categorization'];
    const SEVERITY: string[] = ['Small','Large'];
    const CREATIONDATE: string[] = ['10/4/2018','12/5/2018','7/9/2018','8/4/2018','23/10/2018'];
    const LASTUPDATE: string[] = ['10/4/2018','12/5/2018','7/9/2018','8/4/2018','23/10/2018'];



@Component({
  selector: 'app-my-tickets',
  templateUrl: './my-tickets.component.html',
  styleUrls: ['./my-tickets.component.css']
})
export class MyTicketsComponent implements OnInit {

        

  displayedColumns: string[] = ['ticketId', 'businessunit','title','ticketType','subCategory','assignedTo','currentStage','severity','creationDate','lastupdate','assign'];
  dataSource1: MatTableDataSource<UserData>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor() { 
     // Create 100 users
     const log = Array.from({length: 100}, (_, k) => createNewLog(k + 1));
     

     // Assign the data to the data source for the table to render
     this.dataSource1 = new MatTableDataSource(log);
       

  }

  ngOnInit() {
    this.dataSource1.paginator = this.paginator;
    this.dataSource1.sort = this.sort;
  }

  applyFilter(filterValue: string) {
    this.dataSource1.filter = filterValue.trim().toLowerCase();

    if (this.dataSource1.paginator) {
      this.dataSource1.paginator.firstPage();
    }
  }
  applyFilter1(filterValue: string) {
    this.dataSource1.filter = filterValue.trim().toLowerCase();

    if (this.dataSource1.paginator) {
      this.dataSource1.paginator.firstPage();
    }
  }
}


/** Builds and returns a new User. */
function createNewLog(id: number): UserData {
  const creationdate =
      CREATIONDATE[Math.round(Math.random() * (CREATIONDATE.length - 1))] + ' ' +
      CREATIONDATE[Math.round(Math.random() * (CREATIONDATE.length - 1))].charAt(0) + '.';

      const ticketId =
      TICEKTID[Math.round(Math.random() * (BUSINESSUNIT.length - 1))] + ' ';

  const businessunit =
  BUSINESSUNIT[Math.round(Math.random() * (BUSINESSUNIT.length - 1))] + ' ';

      const assignedTo =
      ASSIGNEDTO[Math.round(Math.random() * (ASSIGNEDTO.length - 1))] + ' ';

      const severity =
      SEVERITY[Math.round(Math.random() * (BUSINESSUNIT.length - 1))] + ' ';

      const currentStage =
      CURRENTSTAGE[Math.round(Math.random() * (BUSINESSUNIT.length - 1))] + ' ';

      const ticketType =
      TICKETTYPE[Math.round(Math.random() * (BUSINESSUNIT.length - 1))] + ' ';

      const subCategory =
      SUBCATEGORY[Math.round(Math.random() * (BUSINESSUNIT.length - 1))] + ' ';
  
  const title =
      TITLE[Math.round(Math.random() * (TITLE.length - 1))] + ' ';
      
  
  const lastupdate =
      LASTUPDATE[Math.round(Math.random() * (LASTUPDATE.length - 1))] + ' ';

      
  return {
    ticketId: ticketId,
     businessunit: businessunit,
  title: title,
  ticketType: ticketType,
  subCategory: subCategory,
  assignedTo: assignedTo,
  currentStage: currentStage,
  severity: severity,
  creationDate: creationdate,
  lastupdate: lastupdate,
    
  };

}
