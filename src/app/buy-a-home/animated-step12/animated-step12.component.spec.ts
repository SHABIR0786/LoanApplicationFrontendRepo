import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimatedStep12Component } from './animated-step12.component';

describe('AnimatedStep12Component', () => {
  let component: AnimatedStep12Component;
  let fixture: ComponentFixture<AnimatedStep12Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnimatedStep12Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimatedStep12Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
