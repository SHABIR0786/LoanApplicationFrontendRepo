import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimatedStep2Component } from './animated-step2.component';

describe('AnimatedStep2Component', () => {
  let component: AnimatedStep2Component;
  let fixture: ComponentFixture<AnimatedStep2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnimatedStep2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimatedStep2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
