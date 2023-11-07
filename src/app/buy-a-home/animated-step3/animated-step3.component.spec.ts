import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimatedStep3Component } from './animated-step3.component';

describe('AnimatedStep3Component', () => {
  let component: AnimatedStep3Component;
  let fixture: ComponentFixture<AnimatedStep3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnimatedStep3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimatedStep3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
