import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { LoneOptionAnimatedComponent } from "./lone-option-animated.component";

describe("LoneOptionAnimatedComponent", () => {
  let component: LoneOptionAnimatedComponent;
  let fixture: ComponentFixture<LoneOptionAnimatedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LoneOptionAnimatedComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoneOptionAnimatedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
