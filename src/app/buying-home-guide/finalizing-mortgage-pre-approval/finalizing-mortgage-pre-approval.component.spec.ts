import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { FinalizingMortgagePreApprovalComponent } from "./finalizing-mortgage-pre-approval.component";

describe("FinalizingMortgagePreApprovalComponent", () => {
  let component: FinalizingMortgagePreApprovalComponent;
  let fixture: ComponentFixture<FinalizingMortgagePreApprovalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FinalizingMortgagePreApprovalComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FinalizingMortgagePreApprovalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
