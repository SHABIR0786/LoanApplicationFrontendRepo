import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { EmailAndTextUpdatesComponent } from "./email-and-text-updates.component";

describe("EmailAndTextUpdatesComponent", () => {
  let component: EmailAndTextUpdatesComponent;
  let fixture: ComponentFixture<EmailAndTextUpdatesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [EmailAndTextUpdatesComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmailAndTextUpdatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
