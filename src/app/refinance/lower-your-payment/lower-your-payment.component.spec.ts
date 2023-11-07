import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { LowerYourPaymentComponent } from "./lower-your-payment.component";

describe("LowerYourPaymentComponent", () => {
  let component: LowerYourPaymentComponent;
  let fixture: ComponentFixture<LowerYourPaymentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LowerYourPaymentComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LowerYourPaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
