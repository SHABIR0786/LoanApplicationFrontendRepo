import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { MakingYourFirstMortgagePaymentComponent } from "./making-your-first-mortgage-payment.component";

describe("MakingYourFirstMortgagePaymentComponent", () => {
  let component: MakingYourFirstMortgagePaymentComponent;
  let fixture: ComponentFixture<MakingYourFirstMortgagePaymentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MakingYourFirstMortgagePaymentComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MakingYourFirstMortgagePaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
