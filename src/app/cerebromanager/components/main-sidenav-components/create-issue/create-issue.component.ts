import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../services/user.service';
import {FormControl, Validators} from '@angular/forms';
import { Observable } from 'rxjs';
import { AssignedTo } from '../ticket-details/ticket-details.component';

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

export interface Priority  {
  value: string;
  viewValue: string;

}

export interface AssignTo  {
  value: string;
  viewValue: string;

}

export class Issue {
  id: number;
  appName: string;
  description: string;
  // age: number;
  // active: boolean;
}


@Component({
  selector: 'app-create-issue',
  templateUrl: './create-issue.component.html',
  styleUrls: ['./create-issue.component.css']
})

export class CreateIssueComponent implements OnInit {
  selectedValue: string;
  issue1: Observable<Issue[]>;
  appName = new FormControl('', [Validators.required]);

  issue: Issue = new Issue();
  
  tickets: Tickets[] = [
    {value: 'CEREBRO',viewValue: 'CEREBRO'},
    {value: 'WARP',viewValue: 'WARP'},
    {value: 'KALTURA',viewValue: 'KALTURA'},
  ];

  issueTypes: IssueType[] = [
    {value: '',viewValue: ''},
    {value: 'Bug',viewValue: 'Bug'},
    {value: 'Question',viewValue: 'Question'},
    {value: 'Enhancement',viewValue: 'Enhancement'},
    {value: 'Observation',viewValue: 'Observation'},
  ];

  stages: Stage[] = [
    {value: '',viewValue: ''},
    {value: 'SIT',viewValue: 'SIT'},
    {value: 'UAT',viewValue: 'UAT'},
  ];

  priorities: Priority[] = [
    {value: '',viewValue: ''},
    {value: 'P1',viewValue: 'P1'},
    {value: 'P2',viewValue: 'P2'},
    {value: 'P3',viewValue: 'P3'},
  ];

  assignedTo: AssignedTo[] = [
    {value: '',viewValue: ''},
    {value: 'AK807X',viewValue: 'AK807X'},
    {value: 'AC763F',viewValue: 'AC763F'},
    
  ];

  constructor(private issueService: UserService) { }

  ngOnInit() {
    
  }
  
  
  


}
