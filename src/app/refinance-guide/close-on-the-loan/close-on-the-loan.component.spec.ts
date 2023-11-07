import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { CloseOnTheLoanComponent } from "./close-on-the-loan.component";

describe("CloseOnTheLoanComponent", () => {
  let component: CloseOnTheLoanComponent;
  let fixture: ComponentFixture<CloseOnTheLoanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CloseOnTheLoanComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CloseOnTheLoanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
