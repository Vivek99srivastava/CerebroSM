import { Component, OnInit, ViewChild } from '@angular/core';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';

export interface UserData {
  fid: string;
  features: string;
  requestor: string,
  description: string;
  modified: string;
  last_update: string;
 
  // color1: string;
  // id2: string;
  // name2: string;

}


const FEATURES: string[] = ['Worklog','Deployment','Api Calls','Db integeration','Ui fixes'];
const REQUESTORS: string[] = ['Maia', 'Asher', 'Olivia', 'Atticus', 'Amelia', 'Jack',
  'Charlotte', 'Theodore', 'Isla', 'Oliver', 'Isabella', 'Jasper',
   'Cora', 'Levi', 'Violet', 'Arthur', 'Mia', 'Thomas', 'Elizabeth'];
const DESCRIPTION: string[] = ['sddash Test','Sidenav Test','Api Check','Db check'];
const LASTUPDATED: string[] = ['12/4/2018','3/6/2018','3/7/2018','5/7/2018'];
const MODIFIED: string[] = ['Rsla', 'Tiver', 'Iabella', 'Kasper'];
const FID: string[] = ['Feature-1', 'Feature-2', 'Feature-3', 'Feature-4'];


@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.css']
})
export class FeaturesComponent implements OnInit {

  displayedColumns: string[] = ['fid', 'fname','requestor','description','modified','last_update','remove'];
  dataSource: MatTableDataSource<UserData>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor() { 
     // Create 100 users
     const features = Array.from({length: 100}, (_, k) => createNewFeature());
     

     // Assign the data to the data source for the table to render
     this.dataSource = new MatTableDataSource(features);
       

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
function createNewFeature(): UserData {
  const requestor =
      REQUESTORS[Math.round(Math.random() * (REQUESTORS.length - 1))] + ' ' +
      REQUESTORS[Math.round(Math.random() * (REQUESTORS.length - 1))].charAt(0) + '.';
  const description =
      DESCRIPTION[Math.round(Math.random() * (DESCRIPTION.length - 1))] + ' ';
      const features =
      FEATURES[Math.round(Math.random() * (FEATURES.length - 1))] + ' ';
      const modifiedBy =
      MODIFIED[Math.round(Math.random() * (MODIFIED.length - 1))] + ' ';
      const lastupadted =
      LASTUPDATED[Math.round(Math.random() * (LASTUPDATED.length - 1))] + ' ';
 
      const fid =
      FID[Math.round(Math.random() * (FID.length - 1))] + ' ';

  return {
    fid: fid,
    features: features,
    requestor: requestor,
    description: description,
    modified:modifiedBy,
    last_update:lastupadted
    
  };

}
