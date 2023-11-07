import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { MartialStatusComponent } from "./martial-status.component";

describe("MartialStatusComponent", () => {
  let component: MartialStatusComponent;
  let fixture: ComponentFixture<MartialStatusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MartialStatusComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MartialStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
