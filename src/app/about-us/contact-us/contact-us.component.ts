import { Component, OnInit } from "@angular/core";
import { ContactUsModel } from "./models/contactUs.model";
@Component({
  selector: "app-contact-us",
  templateUrl: "./contact-us.component.html",
  styleUrls: ["./contact-us.component.css"],
})
export class ContactUsComponent implements OnInit {
  model: ContactUsModel = new ContactUsModel();
  submitted = false;
  constructor() {}

  ngOnInit(): void {}

  submit(form) {
    this.submitted = true;
    if (form.valid) {
      console.log(this.model);
    }
  }
}
