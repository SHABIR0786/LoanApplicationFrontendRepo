import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { PurchaseMilitaryInfoComponent } from "./purchase-military-info.component";

describe("PurchaseMilitaryInfoComponent", () => {
  let component: PurchaseMilitaryInfoComponent;
  let fixture: ComponentFixture<PurchaseMilitaryInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PurchaseMilitaryInfoComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PurchaseMilitaryInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
