import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { PurchasePropYesComponent } from "./purchase-prop-yes.component";

describe("PurchasePropYesComponent", () => {
  let component: PurchasePropYesComponent;
  let fixture: ComponentFixture<PurchasePropYesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PurchasePropYesComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PurchasePropYesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
