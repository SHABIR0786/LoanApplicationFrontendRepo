import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { PurchaseNonMilComponent } from "./purchase-non-mil.component";

describe("PurchaseNonMilComponent", () => {
  let component: PurchaseNonMilComponent;
  let fixture: ComponentFixture<PurchaseNonMilComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PurchaseNonMilComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PurchaseNonMilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
