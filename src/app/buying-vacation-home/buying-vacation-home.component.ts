import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-buying-vacation-home",
  templateUrl: "./buying-vacation-home.component.html",
  styleUrls: ["./buying-vacation-home.component.css"],
})
export class BuyingVacationHomeComponent implements OnInit {
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
