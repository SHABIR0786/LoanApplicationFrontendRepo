import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimatedStep17Component } from './animated-step17.component';

describe('AnimatedStep17Component', () => {
  let component: AnimatedStep17Component;
  let fixture: ComponentFixture<AnimatedStep17Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnimatedStep17Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimatedStep17Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
