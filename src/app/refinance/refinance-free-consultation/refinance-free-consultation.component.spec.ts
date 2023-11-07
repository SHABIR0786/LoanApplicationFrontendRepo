import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { RefinanceFreeConsultationComponent } from "./refinance-free-consultation.component";

describe("RefinanceFreeConsultationComponent", () => {
  let component: RefinanceFreeConsultationComponent;
  let fixture: ComponentFixture<RefinanceFreeConsultationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [RefinanceFreeConsultationComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RefinanceFreeConsultationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
