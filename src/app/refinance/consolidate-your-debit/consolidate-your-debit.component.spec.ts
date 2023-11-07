import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { ConsolidateYourDebitComponent } from "./consolidate-your-debit.component";

describe("ConsolidateYourDebitComponent", () => {
  let component: ConsolidateYourDebitComponent;
  let fixture: ComponentFixture<ConsolidateYourDebitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ConsolidateYourDebitComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsolidateYourDebitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
