import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateVendorVPNTicketComponent } from './create-vendor-vpn-ticket.component';

describe('CreateVendorVPNTicketComponent', () => {
  let component: CreateVendorVPNTicketComponent;
  let fixture: ComponentFixture<CreateVendorVPNTicketComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateVendorVPNTicketComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateVendorVPNTicketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
