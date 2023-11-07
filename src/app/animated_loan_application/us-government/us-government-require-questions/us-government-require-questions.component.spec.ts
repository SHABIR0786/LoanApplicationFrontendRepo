import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { UsGovernmentRequireQuestionsComponent } from "./us-government-require-questions.component";

describe("UsGovernmentRequireQuestionsComponent", () => {
  let component: UsGovernmentRequireQuestionsComponent;
  let fixture: ComponentFixture<UsGovernmentRequireQuestionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [UsGovernmentRequireQuestionsComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsGovernmentRequireQuestionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
