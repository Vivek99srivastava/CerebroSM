import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewManageReleaseComponent } from './view-manage-release.component';

describe('ViewManageReleaseComponent', () => {
  let component: ViewManageReleaseComponent;
  let fixture: ComponentFixture<ViewManageReleaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewManageReleaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewManageReleaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
