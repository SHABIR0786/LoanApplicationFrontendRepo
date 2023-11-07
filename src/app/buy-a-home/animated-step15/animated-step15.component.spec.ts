import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimatedStep15Component } from './animated-step15.component';

describe('AnimatedStep15Component', () => {
  let component: AnimatedStep15Component;
  let fixture: ComponentFixture<AnimatedStep15Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnimatedStep15Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimatedStep15Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
