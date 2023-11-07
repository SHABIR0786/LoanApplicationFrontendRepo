import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { TitleAndCompensationComponent } from "./title-and-compensation.component";

describe("TitleAndCompensationComponent", () => {
  let component: TitleAndCompensationComponent;
  let fixture: ComponentFixture<TitleAndCompensationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TitleAndCompensationComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TitleAndCompensationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
