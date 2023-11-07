import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { LoanOptionsComponent } from "./loan-options.component";

describe("LoanOptionsComponent", () => {
  let component: LoanOptionsComponent;
  let fixture: ComponentFixture<LoanOptionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LoanOptionsComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoanOptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
