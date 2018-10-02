import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActiveSprintsComponent } from './active-sprints.component';

describe('ActiveSprintsComponent', () => {
  let component: ActiveSprintsComponent;
  let fixture: ComponentFixture<ActiveSprintsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActiveSprintsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActiveSprintsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
