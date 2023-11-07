import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { LoneOptionStep10Component } from "./lone-option-step10.component";

describe("LoneOptionStep10Component", () => {
  let component: LoneOptionStep10Component;
  let fixture: ComponentFixture<LoneOptionStep10Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LoneOptionStep10Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoneOptionStep10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
