import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { OtherSourcesOfIncomeComponent } from "./other-sources-of-income.component";

describe("OtherSourcesOfIncomeComponent", () => {
  let component: OtherSourcesOfIncomeComponent;
  let fixture: ComponentFixture<OtherSourcesOfIncomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [OtherSourcesOfIncomeComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OtherSourcesOfIncomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
