import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { PreparingToCloseComponent } from "./preparing-to-close.component";

describe("PreparingToCloseComponent", () => {
  let component: PreparingToCloseComponent;
  let fixture: ComponentFixture<PreparingToCloseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PreparingToCloseComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PreparingToCloseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
