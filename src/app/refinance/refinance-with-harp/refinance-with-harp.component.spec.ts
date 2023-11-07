import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { RefinanceWithHARPComponent } from "./refinance-with-harp.component";

describe("RefinanceWithHARPComponent", () => {
  let component: RefinanceWithHARPComponent;
  let fixture: ComponentFixture<RefinanceWithHARPComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [RefinanceWithHARPComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RefinanceWithHARPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
