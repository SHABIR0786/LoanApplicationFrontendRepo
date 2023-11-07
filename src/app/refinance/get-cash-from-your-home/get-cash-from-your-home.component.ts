import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-get-cash-from-your-home",
  templateUrl: "./get-cash-from-your-home.component.html",
  styleUrls: ["./get-cash-from-your-home.component.css"],
})
export class GetCashFromYourHomeComponent implements OnInit {
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
