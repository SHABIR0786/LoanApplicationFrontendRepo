import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { RefinanceInvestmentPropertyComponent } from "./refinance-investment-property.component";

describe("RefinanceInvestmentPropertyComponent", () => {
  let component: RefinanceInvestmentPropertyComponent;
  let fixture: ComponentFixture<RefinanceInvestmentPropertyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [RefinanceInvestmentPropertyComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RefinanceInvestmentPropertyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
