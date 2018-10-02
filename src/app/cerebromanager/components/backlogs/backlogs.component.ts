import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';

export interface UserData {
  id: string;
  name: string;
  backlogs: string,
  progress: string;
  color: string;
  features: string;
  sprint: string;
  priority: string;
  // color1: string;
  // id2: string;
  // name2: string;

}


    const COLORS: string[] = ['red', 'green', 'orange', 'gray'];

    const NAMES: string[] = ['Maia', 'Asher', 'Olivia', 'Atticus', 'Amelia', 'Jack',
      'Charlotte', 'Theodore', 'Isla', 'Oliver', 'Isabella', 'Jasper',
       'Cora', 'Levi', 'Violet', 'Arthur', 'Mia', 'Thomas', 'Elizabeth'];
    const PRIORITY: string[] = ['High','Low','Average'];
    const BACKLOGS: string[] = ['sddash Test','Sidenav Test','Api Check','Db check'];
    const FEATURES: string[] = ['Worklog','Deployment','Api Calls','Db integeration','Ui fixes'];
    const SPRINTS: string[] = ['Sprint1','Sprint2','Sprint3','Sprint4','Sprint5'];


@Component({
  selector: 'app-backlogs',
  templateUrl: './backlogs.component.html',
  styleUrls: ['./backlogs.component.css']
})
export class BacklogsComponent implements OnInit {

  displayedColumns: string[] = ['id', 'priority','backlogs','feature','points','assignedto','sprint','status','attachment'];
  dataSource: MatTableDataSource<UserData>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor() { 
     // Create 100 users
     const users = Array.from({length: 100}, (_, k) => createNewUser(k + 1));
     

     // Assign the data to the data source for the table to render
     this.dataSource = new MatTableDataSource(users);
       

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
function createNewUser(id: number): UserData {
  const name =
      NAMES[Math.round(Math.random() * (NAMES.length - 1))] + ' ' +
      NAMES[Math.round(Math.random() * (NAMES.length - 1))].charAt(0) + '.';
  const backlogs =
      BACKLOGS[Math.round(Math.random() * (BACKLOGS.length - 1))] + ' ';
  const features =
      FEATURES[Math.round(Math.random() * (FEATURES.length - 1))] + ' ';
  const sprints =
      SPRINTS[Math.round(Math.random() * (SPRINTS.length - 1))] + ' ';
  const priority =
      PRIORITY[Math.round(Math.random() * (PRIORITY.length - 1))] + ' ';

  return {
    id: id.toString(),
    name: name,
    backlogs: backlogs,
    features: features,
    sprint: sprints,
    priority:priority,
    progress: Math.round(Math.random() * 100).toString(),
    color: COLORS[Math.round(Math.random() * (COLORS.length - 1))]
  };
}