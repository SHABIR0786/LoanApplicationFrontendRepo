import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { VaLoanComponent } from "./va-loan.component";

describe("VaLoanComponent", () => {
  let component: VaLoanComponent;
  let fixture: ComponentFixture<VaLoanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [VaLoanComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VaLoanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
