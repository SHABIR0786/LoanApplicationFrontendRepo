import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { AmortizationResultComponent } from "./amortization-result.component";

describe("AmortizationResultComponent", () => {
  let component: AmortizationResultComponent;
  let fixture: ComponentFixture<AmortizationResultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AmortizationResultComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AmortizationResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
