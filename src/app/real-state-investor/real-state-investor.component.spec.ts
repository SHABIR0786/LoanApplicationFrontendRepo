import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { RealStateInvestorComponent } from "./real-state-investor.component";

describe("RealStateInvestorComponent", () => {
  let component: RealStateInvestorComponent;
  let fixture: ComponentFixture<RealStateInvestorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [RealStateInvestorComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RealStateInvestorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
