import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { JumboLoanComponent } from "./jumbo-loan.component";

describe("JumboLoanComponent", () => {
  let component: JumboLoanComponent;
  let fixture: ComponentFixture<JumboLoanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [JumboLoanComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JumboLoanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
