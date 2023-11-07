import { TestBed } from "@angular/core/testing";

import { FinancialInfoAssetsLiabilitiesService } from "./financial-info-assets-liabilities.service";

describe("FinancialInfoAssetsLiabilitiesService", () => {
  let service: FinancialInfoAssetsLiabilitiesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FinancialInfoAssetsLiabilitiesService);
  });

  it("should be created", () => {
    expect(service).toBeTruthy();
  });
});
