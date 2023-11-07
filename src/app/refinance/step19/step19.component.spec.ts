import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { Step19Component } from "./step19.component";

describe("Step19Component", () => {
  let component: Step19Component;
  let fixture: ComponentFixture<Step19Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Step19Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Step19Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
