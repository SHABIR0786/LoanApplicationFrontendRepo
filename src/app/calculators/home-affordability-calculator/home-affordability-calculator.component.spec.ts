import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { HomeAffordabilityCalculatorComponent } from "./home-affordability-calculator.component";

describe("HomeAffordabilityCalculatorComponent", () => {
  let component: HomeAffordabilityCalculatorComponent;
  let fixture: ComponentFixture<HomeAffordabilityCalculatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HomeAffordabilityCalculatorComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeAffordabilityCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
