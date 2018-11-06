import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateCerebroTicketsComponent } from './create-cerebro-tickets.component';

describe('CreateCerebroTicketsComponent', () => {
  let component: CreateCerebroTicketsComponent;
  let fixture: ComponentFixture<CreateCerebroTicketsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateCerebroTicketsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateCerebroTicketsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
