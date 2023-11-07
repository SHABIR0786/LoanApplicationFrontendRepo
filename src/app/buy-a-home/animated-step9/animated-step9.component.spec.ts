import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimatedStep9Component } from './animated-step9.component';

describe('AnimatedStep9Component', () => {
  let component: AnimatedStep9Component;
  let fixture: ComponentFixture<AnimatedStep9Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnimatedStep9Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimatedStep9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
