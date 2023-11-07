import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { ApplyForARefinanceLoanComponent } from "./apply-for-a-refinance-loan.component";

describe("ApplyForARefinanceLoanComponent", () => {
  let component: ApplyForARefinanceLoanComponent;
  let fixture: ComponentFixture<ApplyForARefinanceLoanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ApplyForARefinanceLoanComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplyForARefinanceLoanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
