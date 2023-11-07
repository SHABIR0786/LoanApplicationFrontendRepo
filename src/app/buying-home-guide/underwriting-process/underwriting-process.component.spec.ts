import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { UnderwritingProcessComponent } from "./underwriting-process.component";

describe("UnderwritingProcessComponent", () => {
  let component: UnderwritingProcessComponent;
  let fixture: ComponentFixture<UnderwritingProcessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [UnderwritingProcessComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnderwritingProcessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
