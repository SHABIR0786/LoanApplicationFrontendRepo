import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimatedStep10Component } from './animated-step10.component';

describe('AnimatedStep10Component', () => {
  let component: AnimatedStep10Component;
  let fixture: ComponentFixture<AnimatedStep10Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnimatedStep10Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimatedStep10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
