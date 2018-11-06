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

export interface Feature {
  value: string;
  viewValue: string;

}

export interface SubTaskData {
  subtask: string;
  assignedTo: string
  

}

export interface IssueData {
  issueid: string;
  title: string;
  issuetype: string;
  priority: string;
  stage: string;
  detectedby: string;
  assignedto: string;
  status: string;

  

}


const USER: string[] = ['AK807X', 'AC763F'];
        const LOG: string[] = ['sddash Test','Sidenav Test','Api Check','Db check'];
        
        const CREATEDDATE: string[] = ['10/4/2018','12/5/2018','7/9/2018','8/4/2018','23/10/2018'];

        const COMMENTS: string[] = ['comment-1','comment-2','comment-3','comment-4'];
        const ISSUEID: string[] = ['Issue-1','Issue-2','Issue-3','Issue-4'];
        const TITLE: string[] = ['title-1','title-2','title-3','title-4'];
        const ISSUETYPE: string[] = ['Bug','Question'];
        const PRIORITY: string[] = ['P1','P2','P3'];
        const STAGE: string[] = ['SIT',''];
        const DETECTEDBY: string[] = ['AK807X', 'AC763F'];
        const ASSIGNEDTO: string[] = ['AK807X', 'KG636B'];
        const STATUS: string[] = ['New', 'Closed', 'Rejected'];
        const SUBTASK: string[] = ['task 1', 'task 2'];
        

export interface BusinessUnits {
  value: string;
  viewValue: string;

}

export interface TicketType {
  value: string;
  viewValue: string;

}

export interface SubCategory {
  value: string;
  viewValue: string;

}

export interface AssignedTo {
  value: string;
  viewValue: string;

}

export interface Severity {
  value: string;
  viewValue: string;

}

export interface AttachmentData {
  comments: string;
  user: string;
  createdDate: string;
  

}



export class Ticket {
  id: number;
  appName: string;
  description: string;
  // age: number;
  // active: boolean;
}
@Component({
  selector: 'app-user-story-details',
  templateUrl: './user-story-details.component.html',
  styleUrls: ['./user-story-details.component.css']
})

export class UserStoryDetailsComponent implements OnInit {

  displayedColumns: string[] = ['log', 'user' ,'createdDate'];
  dataSource: MatTableDataSource<UserData>;


  displayedColumns1: string[] = ['issueid', 'title','issuetype','priority','stage','detectedby','assignedto','status'];
  dataSource1: MatTableDataSource<IssueData>;

  displayedColumns2: string[] = ['subtask', 'assignedTo' ];
  dataSource2: MatTableDataSource<SubTaskData>;

  displayedColumns3: string[] = ['comments', 'user','createdDate'];
  dataSource3: MatTableDataSource<AttachmentData>;

  selectedValue: string;
  Ticket1: Observable<Ticket[]>;
  appName = new FormControl('', [Validators.required]);

  Ticket: Ticket = new Ticket();
  submitted = false;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  
  Tickets: BusinessUnits[] = [
    {value: '1',viewValue: 'IMWS'},
    {value: '2',viewValue: 'ASG(C&E/PMO/PjM)'}
  ];

  Severities: Severity[] = [
    {value: 'Small',viewValue: 'Small'},
    {value: 'Large',viewValue: 'Large'}
  ];

  assignedTo: AssignedTo[] = [
    {value: 'AK807x-AMOL ',viewValue: 'AK807x-AMOL'},
    {value: 'AC763F-ANGIE',viewValue: 'AC763F-ANGIE'},
    {value: '',viewValue: ''}
  ];


  tickettypes: TicketType[] = [
    {value: 'CR',viewValue: 'CR'},
    {value: 'MR',viewValue: 'MR'},
    {value: 'Data',viewValue: 'Data'},
  ];

  subcategories: SubCategory[] = [
    {value: 'Milestone Date Edit',viewValue:  'Milestone Date Edit'},
    {value: 'CR Cancellation',viewValue: 'CR Cancellation'},
    {value: '',viewValue: ''},
  ];

  email = new FormControl('', [Validators.required, Validators.email]);
  email1 = new FormControl('', [Validators.email]);
  fname = new FormControl('', [Validators.required]);
  description = new FormControl('', [Validators.required]);
  
  getErrordescribe(){
    return this.fname.hasError('required') ? 'Description required' :'';
  }

  getErrorfnameMessage(){
    return this.fname.hasError('required') ? 'You must enter feature name' :'';
  }

  getErrorMessage() {
    return this.email.hasError('required') ? 'You must enter a value' :
        this.email.hasError('email') ? 'Not a valid email' :'';
  }
  getErroraltMessage() {
    return this.email1.hasError('email1') ? 'Not a valid email' :'';
  }

  features: Feature[] = [
    {value: 'steak-0',viewValue: 'Low'},
    {value: 'steak-1',viewValue: 'Medium'},
    {value: 'tacos-2',viewValue: 'High'}
  ];

  constructor(private TicketService: UserService) {

    const log = Array.from({length: 100}, (_, k) => createNewLog(k + 1));
     

     // Assign the data to the data source for the table to render
     this.dataSource = new MatTableDataSource(log);

     const log1 = Array.from({length: 100}, (_, k) => createNewLog1(k + 1));
     

     // Assign the data to the data source for the table to render
     this.dataSource1 = new MatTableDataSource(log1);

     const log3 = Array.from({length: 5}, (_, k) => createSubTask(k + 1));
     this.dataSource2 = new MatTableDataSource(log3);


     const log4 = Array.from({length: 5}, (_, k) => createAttachment(k + 1));
     this.dataSource3 = new MatTableDataSource(log4);
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

function createSubTask(id: number): SubTaskData {
  
  const assignedto =
      ASSIGNEDTO[Math.round(Math.random() * (ASSIGNEDTO.length - 1))] + ' ';
  
  const subtask =
      SUBTASK[Math.round(Math.random() * (SUBTASK.length - 1))] + ' ';

  return {
    subtask: subtask,
    assignedTo: assignedto,   
  };
}


function createAttachment(id: number): AttachmentData {
  
  const comments =
      COMMENTS[Math.round(Math.random() * (COMMENTS.length - 1))] + ' ';
  
  const user =
      USER[Math.round(Math.random() * (USER.length - 1))] + ' ';

      const createdDate =
      CREATEDDATE[Math.round(Math.random() * (CREATEDDATE.length - 1))] + ' ';

  return {
    comments: comments,
    user: user,   
    createdDate : createdDate,
  };
}


function createNewLog1(id: number): IssueData {
  const detectedby =
      DETECTEDBY[Math.round(Math.random() * (DETECTEDBY.length - 1))] + ' ' +
      DETECTEDBY[Math.round(Math.random() * (DETECTEDBY.length - 1))].charAt(0) + '.';
  const issueid =
      ISSUEID[Math.round(Math.random() * (ISSUEID.length - 1))] + ' ';
  
  const title =
      TITLE[Math.round(Math.random() * (TITLE.length - 1))] + ' ';

      const issuetype =
      ISSUETYPE[Math.round(Math.random() * (ISSUETYPE.length - 1))] + ' ';

      const assignedto =
      ASSIGNEDTO[Math.round(Math.random() * (ASSIGNEDTO.length - 1))] + ' ' +
      ASSIGNEDTO[Math.round(Math.random() * (ASSIGNEDTO.length - 1))].charAt(0) + '.';

  const priority =
      PRIORITY[Math.round(Math.random() * (PRIORITY.length - 1))] + ' ';
  
  const stage =
      STAGE[Math.round(Math.random() * (STAGE.length - 1))] + ' ';

      
  const status =
  STATUS[Math.round(Math.random() * (STATUS.length - 1))] + ' ';

  return {
    
    issueid: issueid,
    title: title,    
    issuetype:issuetype,
    priority : priority,
    stage : stage,
    detectedby : detectedby,
    assignedto : assignedto,
    status : status
    
  };
}
