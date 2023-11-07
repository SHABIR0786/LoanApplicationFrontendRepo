import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { LoanApplicationListComponent } from "./loan-application-list.component";

describe("LoanApplicationListComponent", () => {
  let component: LoanApplicationListComponent;
  let fixture: ComponentFixture<LoanApplicationListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LoanApplicationListComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoanApplicationListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
