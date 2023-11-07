import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { MainLoanProcessComponent } from "./main-loan-process.component";

describe("MainLoanProcessComponent", () => {
  let component: MainLoanProcessComponent;
  let fixture: ComponentFixture<MainLoanProcessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MainLoanProcessComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainLoanProcessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
