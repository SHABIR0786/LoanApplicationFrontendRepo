import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { LoneOptionStep12Component } from "./lone-option-step12.component";

describe("LoneOptionStep12Component", () => {
  let component: LoneOptionStep12Component;
  let fixture: ComponentFixture<LoneOptionStep12Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LoneOptionStep12Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoneOptionStep12Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
