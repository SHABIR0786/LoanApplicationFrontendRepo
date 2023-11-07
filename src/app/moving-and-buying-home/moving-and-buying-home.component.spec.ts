import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { MovingAndBuyingHomeComponent } from "./moving-and-buying-home.component";

describe("MovingAndBuyingHomeComponent", () => {
  let component: MovingAndBuyingHomeComponent;
  let fixture: ComponentFixture<MovingAndBuyingHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MovingAndBuyingHomeComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovingAndBuyingHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
