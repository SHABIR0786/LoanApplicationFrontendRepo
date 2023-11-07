import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { RefinanceGuideComponent } from "./refinance-guide.component";

describe("RefinanceGuideComponent", () => {
  let component: RefinanceGuideComponent;
  let fixture: ComponentFixture<RefinanceGuideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [RefinanceGuideComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RefinanceGuideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
