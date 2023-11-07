import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { HomeBuyingFreeConsultationComponent } from "./home-buying-free-consultation.component";

describe("HomeBuyingFreeConsultationComponent", () => {
  let component: HomeBuyingFreeConsultationComponent;
  let fixture: ComponentFixture<HomeBuyingFreeConsultationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HomeBuyingFreeConsultationComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeBuyingFreeConsultationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
