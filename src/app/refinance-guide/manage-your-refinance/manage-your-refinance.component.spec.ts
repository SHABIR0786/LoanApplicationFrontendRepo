import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { ManageYourRefinanceComponent } from "./manage-your-refinance.component";

describe("ManageYourRefinanceComponent", () => {
  let component: ManageYourRefinanceComponent;
  let fixture: ComponentFixture<ManageYourRefinanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ManageYourRefinanceComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageYourRefinanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
