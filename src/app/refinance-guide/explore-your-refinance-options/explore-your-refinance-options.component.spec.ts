import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { ExploreYourRefinanceOptionsComponent } from "./explore-your-refinance-options.component";

describe("ExploreYourRefinanceOptionsComponent", () => {
  let component: ExploreYourRefinanceOptionsComponent;
  let fixture: ComponentFixture<ExploreYourRefinanceOptionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ExploreYourRefinanceOptionsComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExploreYourRefinanceOptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
