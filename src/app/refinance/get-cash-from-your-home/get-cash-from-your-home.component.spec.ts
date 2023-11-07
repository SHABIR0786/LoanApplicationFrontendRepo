import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { GetCashFromYourHomeComponent } from "./get-cash-from-your-home.component";

describe("GetCashFromYourHomeComponent", () => {
  let component: GetCashFromYourHomeComponent;
  let fixture: ComponentFixture<GetCashFromYourHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [GetCashFromYourHomeComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetCashFromYourHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
