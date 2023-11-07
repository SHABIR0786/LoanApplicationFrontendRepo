import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { TheAppraisalUnderwritingProcessComponent } from "./the-appraisal-underwriting-process.component";

describe("TheAppraisalUnderwritingProcessComponent", () => {
  let component: TheAppraisalUnderwritingProcessComponent;
  let fixture: ComponentFixture<TheAppraisalUnderwritingProcessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TheAppraisalUnderwritingProcessComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TheAppraisalUnderwritingProcessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
