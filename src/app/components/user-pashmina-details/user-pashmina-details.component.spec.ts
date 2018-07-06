import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserPashminaDetailsComponent } from './user-pashmina-details.component';

describe('UserPashminaDetailsComponent', () => {
  let component: UserPashminaDetailsComponent;
  let fixture: ComponentFixture<UserPashminaDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserPashminaDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserPashminaDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
