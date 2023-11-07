import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { WhatStageAreYouInComponent } from "./what-stage-are-you-in.component";

describe("WhatStageAreYouInComponent", () => {
  let component: WhatStageAreYouInComponent;
  let fixture: ComponentFixture<WhatStageAreYouInComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [WhatStageAreYouInComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WhatStageAreYouInComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
