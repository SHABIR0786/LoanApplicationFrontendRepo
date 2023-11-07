import { Component, Input, OnInit } from "@angular/core";
import { CommonHomeCard } from "common";

@Component({
  templateUrl: "./home-main-carousel.html",
  styleUrls: ["./home-main-carousel.css"],
  selector: "home-main-carousel",
})
export class HomeMainCarousel implements OnInit {
  @Input() data: CommonHomeCard[];
  parsedData: CommonHomeCard[];

  ngOnInit(): void {
    this.data = this.data.map((i) => {
      i.background = `url('${i.FilePath}')`;
      return i;
    });
  }
}
