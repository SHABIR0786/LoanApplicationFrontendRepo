import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { LoneOptionStep1Component } from "./lone-option-step1.component";

describe("LoneOptionStep1Component", () => {
  let component: LoneOptionStep1Component;
  let fixture: ComponentFixture<LoneOptionStep1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LoneOptionStep1Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoneOptionStep1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
