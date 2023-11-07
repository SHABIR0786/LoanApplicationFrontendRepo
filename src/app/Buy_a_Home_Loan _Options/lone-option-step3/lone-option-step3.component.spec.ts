import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { LoneOptionStep3Component } from "./lone-option-step3.component";

describe("LoneOptionStep3Component", () => {
  let component: LoneOptionStep3Component;
  let fixture: ComponentFixture<LoneOptionStep3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LoneOptionStep3Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoneOptionStep3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
