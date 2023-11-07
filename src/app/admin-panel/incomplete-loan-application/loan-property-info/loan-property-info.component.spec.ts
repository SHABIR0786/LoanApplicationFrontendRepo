import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { LoanPropertyInfoComponent } from "./loan-property-info.component";

describe("LoanPropertyInfoComponent", () => {
  let component: LoanPropertyInfoComponent;
  let fixture: ComponentFixture<LoanPropertyInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LoanPropertyInfoComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoanPropertyInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
