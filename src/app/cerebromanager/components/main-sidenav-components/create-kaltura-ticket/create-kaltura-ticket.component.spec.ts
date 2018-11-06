import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateKalturaTicketComponent } from './create-kaltura-ticket.component';

describe('CreateKalturaTicketComponent', () => {
  let component: CreateKalturaTicketComponent;
  let fixture: ComponentFixture<CreateKalturaTicketComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateKalturaTicketComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateKalturaTicketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
