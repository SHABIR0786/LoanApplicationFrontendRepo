import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { BorrowerPersonalDetailComponent } from "./borrower-personal-detail.component";

describe("BorrowerPersonalDetailComponent", () => {
  let component: BorrowerPersonalDetailComponent;
  let fixture: ComponentFixture<BorrowerPersonalDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BorrowerPersonalDetailComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BorrowerPersonalDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
