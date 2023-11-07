import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { PlanOnUsingNewHomeComponent } from "./plan-on-using-new-home.component";

describe("PlanOnUsingNewHomeComponent", () => {
  let component: PlanOnUsingNewHomeComponent;
  let fixture: ComponentFixture<PlanOnUsingNewHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PlanOnUsingNewHomeComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanOnUsingNewHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
