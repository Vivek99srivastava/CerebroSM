import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewManageIssuesComponent } from './view-manage-issues.component';

describe('ViewManageIssuesComponent', () => {
  let component: ViewManageIssuesComponent;
  let fixture: ComponentFixture<ViewManageIssuesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewManageIssuesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewManageIssuesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
