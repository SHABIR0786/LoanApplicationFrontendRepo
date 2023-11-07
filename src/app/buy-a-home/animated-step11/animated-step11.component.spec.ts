import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimatedStep11Component } from './animated-step11.component';

describe('AnimatedStep11Component', () => {
  let component: AnimatedStep11Component;
  let fixture: ComponentFixture<AnimatedStep11Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnimatedStep11Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimatedStep11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
