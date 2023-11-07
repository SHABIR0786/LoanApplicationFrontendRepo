import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { FinancialInfoAssetsLiabilitiesComponent } from "./financial-info-assets-liabilities.component";

describe("FinancialInfoAssetsLiabilitiesComponent", () => {
  let component: FinancialInfoAssetsLiabilitiesComponent;
  let fixture: ComponentFixture<FinancialInfoAssetsLiabilitiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FinancialInfoAssetsLiabilitiesComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FinancialInfoAssetsLiabilitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
