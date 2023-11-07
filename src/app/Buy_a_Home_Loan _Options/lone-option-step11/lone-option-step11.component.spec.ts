import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { LoneOptionStep11Component } from "./lone-option-step11.component";

describe("LoneOptionStep11Component", () => {
  let component: LoneOptionStep11Component;
  let fixture: ComponentFixture<LoneOptionStep11Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LoneOptionStep11Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoneOptionStep11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
