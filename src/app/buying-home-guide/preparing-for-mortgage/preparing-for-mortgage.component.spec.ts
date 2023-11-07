import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { PreparingForMortgageComponent } from "./preparing-for-mortgage.component";

describe("PreparingForMortgageComponent", () => {
  let component: PreparingForMortgageComponent;
  let fixture: ComponentFixture<PreparingForMortgageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PreparingForMortgageComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PreparingForMortgageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
