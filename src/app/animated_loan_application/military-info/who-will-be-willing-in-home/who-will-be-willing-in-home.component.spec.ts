import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { WhoWillBeWillingInHomeComponent } from "./who-will-be-willing-in-home.component";

describe("WhoWillBeWillingInHomeComponent", () => {
  let component: WhoWillBeWillingInHomeComponent;
  let fixture: ComponentFixture<WhoWillBeWillingInHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [WhoWillBeWillingInHomeComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WhoWillBeWillingInHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
