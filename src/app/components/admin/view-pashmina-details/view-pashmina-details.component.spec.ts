import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewPashminaDetailsComponent } from './view-pashmina-details.component';

describe('ViewPashminaDetailsComponent', () => {
  let component: ViewPashminaDetailsComponent;
  let fixture: ComponentFixture<ViewPashminaDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewPashminaDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewPashminaDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
