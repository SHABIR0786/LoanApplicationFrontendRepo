import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { AdjustableRateMortgageComponent } from "./adjustable-rate-mortgage.component";

describe("AdjustableRateMortgageComponent", () => {
  let component: AdjustableRateMortgageComponent;
  let fixture: ComponentFixture<AdjustableRateMortgageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AdjustableRateMortgageComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdjustableRateMortgageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
