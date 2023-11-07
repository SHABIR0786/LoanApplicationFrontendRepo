import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimatedStep18Component } from './animated-step18.component';

describe('AnimatedStep18Component', () => {
  let component: AnimatedStep18Component;
  let fixture: ComponentFixture<AnimatedStep18Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnimatedStep18Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimatedStep18Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
