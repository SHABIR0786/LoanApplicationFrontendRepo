import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { RentVsBuyCalculatorComponent } from "./rent-vs-buy-calculator.component";

describe("RentVsBuyCalculatorComponent", () => {
  let component: RentVsBuyCalculatorComponent;
  let fixture: ComponentFixture<RentVsBuyCalculatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [RentVsBuyCalculatorComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RentVsBuyCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
