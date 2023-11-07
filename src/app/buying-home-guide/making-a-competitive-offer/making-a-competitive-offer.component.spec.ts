import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { MakingACompetitiveOfferComponent } from "./making-a-competitive-offer.component";

describe("MakingACompetitiveOfferComponent", () => {
  let component: MakingACompetitiveOfferComponent;
  let fixture: ComponentFixture<MakingACompetitiveOfferComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MakingACompetitiveOfferComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MakingACompetitiveOfferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
