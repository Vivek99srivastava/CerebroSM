import { Component, OnInit,ViewChild } from '@angular/core';
import { UserService } from '../../services/user.service';
import {FormControl, Validators} from '@angular/forms';
import { Observable } from 'rxjs';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';

export interface UserData {
  user: string;
  log: string;
  createdDate: string;
  

}

export interface CommentsData {
  comments: string;
  user: string;
  createdDate: string;
  

}


const USER: string[] = ['AK807X', 'AC763F'];
        const LOG: string[] = ['sddash Test','Sidenav Test','Api Check','Db check'];
        const COMMENTS: string[] = ['sddash Test','Sidenav Test','Api Check','Db check'];
        const CREATEDDATE: string[] = ['10/4/2018','12/5/2018','7/9/2018','8/4/2018','23/10/2018'];


        export interface RootCause {
          value: string;
          viewValue: string;
        
        }

        export interface Status {
          value: string;
          viewValue: string;
        
        }        

export interface Tickets {
  value: string;
  viewValue: string;

}

export interface IssueType {
  value: string;
  viewValue: string;

}

export interface Stage {
  value: string;
  viewValue: string;

}

export interface AssignedTo {
  value: string;
  viewValue: string;

}

export interface Priority {
  value: string;
  viewValue: string;

}


export class Ticket {
  id: number;
  appName: string;
  description: string;
  // age: number;
  // active: boolean;
}
@Component({
  selector: 'app-userstory-issue-details',
  templateUrl: './userstory-issue-details.component.html',
  styleUrls: ['./userstory-issue-details.component.css']
})

export class UserStoryIssueDetailsComponent implements OnInit {

  displayedColumns: string[] = ['user', 'log','createdDate'];
  dataSource: MatTableDataSource<UserData>;


  displayedColumns1: string[] = ['comments', 'user','createdDate'];
  dataSource1: MatTableDataSource<CommentsData>;

  selectedValue: string;
  Ticket1: Observable<Ticket[]>;
  appName = new FormControl('', [Validators.required]);

  Ticket: Ticket = new Ticket();
  submitted = false;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  
  Tickets: Tickets[] = [
    {value: 'WARP',viewValue: 'WARP'}
  ];

  priorities: Priority[] = [
    {value: 'P1',viewValue: 'P1'},
    {value: 'P2',viewValue: 'P2'},
    {value: 'P3',viewValue: 'P3'}
  ];

  assignedTo: AssignedTo[] = [
    {value: 'AK807x-AMOL ',viewValue: 'AK807x-AMOL'},
    {value: 'AC763F-ANGIE',viewValue: 'AC763F-ANGIE'},
    {value: '',viewValue: ''}
  ];


  stages: Stage[] = [
    {value: 'SIT',viewValue: 'SIT'},
    {value: 'UAT',viewValue: 'UAT'}
  ];

  issueTypes: IssueType[] = [
    {value: 'Bug',viewValue: 'Bug'},
    {value: 'Question',viewValue: 'Question'}
  ];

  statuses: Status[] = [
    {value: 'New',viewValue:  'New'},
    {value: 'Open',viewValue: 'Open'},
    {value: 'Closed',viewValue: 'Closed'},
  ];

  rootcauses: RootCause[] = [
    {value: 'Coding',viewValue:  'Coding'},
    {value: 'Data Issue',viewValue: 'Data Issue'},
    {value: 'Design Issue',viewValue: 'Design Issue'},
  ];

  constructor(private TicketService: UserService) {

    const log = Array.from({length: 100}, (_, k) => createNewLog(k + 1));
     

     // Assign the data to the data source for the table to render
     this.dataSource = new MatTableDataSource(log);

     const log1 = Array.from({length: 100}, (_, k) => createNewLog1(k + 1));
     

     // Assign the data to the data source for the table to render
     this.dataSource1 = new MatTableDataSource(log1);

   }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;

    this.dataSource1.paginator = this.paginator;
    this.dataSource1.sort = this.sort;
  }
  newCustomer(): void {
    this.submitted = false;
    this.Ticket = new Ticket();
  }
  
  


}


function createNewLog(id: number): UserData {
  const user =
      USER[Math.round(Math.random() * (USER.length - 1))] + ' ' +
      USER[Math.round(Math.random() * (USER.length - 1))].charAt(0) + '.';
  const log =
      LOG[Math.round(Math.random() * (LOG.length - 1))] + ' ';
  
  const createdDate =
      CREATEDDATE[Math.round(Math.random() * (CREATEDDATE.length - 1))] + ' ';

  return {
    user: user,
    log: log,
    createdDate:createdDate,
    
  };
}


function createNewLog1(id: number): CommentsData {
  const user =
      USER[Math.round(Math.random() * (USER.length - 1))] + ' ' +
      USER[Math.round(Math.random() * (USER.length - 1))].charAt(0) + '.';
  const comments =
      COMMENTS[Math.round(Math.random() * (COMMENTS.length - 1))] + ' ';
  
  const createdDate =
      CREATEDDATE[Math.round(Math.random() * (CREATEDDATE.length - 1))] + ' ';

  return {
    
    comments: comments,
    user: user,    
    createdDate:createdDate,
    
  };
}
