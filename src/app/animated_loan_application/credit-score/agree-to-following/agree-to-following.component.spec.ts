import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { AgreeToFollowingComponent } from "./agree-to-following.component";

describe("AgreeToFollowingComponent", () => {
  let component: AgreeToFollowingComponent;
  let fixture: ComponentFixture<AgreeToFollowingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AgreeToFollowingComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgreeToFollowingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
