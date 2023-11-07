import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { KeepYourPaymentFromRaisingComponent } from "./keep-your-payment-from-raising.component";

describe("KeepYourPaymentFromRaisingComponent", () => {
  let component: KeepYourPaymentFromRaisingComponent;
  let fixture: ComponentFixture<KeepYourPaymentFromRaisingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [KeepYourPaymentFromRaisingComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KeepYourPaymentFromRaisingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
