import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { TellUsALittleBitAboutYourselfComponent } from "./tell-us-a-little-bit-about-yourself.component";

describe("TellUsALittleBitAboutYourselfComponent", () => {
  let component: TellUsALittleBitAboutYourselfComponent;
  let fixture: ComponentFixture<TellUsALittleBitAboutYourselfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TellUsALittleBitAboutYourselfComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TellUsALittleBitAboutYourselfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
