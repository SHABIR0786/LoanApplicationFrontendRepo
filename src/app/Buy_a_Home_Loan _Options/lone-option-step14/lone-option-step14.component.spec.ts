import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { LoneOptionStep14Component } from "./lone-option-step14.component";

describe("LoneOptionStep14Component", () => {
  let component: LoneOptionStep14Component;
  let fixture: ComponentFixture<LoneOptionStep14Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LoneOptionStep14Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoneOptionStep14Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
