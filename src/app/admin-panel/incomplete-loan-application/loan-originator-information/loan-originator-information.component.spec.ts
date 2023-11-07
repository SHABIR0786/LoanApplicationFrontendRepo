import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { LoanOriginatorInformationComponent } from "./loan-originator-information.component";

describe("LoanOriginatorInformationComponent", () => {
  let component: LoanOriginatorInformationComponent;
  let fixture: ComponentFixture<LoanOriginatorInformationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LoanOriginatorInformationComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoanOriginatorInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
