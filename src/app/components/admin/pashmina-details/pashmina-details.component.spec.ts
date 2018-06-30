import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PashminaDetailsComponent } from './pashmina-details.component';

describe('PashminaDetailsComponent', () => {
  let component: PashminaDetailsComponent;
  let fixture: ComponentFixture<PashminaDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PashminaDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PashminaDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
