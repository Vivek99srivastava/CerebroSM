import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';

export interface UserData {
  id: string;
  rname: string;
  version: string;
  planneddate: string;
  actualdate: string;
  notes:string;
  
  // color1: string;
  // id2: string;
  // name2: string;

}


const VERSION: number[] = [2,6,4,9,1,5,7];
const RNAME: string[] = ['RELEASE ERP','CEREBRO TEST', 'REST API RELEASE','FEATURE WARP'];
const PLANNEDDATE: string[] = ['10/4/2018','12/5/2018','7/9/2018','8/4/2018','23/10/2018'];
const ACTUALDATE: string[] = ['14/4/2018','15/5/2018','17/9/2018','28/4/2018','20/10/2018'];
const NOTES: string[] = ['check reports','debug codes','analysis','testing bugs'];




@Component({
  selector: 'app-releases',
  templateUrl: './releases.component.html',
  styleUrls: ['./releases.component.css']
})
export class ReleasesComponent implements OnInit {

  
  displayedColumns: string[] = ['id', 'rname','version','planneddate','actualdate','notes'];
  dataSource: MatTableDataSource<UserData>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor() { 
     // Create 100 users
     const release = Array.from({length: 100}, (_, k) => createNewRelease(k + 1));
     

     // Assign the data to the data source for the table to render
     this.dataSource = new MatTableDataSource(release);
       

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
    this.dataSource.filter = filterValue.slice();
   
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  
  
}


/** Builds and returns a new User. */
function createNewRelease(id: number): UserData {
  const rname =
      RNAME[Math.round(Math.random() * (RNAME.length - 1))] + ' ' +
      RNAME[Math.round(Math.random() * (RNAME.length - 1))].charAt(0) + '.';
  const version = Math.round(Math.random() * 10).toString();
      
  const planneddate =
      PLANNEDDATE[Math.round(Math.random() * (PLANNEDDATE.length - 1))] + ' ';
      const notes =
      NOTES[Math.round(Math.random() * (NOTES.length - 1))] + ' ';
  const actualdate =
      ACTUALDATE[Math.round(Math.random() * (ACTUALDATE.length - 1))] + ' ';

  return {
    id: id.toString(),
    rname: rname,
    version: version,
    notes: notes,
    planneddate: planneddate,
    actualdate: actualdate,
    
    
  };

}
