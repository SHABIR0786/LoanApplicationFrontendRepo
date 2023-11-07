import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { FifteenYearFixedMortgageComponent } from "./fifteen-year-fixed-mortgage.component";

describe("FifteenYearFixedMortgageComponent", () => {
  let component: FifteenYearFixedMortgageComponent;
  let fixture: ComponentFixture<FifteenYearFixedMortgageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FifteenYearFixedMortgageComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FifteenYearFixedMortgageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
