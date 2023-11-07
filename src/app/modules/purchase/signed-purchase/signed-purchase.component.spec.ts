import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { SignedPurchaseComponent } from "./signed-purchase.component";

describe("SignedPurchaseComponent", () => {
  let component: SignedPurchaseComponent;
  let fixture: ComponentFixture<SignedPurchaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SignedPurchaseComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignedPurchaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
