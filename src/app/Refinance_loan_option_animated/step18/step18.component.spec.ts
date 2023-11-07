import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { Step18Component } from "./step18.component";

describe("Step18Component", () => {
  let component: Step18Component;
  let fixture: ComponentFixture<Step18Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Step18Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Step18Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
