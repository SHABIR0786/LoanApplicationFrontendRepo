import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { HarpRefinanceComponent } from "./harp-refinance.component";

describe("HarpRefinanceComponent", () => {
  let component: HarpRefinanceComponent;
  let fixture: ComponentFixture<HarpRefinanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HarpRefinanceComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HarpRefinanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
