import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { LoneOptionStep2Component } from "./lone-option-step2.component";

describe("LoneOptionStep2Component", () => {
  let component: LoneOptionStep2Component;
  let fixture: ComponentFixture<LoneOptionStep2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LoneOptionStep2Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoneOptionStep2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
