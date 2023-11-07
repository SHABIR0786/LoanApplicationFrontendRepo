import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimatedStep16Component } from './animated-step16.component';

describe('AnimatedStep16Component', () => {
  let component: AnimatedStep16Component;
  let fixture: ComponentFixture<AnimatedStep16Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnimatedStep16Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimatedStep16Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
