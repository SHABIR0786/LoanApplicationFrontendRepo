import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimatedStep13Component } from './animated-step13.component';

describe('AnimatedStep13Component', () => {
  let component: AnimatedStep13Component;
  let fixture: ComponentFixture<AnimatedStep13Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnimatedStep13Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimatedStep13Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
