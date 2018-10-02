import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SprintBurndownComponent } from './sprint-burndown.component';

describe('SprintBurndownComponent', () => {
  let component: SprintBurndownComponent;
  let fixture: ComponentFixture<SprintBurndownComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SprintBurndownComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SprintBurndownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
