import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { LoneOptionStep5Component } from "./lone-option-step5.component";

describe("LoneOptionStep5Component", () => {
  let component: LoneOptionStep5Component;
  let fixture: ComponentFixture<LoneOptionStep5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LoneOptionStep5Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoneOptionStep5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
