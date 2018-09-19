import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-buttons',
  template: `
  <button mat-button><mat-icon>face</mat-icon>Click me!</button>
  <mat-checkbox><mat-icon>account_box
  </mat-icon>Check me!</mat-checkbox>
  
  `,
  styles: []
})
export class ButtonsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
