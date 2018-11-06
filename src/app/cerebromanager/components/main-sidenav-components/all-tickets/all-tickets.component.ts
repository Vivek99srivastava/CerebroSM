import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';

export interface UserData {
  ticketId: string;
  requestor: string;
  title: string,
  description: string;
  ticketType: string;
  subCategory: string;
  assignedTo: string;
  currentStage: string;
  updatedBy: string;
  creationDate: string;
  lastupdate: string;

}



    const TICEKTID: string[] = ['WARP-10', 'KALTURA-2', 'CEREBRO-12', 'CEREBRO-11'];
    const REQUESTOR: string[] = ['AK807X','AC763F'];
    const TITLE: string[] = ['title 1','title 2','title 3'];
    const DESCRIPTION: string[] = ['Desc 1','Desc 2'];
    const TICKETTYPE: string[] = ['Data','Others','CR'];
    const SUBCATEGORY: string[] = ['Milestone Date Edit','','CR Cancellation'];
    const ASSIGNEDTO: string[] = ['AK807X','AC763F'];
    const CURRENTSTAGE: string[] = ['Email Confirmation / Closed','Open','Triage & BU Categorization'];
    const UPDATEDBY: string[] = ['AK807X','AC763F'];
    const CREATIONDATE: string[] = ['10/4/2018','12/5/2018','7/9/2018','8/4/2018','23/10/2018'];
    const LASTUPDATE: string[] = ['10/4/2018','12/5/2018','7/9/2018','8/4/2018','23/10/2018'];



@Component({
  selector: 'app-all-tickets',
  templateUrl: './all-tickets.component.html',
  styleUrls: ['./all-tickets.component.css']
})
export class AllTicketsComponent implements OnInit {

  displayedColumns: string[] = ['ticketId', 'requestor','title','description','ticketType','subCategory','assignedTo','currentStage','updatedBy','creationDate','lastupdate'];
  dataSource: MatTableDataSource<UserData>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor() { 
     // Create 100 users
     const log = Array.from({length: 100}, (_, k) => createNewLog(k + 1));
     

     // Assign the data to the data source for the table to render
     this.dataSource = new MatTableDataSource(log);
       

  }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  applyFilter1(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}


/** Builds and returns a new User. */
function createNewLog(id: number): UserData {
  const creationdate =
      CREATIONDATE[Math.round(Math.random() * (CREATIONDATE.length - 1))] + ' ' +
      CREATIONDATE[Math.round(Math.random() * (CREATIONDATE.length - 1))].charAt(0) + '.';

      const ticketId =
      TICEKTID[Math.round(Math.random() * (REQUESTOR.length - 1))] + ' ';

  const requestor =
      REQUESTOR[Math.round(Math.random() * (REQUESTOR.length - 1))] + ' ';

      const assignedTo =
      ASSIGNEDTO[Math.round(Math.random() * (REQUESTOR.length - 1))] + ' ';

      const updatedBy =
      UPDATEDBY[Math.round(Math.random() * (REQUESTOR.length - 1))] + ' ';

      const currentStage =
      CURRENTSTAGE[Math.round(Math.random() * (REQUESTOR.length - 1))] + ' ';

      const ticketType =
      TICKETTYPE[Math.round(Math.random() * (REQUESTOR.length - 1))] + ' ';

      const subCategory =
      SUBCATEGORY[Math.round(Math.random() * (REQUESTOR.length - 1))] + ' ';
  
  const title =
      TITLE[Math.round(Math.random() * (TITLE.length - 1))] + ' ';
      
  const description =
      DESCRIPTION[Math.round(Math.random() * (DESCRIPTION.length - 1))] + ' ';

  const lastupdate =
      LASTUPDATE[Math.round(Math.random() * (LASTUPDATE.length - 1))] + ' ';

  return {
    ticketId: ticketId,
     requestor: requestor,
  title: title,
  description: description,
  ticketType: ticketType,
  subCategory: subCategory,
  assignedTo: assignedTo,
  currentStage: currentStage,
  updatedBy: updatedBy,
  creationDate: creationdate,
  lastupdate: lastupdate,
    
  };

}
