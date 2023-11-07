import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { FinancialInfoRealEstateComponent } from "./financial-info-real-estate.component";

describe("FinancialInfoRealEstateComponent", () => {
  let component: FinancialInfoRealEstateComponent;
  let fixture: ComponentFixture<FinancialInfoRealEstateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FinancialInfoRealEstateComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FinancialInfoRealEstateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
