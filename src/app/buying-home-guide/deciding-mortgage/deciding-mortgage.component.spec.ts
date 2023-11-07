import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { DecidingMortgageComponent } from "./deciding-mortgage.component";

describe("DecidingMortgageComponent", () => {
  let component: DecidingMortgageComponent;
  let fixture: ComponentFixture<DecidingMortgageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DecidingMortgageComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DecidingMortgageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
