import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { LoneOptionStep4Component } from "./lone-option-step4.component";

describe("LoneOptionStep4Component", () => {
  let component: LoneOptionStep4Component;
  let fixture: ComponentFixture<LoneOptionStep4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LoneOptionStep4Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoneOptionStep4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
