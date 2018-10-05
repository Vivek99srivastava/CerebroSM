import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';

export interface UserData {
  id: string;
  log: string;
  logtype: string,
  application: string;
  createdBy: string;
  createdDate: string;
  // color1: string;
  // id2: string;
  // name2: string;

}



    const CREATEDBY: string[] = ['Maia', 'Asher', 'Olivia', 'Atticus', 'Amelia', 'Jack',
      'Charlotte', 'Theodore', 'Isla', 'Oliver', 'Isabella', 'Jasper',
       'Cora', 'Levi', 'Violet', 'Arthur', 'Mia', 'Thomas', 'Elizabeth'];
    const LOGTYPE: string[] = ['ISSUE','SPRINT','USER STORY'];
    const LOG: string[] = ['sddash Test','Sidenav Test','Api Check','Db check'];
    const APPLICATION: string[] = ['WARP','CEREBRO'];
    const CREATEDDATE: string[] = ['10/4/2018','12/5/2018','7/9/2018','8/4/2018','23/10/2018'];



@Component({
  selector: 'app-log-history',
  templateUrl: './log-history.component.html',
  styleUrls: ['./log-history.component.css']
})
export class LogHistoryComponent implements OnInit {

  displayedColumns: string[] = ['id', 'log','logtype','application','createdBy','createdDate'];
  dataSource: MatTableDataSource<UserData>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor() { 
     // Create 100 users
     const log = Array.from({length: 100}, (_, k) => createNewLog(k + 1));
     

     // Assign the data to the data source for the table to render
     this.dataSource = new MatTableDataSource(log);
       

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
function createNewLog(id: number): UserData {
  const createdBy =
      CREATEDBY[Math.round(Math.random() * (CREATEDBY.length - 1))] + ' ' +
      CREATEDBY[Math.round(Math.random() * (CREATEDBY.length - 1))].charAt(0) + '.';
  const log =
      LOG[Math.round(Math.random() * (LOG.length - 1))] + ' ';
  const logtype =
      LOGTYPE[Math.round(Math.random() * (LOGTYPE.length - 1))] + ' ';
  const application =
      APPLICATION[Math.round(Math.random() * (APPLICATION.length - 1))] + ' ';
  const createdDate =
      CREATEDDATE[Math.round(Math.random() * (CREATEDDATE.length - 1))] + ' ';

  return {
    id: id.toString(),
    log: log,
    logtype: logtype,
    application: application,
    createdBy: createdBy,
    createdDate:createdDate,
    
  };

}
