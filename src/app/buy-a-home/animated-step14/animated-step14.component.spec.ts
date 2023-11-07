import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimatedStep14Component } from './animated-step14.component';

describe('AnimatedStep14Component', () => {
  let component: AnimatedStep14Component;
  let fixture: ComponentFixture<AnimatedStep14Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnimatedStep14Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimatedStep14Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
