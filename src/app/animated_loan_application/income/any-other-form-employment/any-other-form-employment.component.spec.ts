import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { AnyOtherFormEmploymentComponent } from "./any-other-form-employment.component";

describe("AnyOtherFormEmploymentComponent", () => {
  let component: AnyOtherFormEmploymentComponent;
  let fixture: ComponentFixture<AnyOtherFormEmploymentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AnyOtherFormEmploymentComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnyOtherFormEmploymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
