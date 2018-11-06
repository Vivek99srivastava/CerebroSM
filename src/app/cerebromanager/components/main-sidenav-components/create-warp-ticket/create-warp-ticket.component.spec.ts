import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateWarpTicketComponent } from './create-warp-ticket.component';

describe('CreateWarpTicketComponent', () => {
  let component: CreateWarpTicketComponent;
  let fixture: ComponentFixture<CreateWarpTicketComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateWarpTicketComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateWarpTicketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
