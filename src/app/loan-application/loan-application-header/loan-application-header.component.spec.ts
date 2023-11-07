import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { LoanApplicationHeaderComponent } from "./loan-application-header.component";

describe("LoanApplicationHeaderComponent", () => {
  let component: LoanApplicationHeaderComponent;
  let fixture: ComponentFixture<LoanApplicationHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LoanApplicationHeaderComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoanApplicationHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
