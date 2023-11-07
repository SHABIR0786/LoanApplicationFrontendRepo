import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { LoanAppSideBarComponent } from "./loan-app-side-bar.component";

describe("LoanAppSideBarComponent", () => {
  let component: LoanAppSideBarComponent;
  let fixture: ComponentFixture<LoanAppSideBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LoanAppSideBarComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoanAppSideBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
