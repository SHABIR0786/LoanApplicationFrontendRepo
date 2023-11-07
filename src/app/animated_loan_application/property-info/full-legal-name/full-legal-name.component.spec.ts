import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { FullLegalNameComponent } from "./full-legal-name.component";

describe("FullLegalNameComponent", () => {
  let component: FullLegalNameComponent;
  let fixture: ComponentFixture<FullLegalNameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FullLegalNameComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FullLegalNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
