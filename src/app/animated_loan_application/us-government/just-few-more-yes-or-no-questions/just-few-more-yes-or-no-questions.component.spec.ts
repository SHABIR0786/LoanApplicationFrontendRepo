import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { JustFewMoreYesOrNoQuestionsComponent } from "./just-few-more-yes-or-no-questions.component";

describe("JustFewMoreYesOrNoQuestionsComponent", () => {
  let component: JustFewMoreYesOrNoQuestionsComponent;
  let fixture: ComponentFixture<JustFewMoreYesOrNoQuestionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [JustFewMoreYesOrNoQuestionsComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JustFewMoreYesOrNoQuestionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
