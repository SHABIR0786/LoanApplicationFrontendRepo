import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimatedStep1Component } from './animated-step1.component';

describe('AnimatedStep1Component', () => {
  let component: AnimatedStep1Component;
  let fixture: ComponentFixture<AnimatedStep1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnimatedStep1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimatedStep1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
