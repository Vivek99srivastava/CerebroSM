import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';

export interface UserData {
  userstoryid: string;
  issueid: string
  sprint: string;
  title: string,
  detectedBy: string;
  type: string;
  priority: string;
  assignedTo: string;
  status: string;
  rootCause: string,
  lastUpdated: string,

  // color1: string;
  // id2: string;
  // name2: string;

}


const USERSTORYID: string[] = ['US-1','US-2','US-3','US-4'];
const ISSUEID: string[] = ['Issue-1','Issue-2','Issue-3','Issue-4'];
const SPRINTS: string[] = ['Sprint1','Sprint2','Sprint3','Sprint4','Sprint5'];
const TITLE: string[] = ['test','bug23','testfail','deploy'];

const DETECTEDBY: string[] = ['Maia', 'Asher', 'Olivia', 'Atticus', 'Amelia', 'Jack',
      'Charlotte', 'Theodore', 'Isla', 'Oliver', 'Isabella', 'Jasper',
       'Cora', 'Levi', 'Violet', 'Arthur', 'Mia', 'Thomas', 'Elizabeth'];

const TYPE: string[] = ['Bug','Enhance','Deployment','Terminate'];
const PRIORITY: string[] = ['High','Low','Average'];
const ASSIGNED: string[] = ['Maia', 'Asher', 'Olivia', 'Atticus'];
const STATUS: string[] = ['Start','closed','progress'];
const ROOTCAUSE: string[] = ['sddash Test','Sidenav Test','Api Check','Db check'];
const LASTUPDATED: string[] = ['12/4/2018','3/6/2018','3/7/2018','5/7/2018'];
    
    

@Component({
  selector: 'app-issues',
  templateUrl: './issues.component.html',
  styleUrls: ['./issues.component.css']
})
export class IssuesComponent implements OnInit {

  
  displayedColumns: string[] = ['userstoryid','issueid', 'sprint', 'title', 'detectedBy', 'type','priority','assignedTo', 'status','rootCause','lastUpdated'];
  dataSource: MatTableDataSource<UserData>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor() { 
     // Create 100 users
     const users = Array.from({length: 100}, (_, k) => createNewUser(k + 1));
     

     // Assign the data to the data source for the table to render
     this.dataSource = new MatTableDataSource(users);
       

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
function createNewUser(id: number): UserData {
  const userstoryid =
      USERSTORYID[Math.round(Math.random() * (USERSTORYID.length - 1))] + ' ';
  const issue =
      ISSUEID[Math.round(Math.random() * (ISSUEID.length - 1))] + ' ';
  const sprints =
      SPRINTS[Math.round(Math.random() * (SPRINTS.length - 1))] + ' ';
  const title =
      TITLE[Math.round(Math.random() * (TITLE.length - 1))] + ' ';
  const type =
      TYPE[Math.round(Math.random() * (TYPE.length - 1))] + ' ';
  const priority =
      PRIORITY[Math.round(Math.random() * (PRIORITY.length - 1))] + ' ';
  const detectedBy = DETECTEDBY[Math.round(Math.random() * (DETECTEDBY.length - 1))] + ' ' +
      DETECTEDBY[Math.round(Math.random() * (DETECTEDBY.length - 1))].charAt(0) + '.';
  const assigned = ASSIGNED[Math.round(Math.random() * (ASSIGNED.length - 1))] + ' ' +
      ASSIGNED[Math.round(Math.random() * (ASSIGNED.length - 1))].charAt(0) + '.';
  const status =
      STATUS[Math.round(Math.random() * (STATUS.length - 1))] + ' ';
  const rootCause =
      ROOTCAUSE[Math.round(Math.random() * (ROOTCAUSE.length - 1))] + ' ';
  const lastUpdated =
      LASTUPDATED[Math.round(Math.random() * (LASTUPDATED.length - 1))] + ' ';

  


  return {
    userstoryid: userstoryid,
    issueid: issue,
    sprint: sprints,
    title: title,
    detectedBy:detectedBy,
    type: type,
    priority:priority,
    assignedTo:assigned,
    status:status,
    rootCause:rootCause,
    lastUpdated:lastUpdated
   
  };

}
