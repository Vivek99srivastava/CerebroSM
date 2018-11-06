import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserStoryIssueDetailsComponent } from './userstory-issue-details.component';

describe('IssueDetailsComponent', () => {
  let component: UserStoryIssueDetailsComponent;
  let fixture: ComponentFixture<UserStoryIssueDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserStoryIssueDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserStoryIssueDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
