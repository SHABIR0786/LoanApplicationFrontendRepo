import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { PurchaseNoComponent } from "./purchase-no.component";

describe("PurchaseNoComponent", () => {
  let component: PurchaseNoComponent;
  let fixture: ComponentFixture<PurchaseNoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PurchaseNoComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PurchaseNoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
