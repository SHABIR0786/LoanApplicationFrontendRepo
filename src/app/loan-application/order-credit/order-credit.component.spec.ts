import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { OrderCreditComponent } from "./order-credit.component";

describe("OrderCreditComponent", () => {
  let component: OrderCreditComponent;
  let fixture: ComponentFixture<OrderCreditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [OrderCreditComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderCreditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
