import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { BuyingSecondHomeComponent } from "./buying-second-home.component";

describe("BuyingSecondHomeComponent", () => {
  let component: BuyingSecondHomeComponent;
  let fixture: ComponentFixture<BuyingSecondHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BuyingSecondHomeComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuyingSecondHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
