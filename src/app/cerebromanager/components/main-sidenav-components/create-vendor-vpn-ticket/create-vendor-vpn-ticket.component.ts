import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../services/user.service';
import {FormControl, Validators} from '@angular/forms';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

export interface Vendor {
  value: string;
  viewValue: string;

}



export interface RequestType {
  value: string;
  viewValue: string;

}

export interface Severity {
  value: string;
  viewValue: string;

}

export interface Applications {
  value: string;
  viewValue: string;

}


export class VendorVPNTicket {
  id: number;
  appName: string;
  description: string;
  // age: number;
  // active: boolean;
}
@Component({
  selector: 'app-create-vendor-vpn-ticket',
  templateUrl: './create-vendor-vpn-ticket.component.html',
  styleUrls: ['./create-vendor-vpn-ticket.component.css']
})

export class CreateVendorVPNTicketComponent implements OnInit {
  selectedValue: string = "4";
  vendorvpnTicket1: Observable<VendorVPNTicket[]>;
  appName = new FormControl('', [Validators.required]);

  vendorvpnTicket: VendorVPNTicket = new VendorVPNTicket();
  submitted = false;

  applications: Applications[] = [
    {value: '1',viewValue: 'CEREBRO'},
    {value: '2',viewValue: 'WARP'},
    {value: '3',viewValue: 'KALTURA'},
    {value: '4',viewValue: 'VENDOR VPN'}
  ];

  
  
  vendorvpnTickets: Vendor[] = [
    {value: '1',viewValue: 'Vendor 1'},
    {value: '2',viewValue: 'Vendor 2'}
  ];

  constructor(private router: Router) { }

  ngOnInit() {
    
  }
  newCustomer(): void {
    this.submitted = false;
    this.vendorvpnTicket = new VendorVPNTicket();
  }
  
  
  someMethod(value){
    
    if(value==1)
    {
      
      this.router.navigateByUrl('/create-cerebro-ticket');
    }
    else if(value==2)
    {
      
      this.router.navigateByUrl('/create-warp-ticket');
    }
    else if(value==3)
    {
      
      this.router.navigateByUrl('/create-kaltura-ticket');
    }
    else if(value==4)
    {
      
      this.router.navigateByUrl('/create-vendor-vpn-ticket');
    }
  }
}
