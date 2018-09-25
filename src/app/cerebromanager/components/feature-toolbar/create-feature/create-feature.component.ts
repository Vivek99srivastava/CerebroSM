import { Component, OnInit } from '@angular/core';

export interface Feature {
  value: string;
  viewValue: string;

}
@Component({
  selector: 'app-create-feature',
  templateUrl: './create-feature.component.html',
  styleUrls: ['./create-feature.component.css']
})

export class CreateFeatureComponent implements OnInit {
  selectedValue: string;


  features: Feature[] = [
    {value: 'steak-0',viewValue: 'Cerebros'},
    {value: 'steak-1',viewValue: 'Warp'},
    {value: 'tacos-2',viewValue: 'Steak'}
  ];
  constructor() { }

  ngOnInit() {
  }

}
