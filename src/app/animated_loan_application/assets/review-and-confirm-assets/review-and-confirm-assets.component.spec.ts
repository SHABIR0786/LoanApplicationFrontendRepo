import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { ReviewAndConfirmAssetsComponent } from "./review-and-confirm-assets.component";

describe("ReviewAndConfirmAssetsComponent", () => {
  let component: ReviewAndConfirmAssetsComponent;
  let fixture: ComponentFixture<ReviewAndConfirmAssetsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ReviewAndConfirmAssetsComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReviewAndConfirmAssetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
