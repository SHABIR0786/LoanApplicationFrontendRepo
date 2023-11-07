import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { LoneOptionStep7Component } from "./lone-option-step7.component";

describe("LoneOptionStep7Component", () => {
  let component: LoneOptionStep7Component;
  let fixture: ComponentFixture<LoneOptionStep7Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LoneOptionStep7Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoneOptionStep7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
