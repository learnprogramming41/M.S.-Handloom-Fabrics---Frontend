import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PashminaComponent } from './pashmina.component';

describe('PashminaComponent', () => {
  let component: PashminaComponent;
  let fixture: ComponentFixture<PashminaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PashminaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PashminaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
