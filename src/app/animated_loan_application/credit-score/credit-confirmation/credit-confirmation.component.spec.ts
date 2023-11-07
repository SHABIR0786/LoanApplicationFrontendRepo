import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { CreditConfirmationComponent } from "./credit-confirmation.component";

describe("CreditConfirmationComponent", () => {
  let component: CreditConfirmationComponent;
  let fixture: ComponentFixture<CreditConfirmationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CreditConfirmationComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreditConfirmationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
