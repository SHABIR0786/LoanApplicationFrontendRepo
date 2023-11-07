import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { EmployementHistoryComponent } from "./employement-history.component";

describe("EmployementHistoryComponent", () => {
  let component: EmployementHistoryComponent;
  let fixture: ComponentFixture<EmployementHistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [EmployementHistoryComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployementHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
