import {
  Component,
  Injector,
  ChangeDetectionStrategy,
  OnInit,
  DoCheck,
  EventEmitter,
} from "@angular/core";

import {
  FormBuilder,
  ReactiveFormsModule,
  FormsModule,
  NgControl,
  FormGroup,
  FormControl,
} from "@angular/forms";
import { AppComponentBase } from "@shared/app-component-base";
import { appModuleAnimation } from "@shared/animations/routerTransition";
import { HomeSettings, Result, SiteSettings } from "common";
import { SiteSettingService } from "@app/services/siteSetting.service";

@Component({
  templateUrl: "./home.component.html",
  animations: [appModuleAnimation()],
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ["./home.component.css"],
})
export class HomeComponent extends AppComponentBase implements OnInit, DoCheck {
  constructor(
    injector: Injector,
    private siteSettingService: SiteSettingService
  ) {
    super(injector);
  }
  form: FormGroup;
  playVideo() {
    var ImagePoster = document.querySelector(".img-poster") as HTMLElement;
    ImagePoster.style.display = "none";
    var video = document.getElementById("my_video_1") as HTMLVideoElement;
    video.play();
  }

  isDataLoaded: boolean = false;
  data: HomeSettings;
  contactForm = {
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: null,
  };
  sloganChecklist: string[];
  mortgagePurposes = [];
  howDoYouWantToBorrows = [];

  // FORM SECTION
  loadMortgagePurposes() {
    this.mortgagePurposes = [
      { id: 1, name: "Found A Home/ Made An Offer" },
      { id: 2, name: "Still Looking For A Home" },
      { id: 3, name: "Refinance" },
      { id: 4, name: "Refinance With Cashout" },
    ];
  }

  loadHowDoYouWantToBorrows() {
    this.howDoYouWantToBorrows = [
      { id: 1, name: "found" },
      { id: 2, name: "still" },
      { id: 3, name: "refinance" },
      { id: 4, name: "With" },
    ];
  }

  ngDoCheck() {}

  ngOnInit() {
    this.siteSettingService
      .get(`services/app/SiteSettingServices/Get?Id=${1}`)
      .subscribe((response: Result<SiteSettings>) => {
        const homeSettings: HomeSettings = JSON.parse(
          response.result.pageSetting
        );
        this.data = homeSettings;
        this.data.FirstBlog.background = `url('${this.data.FirstBlog.FilePath}')`;
        this.data.SecondBlog.background = `url('${this.data.SecondBlog.FilePath}')`;
        this.sloganChecklist = this.data.SloganChecklist.split("\n");
        this.isDataLoaded = true;
      });

    this.loadHowDoYouWantToBorrows();
    this.loadMortgagePurposes();
    this.initForm();
  }
  initForm() {
    this.form = new FormGroup({
      firstName: new FormControl(this.contactForm.firstName),
      lastName: new FormControl(this.contactForm.lastName),
      email: new FormControl(this.contactForm.email),
      phoneNumber: new FormControl(this.contactForm.phoneNumber),
    });
  }
  ngAfterViewInit() {
    $(document).ready(function () {
      $(".mortgage-list li").click(function () {
        $(".mortgage-list li").removeClass("active");
        $(this).addClass("active");
        var imgsrc = $(this).find(".linkimg").attr("src");
        var imgsrcId = $(this).attr("id");

        if (imgsrcId === "link1") {
          $(".mortgage-content .contentarea").addClass("d-none");
          $(".mortgage-content .contentarea").removeClass("d-block");
          $(".mortgage-content .contentarea:first-child()")
            .addClass("d-block")
            .removeClass("d-none");
        }
        if (imgsrcId === "link2") {
          $(".mortgage-content .contentarea").addClass("d-none");
          $(".mortgage-content .contentarea").removeClass("d-block");
          $(".mortgage-content .contentarea:nth-child(2)")
            .addClass("d-block")
            .removeClass("d-none");
        }
        if (imgsrcId === "link3") {
          $(".mortgage-content .contentarea").addClass("d-none");
          $(".mortgage-content .contentarea").removeClass("d-block");
          $(".mortgage-content .contentarea:nth-child(3)")
            .addClass("d-block")
            .removeClass("d-none");
        }
        if (imgsrcId === "link4") {
          $(".mortgage-content .contentarea").addClass("d-none");
          $(".mortgage-content .contentarea").removeClass("d-block");
          $(".mortgage-content .contentarea:nth-child(4)")
            .addClass("d-block")
            .removeClass("d-none");
        }
        if (imgsrcId === "link5") {
          $(".mortgage-content .contentarea").addClass("d-none");
          $(".mortgage-content .contentarea").removeClass("d-block");
          $(".mortgage-content .contentarea:nth-child(5)")
            .addClass("d-block")
            .removeClass("d-none");
        }
        $("#image")
          .fadeOut(500, function () {
            $("#image").attr("src", imgsrc);
          })
          .fadeIn(100);
      });
    });

    $(".b-search").click(function () {
      // console.log('search');
      // $(".blog-search").toggle("search-width");
      /* $('.searchtop input').focus();*/
    });

    $(".btn-search").click(function () {
      $(".searchtop .inpSearch").addClass("inpwidth");
      $(".searchtop input").focus();
    });

    $(document).mouseup(function (e) {
      var container = $(".inpSearch");
      // if the target of the click isn't the container nor a descendant of the container
      // if (!container.is(e.target) && container.has(e.target).length === 0) {
      //   container.removeClass("inpwidth");
      // }
    });

    $(".searchcross").click(function () {
      $(".searchtop .inpSearch").removeClass("inpwidth");
    });

    function changeImage() {
      var img = document.getElementById("topimg");
      img.style.backgroundImage = "url('" + images[x] + "')";
      x++;
      if (x >= images.length) {
        x = 0;
      }
      fadeImg(img, 5500, true);

      setTimeout("changeImage()", 5500);
    }

    function fadeImg(el, val, fade) {
      if (fade === true) {
        val--;
      } else {
        val++;
      }
      if (val > 0 && val < 5) {
        // el.style.opacity = val / 100;
        setTimeout(function () {
          fadeImg(el, val, fade);
        }, 5500);
        setTimeout("slide()", 3000);
        setTimeout("slidedesc()", 3000);
      }
    }

    var images = [],
      x = 0;
    images[0] = "assets/images/California.jpg";
    images[1] = "assets/images/California1.jpg";
    images[2] = "assets/images/California2.jpg";
    images[3] = "assets/images/California3.jpg";

    var cnt = 0,
      texts = [],
      texts2 = [],
      cnt1 = 0;

    // save the texts in an array for re-use
    $(".textContent").each(function () {
      texts[cnt++] = $(this).html();
    });
    function slide() {
      if (cnt >= texts.length) cnt = 0;
      $("#textMessage").html(texts[cnt++]);
      $("#textMessage")
        .fadeIn("normal")
        .animate({ opacity: 1 }, 4800)
        .fadeOut("normal", function () {
          return slide();
        });
    }

    $(".bannerdesc").each(function () {
      texts2[cnt1++] = $(this).html();
    });

    function slidedesc() {
      if (cnt1 >= texts2.length) cnt1 = 0;
      $("#textDetail").html(texts2[cnt1++]);
      $("#textDetail")
        .fadeIn("normal")
        .animate({ opacity: 1 }, 4800)
        .fadeOut("normal", function () {
          return slidedesc();
        });
    }

    slide();
    slidedesc();
    changeImage();
  }
}
