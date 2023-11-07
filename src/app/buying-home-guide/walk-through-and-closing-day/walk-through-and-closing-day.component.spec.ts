import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { WalkThroughAndClosingDayComponent } from "./walk-through-and-closing-day.component";

describe("WalkThroughAndClosingDayComponent", () => {
  let component: WalkThroughAndClosingDayComponent;
  let fixture: ComponentFixture<WalkThroughAndClosingDayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [WalkThroughAndClosingDayComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WalkThroughAndClosingDayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
