import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { BranchOfMilitaryComponent } from "./branch-of-military.component";

describe("BranchOfMilitaryComponent", () => {
  let component: BranchOfMilitaryComponent;
  let fixture: ComponentFixture<BranchOfMilitaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BranchOfMilitaryComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BranchOfMilitaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
