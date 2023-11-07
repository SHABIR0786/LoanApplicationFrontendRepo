import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { BuyingHomeGuideComponent } from "./buying-home-guide.component";

describe("BuyingHomeGuideComponent", () => {
  let component: BuyingHomeGuideComponent;
  let fixture: ComponentFixture<BuyingHomeGuideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BuyingHomeGuideComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuyingHomeGuideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
