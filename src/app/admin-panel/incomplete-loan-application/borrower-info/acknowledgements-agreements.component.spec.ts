import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { AcknowledgementsAgreementsComponent } from "./acknowledgements-agreements.component";

describe("AcknowledgementsAgreementsComponent", () => {
  let component: AcknowledgementsAgreementsComponent;
  let fixture: ComponentFixture<AcknowledgementsAgreementsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AcknowledgementsAgreementsComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AcknowledgementsAgreementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
