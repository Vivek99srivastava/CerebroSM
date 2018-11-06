import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewVendorVpnComponent } from './view-vendor-vpn.component';

describe('ViewVendorVpnComponent', () => {
  let component: ViewVendorVpnComponent;
  let fixture: ComponentFixture<ViewVendorVpnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewVendorVpnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewVendorVpnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
