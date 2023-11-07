import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { PrepareForYourMortgageRefinanceComponent } from "./prepare-for-your-mortgage-refinance.component";

describe("PrepareForYourMortgageRefinanceComponent", () => {
  let component: PrepareForYourMortgageRefinanceComponent;
  let fixture: ComponentFixture<PrepareForYourMortgageRefinanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PrepareForYourMortgageRefinanceComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrepareForYourMortgageRefinanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
