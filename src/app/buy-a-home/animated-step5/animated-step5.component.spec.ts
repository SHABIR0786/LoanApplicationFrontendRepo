import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimatedStep5Component } from './animated-step5.component';

describe('AnimatedStep5Component', () => {
  let component: AnimatedStep5Component;
  let fixture: ComponentFixture<AnimatedStep5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnimatedStep5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimatedStep5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
