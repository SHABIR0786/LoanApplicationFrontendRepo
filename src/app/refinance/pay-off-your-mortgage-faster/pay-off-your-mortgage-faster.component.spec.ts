import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { PayOffYourMortgageFasterComponent } from "./pay-off-your-mortgage-faster.component";

describe("PayOffYourMortgageFasterComponent", () => {
  let component: PayOffYourMortgageFasterComponent;
  let fixture: ComponentFixture<PayOffYourMortgageFasterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PayOffYourMortgageFasterComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PayOffYourMortgageFasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
