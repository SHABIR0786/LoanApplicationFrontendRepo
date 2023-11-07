import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { AlreadyWorkingWithSomeoneFromEzComponent } from "./already-working-with-someone-from-ez.component";

describe("AlreadyWorkingWithSomeoneFromEzComponent", () => {
  let component: AlreadyWorkingWithSomeoneFromEzComponent;
  let fixture: ComponentFixture<AlreadyWorkingWithSomeoneFromEzComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AlreadyWorkingWithSomeoneFromEzComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlreadyWorkingWithSomeoneFromEzComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
