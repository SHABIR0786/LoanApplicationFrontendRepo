import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimatedStep4Component } from './animated-step4.component';

describe('AnimatedStep4Component', () => {
  let component: AnimatedStep4Component;
  let fixture: ComponentFixture<AnimatedStep4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnimatedStep4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimatedStep4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
