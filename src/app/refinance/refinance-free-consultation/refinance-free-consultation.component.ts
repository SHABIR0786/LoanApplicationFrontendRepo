import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-refinance-free-consultation",
  templateUrl: "./refinance-free-consultation.component.html",
  styleUrls: ["./refinance-free-consultation.component.css"],
})
export class RefinanceFreeConsultationComponent implements OnInit {
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
