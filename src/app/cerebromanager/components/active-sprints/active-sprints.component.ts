import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-active-sprints',
  templateUrl: './active-sprints.component.html',
  styleUrls: ['./active-sprints.component.css']
})
export class ActiveSprintsComponent implements OnInit {

  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;


  kanban = [
    {
      header: 'To do',
      count: 3,
      data: [
        {
          id: 'US-1',
          title: 'SEBI_BFSI',
          status: 'To Do',
          totalSubTask: 2,
          completedSubTask: 0,
          startDate: 1509036656468,
          date: 1509036656468,
          endDate: 1509036656468,
          minimumCodeQuality: 8,
          requiredCodeQuality: 10,
          prototype: 'D+4',
          du: 'D+21',
          costUpside: 10
        },
        {
          id: 'US-2',
          title: 'VIL_SUMERU',
          status: 'Backlog',
          totalSubTask: 6,
          completedSubTask: 0,
          date: 1509036656468,
          endDate: 1509967755896,
          minimumCodeQuality: 9,
          requiredCodeQuality: 10,
          prototype: 'D+3',
          du: 'D+22',
          costUpside: 9
        },
        {
          id: 'US-3',
          title: 'SBICRM_BFSI',
          status: 'Backlog',
          totalSubTask: 3,
          completedSubTask: 0,
          date: 1509036656468,
          endDate: 1509967755896,
          minimumCodeQuality: 6,
          requiredCodeQuality: 10,
          prototype: 'D+5',
          du: 'D+25',
          costUpside: 14
        }
    
      ]
    },
    {
      header: 'Work in progress',
      count: 3,
      data: [
        {
          id: 'US-4',
          title: 'NEW_AGE_DELIVERY',
          status: 'WIP',
          totalSubTask: 5,
          completedSubTask: 1,
          date: 1509036656468,
          endDate: 1509967755896,
          minimumCodeQuality: 6,
          requiredCodeQuality: 10,
          prototype: 'D+5',
          du: 'D+25',
          costUpside: 14
        },
        {
          id: 'US-5',
          title: 'BLUE_MARBLE',
          status: 'WIP',
          totalSubTask: 6,
          completedSubTask: 1,
          date: 1509036656468,
          endDate: 1509967755896,
          minimumCodeQuality: 6,
          requiredCodeQuality: 10,
          prototype: 'D+5',
          du: 'D+25',
          costUpside: 14
        },
        {
          id: 'US-6',
          title: 'BENELUX',
          status: 'WIP',
          totalSubTask: 3,
          completedSubTask: 2,
          date: 1509036656468,
          endDate: 1509967755896,
          minimumCodeQuality: 6,
          requiredCodeQuality: 10,
          prototype: 'D+5',
          du: 'D+25',
          costUpside: 14
        },
        {
          id: 'US-7',
          title: 'BENELUX',
          status: 'WIP',
          totalSubTask: 3,
          completedSubTask: 2,
          date: 1509036656468,
          endDate: 1509967755896,
          minimumCodeQuality: 6,
          requiredCodeQuality: 10,
          prototype: 'D+5',
          du: 'D+25',
          costUpside: 14
        }
      ]
    },
    {
      header: 'Done',
      count: 2,
      data: [
        {
          id: 'US-8',
          title: 'AIRCOM',
          status: 'Done',
          totalSubTask: 5,
          completedSubTask: 5,
          date: 1509036656468,
          endDate: 1509967755896,
          minimumCodeQuality: 6,
          requiredCodeQuality: 10,
          prototype: 'D+5',
          du: 'D+25',
          costUpside: 14
        },
        {
          id: 'US-9',
          title: 'BOMBARDIER',
          status: 'Done',
          totalSubTask: 6,
          completedSubTask: 6,
          date: 1509036656468,
          endDate: 1509967755896,
          minimumCodeQuality: 6,
          requiredCodeQuality: 10,
          prototype: 'D+5',
          du: 'D+25',
          costUpside: 14
        }
      ]
    }
  ];





  constructor(private _formBuilder: FormBuilder) {}

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
  }
}
