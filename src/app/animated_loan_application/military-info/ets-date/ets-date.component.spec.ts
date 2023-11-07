import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { EtsDateComponent } from "./ets-date.component";

describe("EtsDateComponent", () => {
  let component: EtsDateComponent;
  let fixture: ComponentFixture<EtsDateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [EtsDateComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EtsDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
