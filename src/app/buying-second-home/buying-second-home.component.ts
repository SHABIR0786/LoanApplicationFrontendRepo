import { AfterViewInit, Component, OnInit } from "@angular/core";
import { Console } from "console";

@Component({
  selector: "app-buying-second-home",
  templateUrl: "./buying-second-home.component.html",
  styleUrls: ["./buying-second-home.component.css"],
})
export class BuyingSecondHomeComponent implements OnInit, AfterViewInit {
  constructor() {}

  ngOnInit(): void {
    
  }
 ngAfterViewInit(){

 }
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
