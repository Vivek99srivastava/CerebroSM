import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../services/user.service';
import {FormControl, Validators} from '@angular/forms';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

export interface Market {
  value: string;
  viewValue: string;

}

export interface Applications {
  value: string;
  viewValue: string;

}

export class WarpTicket {
  id: number;
  appName: string;
  description: string;
  // age: number;
  // active: boolean;
}
@Component({
  selector: 'app-create-warp-ticket',
  templateUrl: './create-warp-ticket.component.html',
  styleUrls: ['./create-warp-ticket.component.css']
})

export class CreateWarpTicketComponent implements OnInit {
  selectedValue: string = "2";
  warpTicket1: Observable<WarpTicket[]>;
  appName = new FormControl('', [Validators.required]);

  warpTicket: WarpTicket = new WarpTicket();
  submitted = false;

  applications: Applications[] = [
    {value: '1',viewValue: 'CEREBRO'},
    {value: '2',viewValue: 'WARP'},
    {value: '3',viewValue: 'KALTURA'},
    {value: '4',viewValue: 'VENDOR VPN'}
  ];

  
  warpTickets: Market[] = [
    {value: '1',viewValue: 'IMWS'},
    {value: '2',viewValue: 'ASG(C&E/PMO/PjM)'}
  ];

  constructor(private router: Router) { }

  ngOnInit() {
    
  }
  newCustomer(): void {
    this.submitted = false;
    this.warpTicket = new WarpTicket();
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
