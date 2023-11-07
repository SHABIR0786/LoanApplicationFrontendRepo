import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { PurchaseMilitaryPersonalComponent } from "./purchase-military-personal.component";

describe("PurchaseMilitaryPersonalComponent", () => {
  let component: PurchaseMilitaryPersonalComponent;
  let fixture: ComponentFixture<PurchaseMilitaryPersonalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PurchaseMilitaryPersonalComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PurchaseMilitaryPersonalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
