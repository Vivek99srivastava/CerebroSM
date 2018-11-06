import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../services/user.service';
import {FormControl, Validators} from '@angular/forms';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

export interface BusinessUnits {
  value: string;
  viewValue: string;

}
export class KalturaTicket {
  id: number;
  appName: string;
  description: string;
  // age: number;
  // active: boolean;
}

export interface Applications {
  value: string;
  viewValue: string;

}


@Component({
  selector: 'app-create-kaltura-ticket',
  templateUrl: './create-kaltura-ticket.component.html',
  styleUrls: ['./create-kaltura-ticket.component.css']
})

export class CreateKalturaTicketComponent implements OnInit {
  selectedValue: string = "3";
  kalturaTicket1: Observable<KalturaTicket[]>;
  appName = new FormControl('', [Validators.required]);

  kalturaTicket: KalturaTicket = new KalturaTicket();
  submitted = false;
  
  applications: Applications[] = [
    {value: '1',viewValue: 'CEREBRO'},
    {value: '2',viewValue: 'WARP'},
    {value: '3',viewValue: 'KALTURA'},
    {value: '4',viewValue: 'VENDOR VPN'}
  ];


  constructor(private router: Router) { }

  ngOnInit() {
    
  }
  newCustomer(): void {
    this.submitted = false;
    this.kalturaTicket = new KalturaTicket();
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
