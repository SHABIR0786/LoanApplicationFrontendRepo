import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { WhatTypeOfHomeComponent } from "./what-type-of-home.component";

describe("WhatTypeOfHomeComponent", () => {
  let component: WhatTypeOfHomeComponent;
  let fixture: ComponentFixture<WhatTypeOfHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [WhatTypeOfHomeComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WhatTypeOfHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
