import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimatedStep6Component } from './animated-step6.component';

describe('AnimatedStep6Component', () => {
  let component: AnimatedStep6Component;
  let fixture: ComponentFixture<AnimatedStep6Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnimatedStep6Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimatedStep6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
