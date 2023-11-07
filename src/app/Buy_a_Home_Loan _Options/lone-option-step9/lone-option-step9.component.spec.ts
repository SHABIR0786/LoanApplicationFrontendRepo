import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { LoneOptionStep9Component } from "./lone-option-step9.component";

describe("LoneOptionStep9Component", () => {
  let component: LoneOptionStep9Component;
  let fixture: ComponentFixture<LoneOptionStep9Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LoneOptionStep9Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoneOptionStep9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
