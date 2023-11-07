import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { LoneOptionStep8Component } from "./lone-option-step8.component";

describe("LoneOptionStep8Component", () => {
  let component: LoneOptionStep8Component;
  let fixture: ComponentFixture<LoneOptionStep8Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LoneOptionStep8Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoneOptionStep8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
