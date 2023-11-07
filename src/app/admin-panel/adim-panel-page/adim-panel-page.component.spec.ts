import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { AdimPanelPageComponent } from "./adim-panel-page.component";

describe("AdimPanelPageComponent", () => {
  let component: AdimPanelPageComponent;
  let fixture: ComponentFixture<AdimPanelPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AdimPanelPageComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdimPanelPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
