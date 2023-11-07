import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { EconsentComponent } from "./econsent.component";

describe("EconsentComponent", () => {
  let component: EconsentComponent;
  let fixture: ComponentFixture<EconsentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [EconsentComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EconsentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
