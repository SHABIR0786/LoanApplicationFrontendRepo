import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { CurrentMilitaryServiceComponent } from "./current-military-service.component";

describe("CurrentMilitaryServiceComponent", () => {
  let component: CurrentMilitaryServiceComponent;
  let fixture: ComponentFixture<CurrentMilitaryServiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CurrentMilitaryServiceComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrentMilitaryServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
