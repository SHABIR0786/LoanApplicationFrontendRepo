import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { FirstTimeHomeBuyerComponent } from "./first-time-home-buyer.component";

describe("FirstTimeHomeBuyerComponent", () => {
  let component: FirstTimeHomeBuyerComponent;
  let fixture: ComponentFixture<FirstTimeHomeBuyerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FirstTimeHomeBuyerComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FirstTimeHomeBuyerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
