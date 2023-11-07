import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { RequestAMortgageComponent } from "./request-a-mortgage.component";

describe("RequestAMortgageComponent", () => {
  let component: RequestAMortgageComponent;
  let fixture: ComponentFixture<RequestAMortgageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [RequestAMortgageComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestAMortgageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
