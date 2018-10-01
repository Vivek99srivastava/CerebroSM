import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompletedSprintsComponent } from './completed-sprints.component';

describe('CompletedSprintsComponent', () => {
  let component: CompletedSprintsComponent;
  let fixture: ComponentFixture<CompletedSprintsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompletedSprintsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompletedSprintsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
