import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { PersonalInfoConfirmationComponent } from "./personal-info-confirmation.component";

describe("PersonalInfoConfirmationComponent", () => {
  let component: PersonalInfoConfirmationComponent;
  let fixture: ComponentFixture<PersonalInfoConfirmationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PersonalInfoConfirmationComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonalInfoConfirmationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
