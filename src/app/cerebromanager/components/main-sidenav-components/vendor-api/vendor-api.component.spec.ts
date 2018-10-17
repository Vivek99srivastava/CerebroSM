import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VendorApiComponent } from './vendor-api.component';

describe('VendorApiComponent', () => {
  let component: VendorApiComponent;
  let fixture: ComponentFixture<VendorApiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VendorApiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VendorApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
