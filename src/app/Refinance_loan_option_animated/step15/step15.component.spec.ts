import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { Step15Component } from "./step15.component";

describe("Step15Component", () => {
  let component: Step15Component;
  let fixture: ComponentFixture<Step15Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Step15Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Step15Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
