import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { ViewAllCalculatorsComponent } from "./view-all-calculators.component";

describe("ViewAllCalculatorsComponent", () => {
  let component: ViewAllCalculatorsComponent;
  let fixture: ComponentFixture<ViewAllCalculatorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ViewAllCalculatorsComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewAllCalculatorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
