import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { BuyingVacationHomeComponent } from "./buying-vacation-home.component";

describe("BuyingVacationHomeComponent", () => {
  let component: BuyingVacationHomeComponent;
  let fixture: ComponentFixture<BuyingVacationHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BuyingVacationHomeComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuyingVacationHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
