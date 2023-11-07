import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { LoneOptionStep6Component } from "./lone-option-step6.component";

describe("LoneOptionStep6Component", () => {
  let component: LoneOptionStep6Component;
  let fixture: ComponentFixture<LoneOptionStep6Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LoneOptionStep6Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoneOptionStep6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
