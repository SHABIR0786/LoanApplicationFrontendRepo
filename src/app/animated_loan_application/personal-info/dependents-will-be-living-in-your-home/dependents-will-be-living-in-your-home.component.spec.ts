import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { DependentsWillBeLivingInYourHomeComponent } from "./dependents-will-be-living-in-your-home.component";

describe("DependentsWillBeLivingInYourHomeComponent", () => {
  let component: DependentsWillBeLivingInYourHomeComponent;
  let fixture: ComponentFixture<DependentsWillBeLivingInYourHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DependentsWillBeLivingInYourHomeComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(
      DependentsWillBeLivingInYourHomeComponent
    );
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
