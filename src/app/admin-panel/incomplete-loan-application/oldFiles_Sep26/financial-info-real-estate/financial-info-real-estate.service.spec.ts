import { TestBed } from "@angular/core/testing";

import { FinancialInfoRealEstateService } from "./financial-info-real-estate.service";

describe("FinancialInfoRealEstateService", () => {
  let service: FinancialInfoRealEstateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FinancialInfoRealEstateService);
  });

  it("should be created", () => {
    expect(service).toBeTruthy();
  });
});
