import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { CurrentOrFormerMemberOfMilitaryComponent } from "./current-or-former-member-of-military.component";

describe("CurrentOrFormerMemberOfMilitaryComponent", () => {
  let component: CurrentOrFormerMemberOfMilitaryComponent;
  let fixture: ComponentFixture<CurrentOrFormerMemberOfMilitaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CurrentOrFormerMemberOfMilitaryComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrentOrFormerMemberOfMilitaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
