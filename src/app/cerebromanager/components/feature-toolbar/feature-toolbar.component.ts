import { Component,  Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

export interface CreateFeatureData {
  featureName: string;
  application: string;
  discription: string;
  attachment: string;
}
export interface Feature {
  value: string;
  viewValue: string;

}
@Component({
  selector: 'app-feature-toolbar',
  templateUrl: './feature-toolbar.component.html',
  styleUrls: ['./feature-toolbar.component.css']
})

export class FeatureToolbarComponent {
  featureName: string;
  application: string;
  discription: string;
  attachment: string;

  constructor(public dialog: MatDialog) { }
    openDialog(): void {
      const dialogRef = this.dialog.open  (DialogOverviewExampleDialog, {
       width: '1000px',
       height:'500px',
       data: {featurename: this.featureName, application: this.application}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.featureName = result;
      this.application= result;
    });
  }

  

}

@Component({
  selector: 'dialog-overview-example-dialog',
  templateUrl: 'create-feature-dialogbox.html',
  styleUrls: ['./feature-toolbar.component.css']
})
export class DialogOverviewExampleDialog {

    selectedValue: string;

    features: Feature[] = [
      {value: 'steak-0',viewValue: 'Cerebros'},
      {value: 'steak-1',viewValue: 'Warp'},
      {value: 'tacos-2',viewValue: 'Steak'}
    ];


 constructor(
    public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
    @Inject(MAT_DIALOG_DATA) public data: CreateFeatureData) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

}




//https://www.techiediaries.com/angular-material-dialogs/
//https://www.techiediaries.com/topics/angular/
//https://www.techiediaries.com/github-electron/angular2-and-electron-starters-and-boilerplates/



