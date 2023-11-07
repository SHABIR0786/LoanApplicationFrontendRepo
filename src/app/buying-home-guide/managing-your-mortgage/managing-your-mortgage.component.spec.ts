import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { ManagingYourMortgageComponent } from "./managing-your-mortgage.component";

describe("ManagingYourMortgageComponent", () => {
  let component: ManagingYourMortgageComponent;
  let fixture: ComponentFixture<ManagingYourMortgageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ManagingYourMortgageComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagingYourMortgageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
