import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { DidSomeoneRefferYouComponent } from "./did-someone-reffer-you.component";

describe("DidSomeoneRefferYouComponent", () => {
  let component: DidSomeoneRefferYouComponent;
  let fixture: ComponentFixture<DidSomeoneRefferYouComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DidSomeoneRefferYouComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DidSomeoneRefferYouComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
