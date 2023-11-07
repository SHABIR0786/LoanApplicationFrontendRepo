import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { ApplyingJointlyOrOwnComponent } from "./applying-jointly-or-own.component";

describe("ApplyingJointlyOrOwnComponent", () => {
  let component: ApplyingJointlyOrOwnComponent;
  let fixture: ComponentFixture<ApplyingJointlyOrOwnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ApplyingJointlyOrOwnComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplyingJointlyOrOwnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
