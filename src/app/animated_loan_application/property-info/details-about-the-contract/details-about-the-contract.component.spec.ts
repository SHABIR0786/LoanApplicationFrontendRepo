import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { DetailsAboutTheContractComponent } from "./details-about-the-contract.component";

describe("DetailsAboutTheContractComponent", () => {
  let component: DetailsAboutTheContractComponent;
  let fixture: ComponentFixture<DetailsAboutTheContractComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DetailsAboutTheContractComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsAboutTheContractComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
