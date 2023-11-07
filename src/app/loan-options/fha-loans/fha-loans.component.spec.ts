import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { FhaLoansComponent } from "./fha-loans.component";

describe("FhaLoansComponent", () => {
  let component: FhaLoansComponent;
  let fixture: ComponentFixture<FhaLoansComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FhaLoansComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FhaLoansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
