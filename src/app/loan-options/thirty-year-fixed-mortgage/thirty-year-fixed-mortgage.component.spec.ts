import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { ThirtyYearFixedMortgageComponent } from "./thirty-year-fixed-mortgage.component";

describe("ThirtyYearFixedMortgageComponent", () => {
  let component: ThirtyYearFixedMortgageComponent;
  let fixture: ComponentFixture<ThirtyYearFixedMortgageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ThirtyYearFixedMortgageComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThirtyYearFixedMortgageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
