import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { AddressOfNewHomeComponent } from "./address-of-new-home.component";

describe("AddressOfNewHomeComponent", () => {
  let component: AddressOfNewHomeComponent;
  let fixture: ComponentFixture<AddressOfNewHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AddressOfNewHomeComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddressOfNewHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
