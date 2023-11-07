import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { MostCurrentEmployerComponent } from "./most-current-employer.component";

describe("MostCurrentEmployerComponent", () => {
  let component: MostCurrentEmployerComponent;
  let fixture: ComponentFixture<MostCurrentEmployerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MostCurrentEmployerComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MostCurrentEmployerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
