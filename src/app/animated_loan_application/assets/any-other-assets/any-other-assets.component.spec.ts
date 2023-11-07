import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { AnyOtherAssetsComponent } from "./any-other-assets.component";

describe("AnyOtherAssetsComponent", () => {
  let component: AnyOtherAssetsComponent;
  let fixture: ComponentFixture<AnyOtherAssetsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AnyOtherAssetsComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnyOtherAssetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
