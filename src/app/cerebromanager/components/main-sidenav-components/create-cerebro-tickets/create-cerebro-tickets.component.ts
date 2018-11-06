import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../services/user.service';
import {FormControl, Validators} from '@angular/forms';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

export interface Applications {
  value: string;
  viewValue: string;

}

export interface BusinessUnits {
  value: string;
  viewValue: string;

}

export class CerebroTicket {
  id: number;
  appName: string;
  description: string;
  requestor: string;
  email: string;
  title: string;
  
}

@Component({
  selector: 'app-create-cerebro-tickets',
  templateUrl: './create-cerebro-tickets.component.html',
  styleUrls: ['./create-cerebro-tickets.component.css']
})
export class CreateCerebroTicketsComponent implements OnInit {
  selectedValue: string = "1";
  cerebroTicket1: Observable<CerebroTicket[]>;
  appName = new FormControl('', [Validators.required]);
  requestor = new FormControl('', [Validators.required]);
  email = new FormControl('', [Validators.required]);
  title = new FormControl('', [Validators.required]);
  description = new FormControl('', [Validators.required]);

  cerebroTicket: CerebroTicket = new CerebroTicket();
  
    
  cerebroTickets: BusinessUnits[] = [
    {value: '1',viewValue: 'IMWS'},
    {value: '2',viewValue: 'ASG(C&E/PMO/PjM)'}
  ];

  applications: Applications[] = [
    {value: '1',viewValue: 'CEREBRO'},
    {value: '2',viewValue: 'WARP'},
    {value: '3',viewValue: 'KALTURA'},
    {value: '4',viewValue: 'VENDOR VPN'}
  ];

  constructor(private router: Router, private featureService: UserService) { }

  ngOnInit() {
    
    
  }
  newCustomer(): void {
    
    this.cerebroTicket = new CerebroTicket();
  }
  
  

  
  getErrorRequestorMessage(){
    return this.requestor.hasError('required') ? 'You must enter requestor' :'';
  }

  getErrorEmailMessage(){
    return this.email.hasError('required') ? 'You must enter email' :'';
  }

  getErrorTitleMessage(){
    return this.title.hasError('required') ? 'You must enter title' :'';
  }

  getErrorDescriptionMessage(){
    return this.description.hasError('required') ? 'You must enter description' :'';
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
