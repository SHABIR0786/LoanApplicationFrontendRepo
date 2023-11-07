import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-real-state-investor",
  templateUrl: "./real-state-investor.component.html",
  styleUrls: ["./real-state-investor.component.css"],
})
export class RealStateInvestorComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  ReadMore:boolean = true
  visible:boolean =false

  readmore(){
    this.ReadMore = !this.ReadMore
    this.visible =!this.visible
  }
  playVideo(){
    var ImagePoster = document.querySelector('.img-poster') as HTMLElement;
    ImagePoster.style.display = "none";
     var video = document.getElementById('my_video_1') as HTMLVideoElement;
     video.play();
   }
}
