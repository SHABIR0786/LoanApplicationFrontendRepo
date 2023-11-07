import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { Step16Component } from "./step16.component";

describe("Step16Component", () => {
  let component: Step16Component;
  let fixture: ComponentFixture<Step16Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Step16Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Step16Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
