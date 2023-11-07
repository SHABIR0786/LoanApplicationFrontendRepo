import { Component, DoCheck, OnInit } from "@angular/core";
import { FormArray, FormBuilder, FormGroup } from "@angular/forms";
import { SiteSettingService } from "../services/siteSetting.service";
import {
  CommonHomeCard,
  HomeSettings,
  PageResult,
  Result,
  SiteSettings,
  Testimonial,
} from "../../common";

@Component({
  selector: "app-admin-panel",
  templateUrl: "./admin-panel.component.html",
  styleUrls: ["./admin-panel.component.css"],
})
export class AdminPanelComponent implements OnInit, DoCheck {
  pages: SiteSettings[] = [];
  currentPage?: number = null;
  HomePageForm: FormGroup;
  HomePage: HomeSettings;

  get MainCarousels(): FormArray {
    return this.HomePageForm.get("MainCarousels") as FormArray;
  }

  get Testimonials(): FormArray {
    return this.HomePageForm.get("Testimonials") as FormArray;
  }

  constructor(
    private fb: FormBuilder,
    private siteSettingService: SiteSettingService
  ) {
    this.HomePageForm = new FormGroup({
      MainCarousels: this.fb.array(
        new Array(1).fill(
          this.initMainCarousel({
            Description: "",
            FilePath: "",
            File: null,
            Header: "",
            SubHeader: "",
          })
        )
      ),
      FirstBlog: this.fb.group({
        Description: [""],
        FilePath: [""],
        File: null,
        Header: [""],
        SubHeader: [""],
      }),
      SecondBlog: this.fb.group({
        Description: [""],
        FilePath: [""],
        File: null,
        Header: [""],
        SubHeader: [""],
      }),
      ThirdBlog: this.fb.group({
        Description: [""],
        FilePath: [""],
        File: null,
        Header: [""],
        SubHeader: [""],
      }),
      ForthBlog: this.fb.group({
        Description: [""],
        FilePath: [""],
        File: null,
        Header: [""],
        SubHeader: [""],
      }),
      VideoSection: this.fb.group({
        Description: [""],
        FilePath: [""],
        File: null,
        Header: [""],
        SubHeader: [""],
      }),
      KnowAboutHeader: this.fb.control(""),

      ChecklistMainHeader: this.fb.control(""),
      Checklist: this.fb.group({
        Checklist1: [""],
        Checklist2: [""],
        Checklist3: [""],
        Checklist4: [""],
      }),
      Slogan: this.fb.control(""),
      SloganChecklist: this.fb.control(""),
      SloganImage: this.fb.control(""),
      Testimonials: this.fb.array(
        new Array(1).fill(
          this.initTestimonials({
            Author: "",
            Comment: "",
          })
        )
      ),
    });
  }

  ngOnInit(): void {
    this.siteSettingService
      .post("all", {
        maxResultCount: 10,
        skipCount: 0,
      })
      .subscribe((response: Result<PageResult<SiteSettings>>) => {
        this.pages = response.result.items;
        console.log(this.pages);
      });
  }

  initTestimonials(data: Testimonial) {
    const form = this.fb.group({
      Comment: [data.Comment],
      Author: [data.Author],
    });

    return form;
  }

  initMainCarousel(data: CommonHomeCard) {
    const form = this.fb.group({
      FilePath: [data.FilePath],
      File: null,
      Header: [data.Header],
      SubHeader: [data.SubHeader],
    });

    return form;
  }

  addMainCarousel() {
    this.MainCarousels.push(
      this.initMainCarousel({
        Description: "",
        FilePath: "",
        File: null,
        Header: "",
        SubHeader: "",
      })
    );
  }

  addTestimonial() {
    this.Testimonials.push(
      this.initTestimonials({
        Author: "",
        Comment: "",
      })
    );
  }

  setPageId(currentPage: number) {
    this.currentPage = currentPage;
    const page = this.pages.find((i) => i.id === currentPage);

    switch (page.pageIdentifier) {
      case "app/home":
        const data: HomeSettings = JSON.parse(page.pageSetting);
        this.HomePageForm = new FormGroup({
          MainCarousels: this.fb.array(
            data.MainCarousels.map((i) => this.initMainCarousel(i))
          ),
          FirstBlog: this.fb.group({
            FilePath: [data.FirstBlog.FilePath],
            File: null,
            Header: [data.FirstBlog.Header],
            SubHeader: [data.FirstBlog.SubHeader],
            Description: [data.FirstBlog.Description],
          }),
          SecondBlog: this.fb.group({
            FilePath: [data.FirstBlog.FilePath],
            File: null,
            Header: [data.FirstBlog.Header],
            SubHeader: [data.FirstBlog.SubHeader],
            Description: [data.FirstBlog.Description],
          }),
          ThirdBlog: this.fb.group({
            FilePath: [data.FirstBlog.FilePath],
            File: null,
            Header: [data.FirstBlog.Header],
            SubHeader: [data.FirstBlog.SubHeader],
            Description: [data.FirstBlog.Description],
          }),
          ForthBlog: this.fb.group({
            FilePath: [data.ForthBlog.FilePath],
            File: null,
            Header: [data.ForthBlog.Header],
            SubHeader: [data.ForthBlog.SubHeader],
            Description: [data.ForthBlog.Description],
          }),
          VideoSection: this.fb.group({
            FilePath: [data.VideoSection.FilePath],
            File: null,
            Header: [data.VideoSection.Header],
            SubHeader: [data.VideoSection.SubHeader],
            Description: [data.VideoSection.Description],
          }),
          KnowAboutHeader: this.fb.control(data.KnowAboutHeader),
          ChecklistMainHeader: this.fb.control(data.ChecklistMainHeader),
          Checklist: this.fb.group({
            Checklist1: [data.Checklist.Checklist1],
            Checklist2: [data.Checklist.Checklist2],
            Checklist3: [data.Checklist.Checklist3],
            Checklist4: [data.Checklist.Checklist4],
          }),
          Slogan: this.fb.control(data.Slogan),
          SloganChecklist: this.fb.control(data.SloganChecklist),
          SloganImage: this.fb.control(data.SloganImage),
          Testimonials: this.fb.array(
            data.Testimonials.map((i) => this.initTestimonials(i))
          ),
        });
        break;

      default:
        break;
    }
  }

  onSubmit() {}

  ngDoCheck() {
    this.HomePage = this.HomePageForm.value;
  }

  ConvertToInt(val: any) {
    return parseInt(val);
  }

  showPreview(event: { target: HTMLInputElement }, id: string, index: number) {
    const file = (event.target as HTMLInputElement).files[0];

    const reader = new FileReader();
    reader.onload = () => {
      const result = reader.result as string;
      switch (id) {
        case "MainCarousels":
          this.HomePage.MainCarousels[index].FilePath = result;
          break;
        case "FirstBlog":
          this.HomePage.FirstBlog.FilePath = result;
          break;
        case "SecondBlog":
          this.HomePage.SecondBlog.FilePath = result;
          break;
        case "ThirdBlog":
          this.HomePage.ThirdBlog.FilePath = result;
          break;
        case "ForthBlog":
          this.HomePage.ForthBlog.FilePath = result;
          break;
        default:
          break;
      }
    };
    reader.readAsDataURL(file);
  }
}
