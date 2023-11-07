import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimatedStep19Component } from './animated-step19.component';

describe('AnimatedStep19Component', () => {
  let component: AnimatedStep19Component;
  let fixture: ComponentFixture<AnimatedStep19Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnimatedStep19Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimatedStep19Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
