import { Component, DoCheck, Input, OnInit } from "@angular/core";
import { CommonHomeCard } from "common";
import { CarouselConfig } from "ngx-bootstrap/carousel";

@Component({
  templateUrl: "./home-testmionals.html",
  styleUrls: ["./home-testmionals.css"],
  selector: "home-testmionals",
  providers: [
    {
      provide: CarouselConfig,
      useValue: { pauseOnFocus: true, showIndicators: false, itemsPerSlide: 1 },
    },
  ],
})
export class HomeTestmionals implements DoCheck, OnInit {
  @Input() data: CommonHomeCard[];

  ngOnInit(): void {}

  ngDoCheck(): void {}
}
