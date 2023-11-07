import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { CurrentlyLivingComponent } from "./currently-living.component";

describe("CurrentlyLivingComponent", () => {
  let component: CurrentlyLivingComponent;
  let fixture: ComponentFixture<CurrentlyLivingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CurrentlyLivingComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrentlyLivingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
