import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { PropertyInfoConfirmationComponent } from "./property-info-confirmation.component";

describe("PropertyInfoConfirmationComponent", () => {
  let component: PropertyInfoConfirmationComponent;
  let fixture: ComponentFixture<PropertyInfoConfirmationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PropertyInfoConfirmationComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PropertyInfoConfirmationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
