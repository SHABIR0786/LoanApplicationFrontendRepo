import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { LoanProgressComponent } from "./loan-progress.component";

describe("LoanProgressComponent", () => {
  let component: LoanProgressComponent;
  let fixture: ComponentFixture<LoanProgressComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LoanProgressComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoanProgressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
