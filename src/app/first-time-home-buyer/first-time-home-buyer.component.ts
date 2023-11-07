import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-first-time-home-buyer",
  templateUrl: "./first-time-home-buyer.component.html",
  styleUrls: ["./first-time-home-buyer.component.css"],
})
export class FirstTimeHomeBuyerComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  ReadMore:boolean = true

  visible:boolean = false

  readmore(){
    this.ReadMore = !this.ReadMore
    this.visible = !this.visible
  }
  playVideo(){
    var ImagePoster = document.querySelector('.img-poster') as HTMLElement;
    ImagePoster.style.display = "none";
     var video = document.getElementById('my_video_1') as HTMLVideoElement;
     video.play();
   }
}
