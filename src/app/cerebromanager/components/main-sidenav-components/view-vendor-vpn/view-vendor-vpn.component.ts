import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';

export interface UserData {
  ticketId: string;
  title: string,
  vendorName: string;
  vendorSponsor: string;
  programApprover: string;
  requestType: string;
  needbydate: string;
  assignedTo: string;
  currentStage: string;
  severity: string;
  creationDate: string;
  lastupdate: string;
  
}

    const TICEKTID: string[] = ['VendorVPN-1', 'VendorVPN-2'];
    const TITLE: string[] = ['title 1','title 2','title 3'];
    const VENDORNAME: string[] = ['Complete wireless','AMDOCS INC'];
    const VENDORSPONSOR: string[] = ['Julie','Amol',''];
    const PROGRAMAPPROVER: string[] = ['David',''];
    const REQUESTTYPE: string[] = ['Troubleshooting','Create new tunnels'];
    const NEEDBYDATE: string[] =['10/4/2018','12/5/2018','7/9/2018','8/4/2018','23/10/2018'];
    const ASSIGNEDTO: string[] = ['AK807X'];
    const CURRENTSTAGE: string[] = ['Email Confirmation / Closed','Open','Triage & BU Categorization'];
    const SEVERITY: string[] = ['1','2','3'];
    const CREATIONDATE: string[] = ['10/4/2018','12/5/2018','7/9/2018','8/4/2018','23/10/2018'];
    const LASTUPDATE: string[] = ['10/4/2018','12/5/2018','7/9/2018','8/4/2018','23/10/2018'];
    


@Component({
  selector: 'app-view-vendor-vpn',
  templateUrl: './view-vendor-vpn.component.html',
  styleUrls: ['./view-vendor-vpn.component.css']
})
export class ViewVendorVpnComponent implements OnInit {

        

  displayedColumns: string[] = ['ticketId', 'title','vendorName','vendorSponsor','programApprover','requestType','severity','needbydate','assignedTo','currentStage','creationDate','lastupdate','assign'];
  dataSource1: MatTableDataSource<UserData>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor() { 
     // Create 100 users
     const log = Array.from({length: 100}, (_, k) => createNewLog(k + 1));
     

     // Assign the data to the data source for the table to render
     this.dataSource1 = new MatTableDataSource(log);
       

  }

  ngOnInit() {
    this.dataSource1.paginator = this.paginator;
    this.dataSource1.sort = this.sort;
  }

  applyFilter(filterValue: string) {
    this.dataSource1.filter = filterValue.trim().toLowerCase();

    if (this.dataSource1.paginator) {
      this.dataSource1.paginator.firstPage();
    }
  }
  applyFilter1(filterValue: string) {
    this.dataSource1.filter = filterValue.trim().toLowerCase();

    if (this.dataSource1.paginator) {
      this.dataSource1.paginator.firstPage();
    }
  }
}


/** Builds and returns a new User. */
function createNewLog(id: number): UserData {
  const creationdate =
      CREATIONDATE[Math.round(Math.random() * (CREATIONDATE.length - 1))] + ' ' +
      CREATIONDATE[Math.round(Math.random() * (CREATIONDATE.length - 1))].charAt(0) + '.';

      const ticketId =
      TICEKTID[Math.round(Math.random() * (TICEKTID.length - 1))] + ' ';

  
      const assignedTo =
      ASSIGNEDTO[Math.round(Math.random() * (ASSIGNEDTO.length - 1))] + ' ';

      const severity =
      SEVERITY[Math.round(Math.random() * (SEVERITY.length - 1))] + ' ';

      const currentStage =
      CURRENTSTAGE[Math.round(Math.random() * (CURRENTSTAGE.length - 1))] + ' ';

      const vendorName =
      VENDORNAME[Math.round(Math.random() * (VENDORNAME.length - 1))] + ' ';

      const vendorSponsor =
      VENDORSPONSOR[Math.round(Math.random() * (VENDORSPONSOR.length - 1))] + ' ';

      const programApprover =
      PROGRAMAPPROVER[Math.round(Math.random() * (PROGRAMAPPROVER.length - 1))] + ' ';

      const requestType =
      REQUESTTYPE[Math.round(Math.random() * (REQUESTTYPE.length - 1))] + ' ';

      const needbydate =
      NEEDBYDATE[Math.round(Math.random() * (NEEDBYDATE.length - 1))] + ' ';
  
  const title =
      TITLE[Math.round(Math.random() * (TITLE.length - 1))] + ' ';
      
  
  const lastupdate =
      LASTUPDATE[Math.round(Math.random() * (LASTUPDATE.length - 1))] + ' ';

  
      
  return {
    ticketId: ticketId,
       title: title,
  vendorName: vendorName,
  vendorSponsor: vendorSponsor,
  programApprover: programApprover,
  requestType: requestType,
  needbydate: needbydate,
  assignedTo: assignedTo,
  currentStage: currentStage,
  severity: severity,
  creationDate: creationdate,
  lastupdate: lastupdate,
  
    
  };

}
