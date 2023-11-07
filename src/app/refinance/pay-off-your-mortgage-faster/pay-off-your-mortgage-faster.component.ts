import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-pay-off-your-mortgage-faster",
  templateUrl: "./pay-off-your-mortgage-faster.component.html",
  styleUrls: ["./pay-off-your-mortgage-faster.component.css"],
})
export class PayOffYourMortgageFasterComponent implements OnInit {
  ReadMore: boolean = true;

  visible: boolean = false;

  playVideo(){
    var ImagePoster = document.querySelector('.img-poster') as HTMLElement;
    ImagePoster.style.display = "none";
     var video = document.getElementById('my_video_1') as HTMLVideoElement;
     video.play();
   }

  onclick() {
    this.ReadMore = !this.ReadMore;
    this.visible = !this.visible;
  }
  constructor() {}

  ngOnInit(): void {}
}
