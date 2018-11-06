import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import { stagger } from '@angular/animations';

export interface UserData {
  ticketId: string;
  issueId: string;
  createdby: string;
  title: string;
  issuetype: string;
  assignedTo: string;
  currentStage: string;
  priority: string;
  status: string;
  rootcause: string;  
  creationDate: string;
  lastupdate: string;

}

    const TICEKTID: string[] = ['WARP-10', 'KALTURA-2', 'CEREBRO-12', 'CEREBRO-11'];
    const ISSUEID: string[] = ['Issue-1', 'Issue-2'];
    const CREATEDBY: string[] = ['KG636B','AK807X'];
    const TITLE: string[] = ['title 1','title 2','title 3'];
    const ASSIGNEDTO: string[] = ['AK807X','AC763F'];
    const CURRENTSTAGE: string[] = ['SIT','UAT'];
    const PRIORITY: string[] = ['P1','P2','P3'];
    const STATUS: string[] = ['New','Open','Closed'];
    const ISSUETYPE: string[] = ['Bug','Question'];
    const ROOTCAUSE: string[] = ['Data Issue','Design Issue','Coding'];
    const CREATIONDATE: string[] = ['10/4/2018','12/5/2018','7/9/2018','8/4/2018','23/10/2018'];
    const LASTUPDATE: string[] = ['10/4/2018','12/5/2018','7/9/2018','8/4/2018','23/10/2018'];



@Component({
  selector: 'app-view-issues',
  templateUrl: './view-issues.component.html',
  styleUrls: ['./view-issues.component.css']
})
export class ViewIssuesComponent implements OnInit {

        

  displayedColumns: string[] = ['ticketId','issueId', 'createdby','currentStage','title','issuetype','assignedTo','priority','status','rootcause','creationDate','lastupdate'];
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
      TICEKTID[Math.round(Math.random() * (TICEKTID.length - 1))] + ' ';

      const issueId =
      ISSUEID[Math.round(Math.random() * (ISSUEID.length - 1))] + ' ';

  const createdby =
  CREATEDBY[Math.round(Math.random() * (CREATEDBY.length - 1))] + ' ';

      const assignedTo =
      ASSIGNEDTO[Math.round(Math.random() * (ASSIGNEDTO.length - 1))] + ' ';

      const priority =
      PRIORITY[Math.round(Math.random() * (PRIORITY.length - 1))] + ' ';

      const status =
      STATUS[Math.round(Math.random() * (STATUS.length - 1))] + ' ';

      const rootcause =
      ROOTCAUSE[Math.round(Math.random() * (ROOTCAUSE.length - 1))] + ' ';

      const issuetype =
      ISSUETYPE[Math.round(Math.random() * (ISSUETYPE.length - 1))] + ' ';


      const currentStage =
      CURRENTSTAGE[Math.round(Math.random() * (CURRENTSTAGE.length - 1))] + ' ';

      
      
  const title =
      TITLE[Math.round(Math.random() * (TITLE.length - 1))] + ' ';
      
  
  const lastupdate =
      LASTUPDATE[Math.round(Math.random() * (LASTUPDATE.length - 1))] + ' ';

      
  return {
    ticketId: ticketId,
    issueId: issueId,
     createdby: createdby,
     currentStage: currentStage,
      title: title,
      issuetype: issuetype,
      assignedTo: assignedTo,  
      priority: priority,
      status: status,
      rootcause: rootcause,
  creationDate: creationdate,
  lastupdate: lastupdate,
    
  };

}
