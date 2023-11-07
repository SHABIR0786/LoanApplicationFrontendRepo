import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { SelectionRealEstateAgentComponent } from "./selection-real-estate-agent.component";

describe("SelectionRealEstateAgentComponent", () => {
  let component: SelectionRealEstateAgentComponent;
  let fixture: ComponentFixture<SelectionRealEstateAgentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SelectionRealEstateAgentComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectionRealEstateAgentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
