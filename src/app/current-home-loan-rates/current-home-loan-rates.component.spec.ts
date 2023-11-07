import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { CurrentHomeLoanRatesComponent } from "./current-home-loan-rates.component";

describe("CurrentHomeLoanRatesComponent", () => {
  let component: CurrentHomeLoanRatesComponent;
  let fixture: ComponentFixture<CurrentHomeLoanRatesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CurrentHomeLoanRatesComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrentHomeLoanRatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
