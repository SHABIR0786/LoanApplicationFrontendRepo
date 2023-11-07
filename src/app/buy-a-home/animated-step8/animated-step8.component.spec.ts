import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimatedStep8Component } from './animated-step8.component';

describe('AnimatedStep8Component', () => {
  let component: AnimatedStep8Component;
  let fixture: ComponentFixture<AnimatedStep8Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnimatedStep8Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimatedStep8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
