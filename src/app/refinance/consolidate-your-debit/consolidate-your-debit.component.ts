import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-consolidate-your-debit",
  templateUrl: "./consolidate-your-debit.component.html",
  styleUrls: ["./consolidate-your-debit.component.css"],
})
export class ConsolidateYourDebitComponent implements OnInit {
  // show = false;

  ReadMore: boolean = true;

  visible: boolean = false;

  onclick() {
    this.ReadMore = !this.ReadMore;
    this.visible = !this.visible;
  }
  playVideo() {
    var ImagePoster = document.querySelector(".img-poster") as HTMLElement;
    ImagePoster.style.display = "none";
    var video = document.getElementById("my_video_1") as HTMLVideoElement;
    video.play();
  }

  constructor() {}

  ngOnInit(): void {}
}
