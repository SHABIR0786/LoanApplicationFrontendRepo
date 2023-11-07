import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { AboutYourAssetsComponent } from "./about-your-assets.component";

describe("AboutYourAssetsComponent", () => {
  let component: AboutYourAssetsComponent;
  let fixture: ComponentFixture<AboutYourAssetsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AboutYourAssetsComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutYourAssetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
