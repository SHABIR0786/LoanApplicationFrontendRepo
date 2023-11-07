import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { Step17Component } from "./step17.component";

describe("Step17Component", () => {
  let component: Step17Component;
  let fixture: ComponentFixture<Step17Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Step17Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Step17Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
