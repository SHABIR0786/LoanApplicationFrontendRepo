import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { LoneOptionStep13Component } from "./lone-option-step13.component";

describe("LoneOptionStep13Component", () => {
  let component: LoneOptionStep13Component;
  let fixture: ComponentFixture<LoneOptionStep13Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LoneOptionStep13Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoneOptionStep13Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
