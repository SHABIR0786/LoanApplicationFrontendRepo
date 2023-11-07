import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { ApplyNowRefinanceComponent } from "./apply-now-refinance.component";

describe("ApplyNowRefinanceComponent", () => {
  let component: ApplyNowRefinanceComponent;
  let fixture: ComponentFixture<ApplyNowRefinanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ApplyNowRefinanceComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplyNowRefinanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
