import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { MortgageGlossaryComponent } from "./mortgage-glossary.component";

describe("MortgageGlossaryComponent", () => {
  let component: MortgageGlossaryComponent;
  let fixture: ComponentFixture<MortgageGlossaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MortgageGlossaryComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MortgageGlossaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
