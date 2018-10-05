import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../services/user.service';
import {FormControl, Validators} from '@angular/forms';
import { Observable } from 'rxjs';

export interface Features {
  value: string;
  viewValue: string;

}
export class Feature {
  id: number;
  fname: string;
  description: string;
  // age: number;
  // active: boolean;
}
@Component({
  selector: 'app-create-feature',
  templateUrl: './create-feature.component.html',
  styleUrls: ['./create-feature.component.css']
})

export class CreateFeatureComponent implements OnInit {
  selectedValue: string;
  features1: Observable<Feature[]>;
  fname = new FormControl('', [Validators.required]);

  feature: Feature = new Feature();
  submitted = false;


  getErrorfnameMessage(){
    return this.fname.hasError('required') ? 'You must enter Feature name' :'';
  }



  features: Features[] = [
    {value: 'steak-0',viewValue: 'Cerebros'},
    {value: 'steak-1',viewValue: 'Warp'},
    {value: 'tacos-2',viewValue: 'Steak'}
  ];
  constructor(private featureService: UserService) { }

  ngOnInit() {
    this.reloadData();
  }
  newCustomer(): void {
    this.submitted = false;
    this.feature = new Feature();
  }
  
  save() {
    this.featureService.createFeature(this.feature)
      .subscribe(data => console.log(data), error => console.log(error));
    this.feature = new Feature();
  }

  onSubmit() {
    this.submitted = true;
    this.save();
  }

  reloadData() {
    this.features1 = this.featureService.getApplicationList();
  }

}
