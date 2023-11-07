import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimatedStep7Component } from './animated-step7.component';

describe('AnimatedStep7Component', () => {
  let component: AnimatedStep7Component;
  let fixture: ComponentFixture<AnimatedStep7Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnimatedStep7Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimatedStep7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
