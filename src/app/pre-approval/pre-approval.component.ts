import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-pre-approval",
  templateUrl: "./pre-approval.component.html",
  styleUrls: ["./pre-approval.component.css"],
})
export class PreApprovalComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  ReadMore:boolean = true

  visible:boolean = false

  playVideo(){
   var ImagePoster = document.querySelector('.img-poster') as HTMLElement;
   ImagePoster.style.display = "none";
    var video = document.getElementById('my_video_1') as HTMLVideoElement;
    video.play();
  }
  readmore(){
    this.ReadMore = !this.ReadMore
    this.visible = !this.visible
  }
}
