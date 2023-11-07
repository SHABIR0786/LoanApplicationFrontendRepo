import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-email-and-text-updates",
  templateUrl: "./email-and-text-updates.component.html",
  styleUrls: ["./email-and-text-updates.component.css"],
})
export class EmailAndTextUpdatesComponent implements OnInit {
  email;
  phone;
  submitted = false;
  constructor() {}

  ngOnInit(): void {}

  signUpClicked(form) {
    this.submitted = true;
    alert("not submitted");
    if (form.valid) {
      alert("submitted");
    }
  }
}
