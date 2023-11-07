import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { HOADuesComponent } from "./hoa-dues.component";

describe("HOADuesComponent", () => {
  let component: HOADuesComponent;
  let fixture: ComponentFixture<HOADuesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HOADuesComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HOADuesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
