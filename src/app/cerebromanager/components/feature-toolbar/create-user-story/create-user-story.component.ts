import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
export interface Feature {
  value: string;
  viewValue: string;

}
@Component({
  selector: 'app-create-user-story',
  templateUrl: './create-user-story.component.html',
  styleUrls: ['./create-user-story.component.css']
})
export class CreateUserStoryComponent implements OnInit {
  email = new FormControl('', [Validators.required, Validators.email]);
  email1 = new FormControl('', [Validators.email]);
  selectedValue: string;

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
  constructor() { }

  ngOnInit() {
  }

}
