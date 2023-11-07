import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { VaLoanPreviouslyComponent } from "./va-loan-previously.component";

describe("VaLoanPreviouslyComponent", () => {
  let component: VaLoanPreviouslyComponent;
  let fixture: ComponentFixture<VaLoanPreviouslyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [VaLoanPreviouslyComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VaLoanPreviouslyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
