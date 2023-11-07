import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { ApplynowFooterComponent } from "./applynow-footer.component";

describe("ApplynowFooterComponent", () => {
  let component: ApplynowFooterComponent;
  let fixture: ComponentFixture<ApplynowFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ApplynowFooterComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplynowFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
