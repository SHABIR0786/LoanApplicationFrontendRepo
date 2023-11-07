import { Component, Injector, OnInit, Renderer2 } from "@angular/core";
import { Router, NavigationStart, NavigationEnd } from "@angular/router";
import { AppComponentBase } from "@shared/app-component-base";
import { SignalRAspNetCoreHelper } from "@shared/helpers/SignalRAspNetCoreHelper";
import { LayoutStoreService } from "@shared/layout/layout-store.service";
import { Location, PopStateEvent } from "@angular/common";
//import { OneSignal } from 'onesignal-ngx';
import { filter } from "rxjs/operators";

@Component({
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent extends AppComponentBase implements OnInit {
  title = "onesignal-app";
  sidebarExpanded: boolean;

  constructor(
    injector: Injector,
    private renderer: Renderer2,
    private _layoutStore: LayoutStoreService,
    public router: Router // private oneSignal: OneSignal
  ) {
    super(injector);
    // this.oneSignal.init({
    //   appId: "bb3098ab-49e0-44f8-897e-79f8bd859b59",
    //   allowLocalhostAsSecureOrigin: true,
    // });
  }
  get IsLoanApp(): boolean {
    return (
      this.router.url.includes("/app/welcome/how-can-we-help") ||
      this.router.url.includes(
        "/app/welcome/already-working-with-someone-from-ez"
      ) ||
      this.router.url.includes("/app/welcome/what-stage-are-you-in") ||
      this.router.url.includes("/app/assets/about-your-assets") ||
      this.router.url.includes("/app/assets/any-other-assets") ||
      this.router.url.includes("/app/assets/review-and-confirm-assets") ||
      this.router.url.includes("/app/credit-score/agree-to-following") ||
      this.router.url.includes("/app/credit-score/credit-confirmation") ||
      this.router.url.includes("/app/income/any-other-from-employement") ||
      this.router.url.includes("/app/income/employment-history") ||
      this.router.url.includes("/app/income/most-current-employer") ||
      this.router.url.includes("/app/income/other-sources-of-income") ||
      this.router.url.includes("/app/income/review-and-confirm") ||
      this.router.url.includes("/app/income/title-and-compensaton") ||
      this.router.url.includes("/app/military-info/branch-of-military") ||
      this.router.url.includes("/app/military-info/current-military-service") ||
      this.router.url.includes(
        "/app/military-info/current-or-former-member-of-military"
      ) ||
      this.router.url.includes("/app/military-info/ets-date") ||
      this.router.url.includes("/app/military-info/va-loan-previously") ||
      this.router.url.includes(
        "/app/military-info/who-will-be-willing-in-home"
      ) ||
      this.router.url.includes("/app/peronsal-info/applying-jointly-or-own") ||
      this.router.url.includes("/app/personal-info/borrower-info") ||
      this.router.url.includes("/app/personal-info/currently-living") ||
      this.router.url.includes(
        "/app/personal-info/dependents-will-be-living-in-your-home"
      ) ||
      this.router.url.includes("/app/personal-info/did-someone-reffer-you") ||
      this.router.url.includes("/app/personal-info/martial-status") ||
      this.router.url.includes("/app/personal-info/monthly-expenses") ||
      this.router.url.includes(
        "/app/personal-info/tell-us-a-little-bit-about-youself"
      ) ||
      this.router.url.includes("/app/property-info/address-of-new-home") ||
      this.router.url.includes("/app/property-info/credit-score") ||
      this.router.url.includes(
        "/app/property-info/details-about-the-contract"
      ) ||
      this.router.url.includes("/app/property-info/full-legal-name") ||
      this.router.url.includes("/app/property-info/hoa-dues") ||
      this.router.url.includes("/app/property-info/plan-on-using-new-home") ||
      this.router.url.includes(
        "/app/property-info/property-info-confirmation"
      ) ||
      this.router.url.includes("/app/property-info/purchase-price") ||
      this.router.url.includes("/app/property-info/what-type-of-home") ||
      this.router.url.includes("/app/thanks-for-applying") ||
      this.router.url.includes(
        "/app/us-government/just-few-more-yes-or-no-questions"
      ) ||
      this.router.url.includes(
        "/app/us-government/us-government-require-questions"
      )
    );
  }
  get IsLoanForm(): boolean {
    return (
      this.router.url.includes("/app/welcome") ||
      this.router.url.includes("/app/loan-detail") ||
      this.router.url.includes("/app/personal-information") ||
      this.router.url.includes("/app/expense") ||
      this.router.url.includes("/app/asset") ||
      this.router.url.includes("/app/employment-income") ||
      this.router.url.includes("/app/order-credit") ||
      this.router.url.includes("/app/additional-detail") ||
      this.router.url.includes("/app/declaration") ||
      this.router.url.includes("/app/summary") ||
      this.router.url.includes("/app/econsent")
    );
  }

  get IsRefinanceLoanOptions(): boolean {
    return (
      this.router.url.includes("/app/refinance-animated") ||
      this.router.url.includes("/app/refinance-loan-option-step1") ||
      this.router.url.includes("/app/refinance-loan-option-step2") ||
      this.router.url.includes("/app/refinance-loan-option-step3") ||
      this.router.url.includes("/app/refinance-loan-option-step4") ||
      this.router.url.includes("/app/refinance-loan-option-step5") ||
      this.router.url.includes("/app/refinance-loan-option-step6") ||
      this.router.url.includes("/app/refinance-loan-option-step7") ||
      this.router.url.includes("/app/refinance-loan-option-step8") ||
      this.router.url.includes("/app/refinance-loan-option-step9") ||
      this.router.url.includes("/app/refinance-loan-option-step10") ||
      this.router.url.includes("/app/refinance-loan-option-step11") ||
      this.router.url.includes("/app/refinance-loan-option-step12") ||
      this.router.url.includes("/app/refinance-loan-option-step13") ||
      this.router.url.includes("/app/refinance-loan-option-step14") ||
      this.router.url.includes("/app/refinance-loan-option-step15") ||
      this.router.url.includes("/app/refinance-loan-option-step16") ||
      this.router.url.includes("/app/refinance-loan-option-step17") ||
      this.router.url.includes("/app/refinance-loan-option-step18") ||
      this.router.url.includes("/app/animated") ||
      this.router.url.includes("/app/refinance-step1") ||
      this.router.url.includes("/app/refinance-step2") ||
      this.router.url.includes("/app/refinance-step3") ||
      this.router.url.includes("/app/refinance-step4") ||
      this.router.url.includes("/app/refinance-step5") ||
      this.router.url.includes("/app/refinance-step6") ||
      this.router.url.includes("/app/refinance-step7") ||
      this.router.url.includes("/app/refinance-step8") ||
      this.router.url.includes("/app/refinance-step9") ||
      this.router.url.includes("/app/refinance-step10") ||
      this.router.url.includes("/app/refinance-step11") ||
      this.router.url.includes("/app/refinance-step12") ||
      this.router.url.includes("/app/refinance-step13") ||
      this.router.url.includes("/app/refinance-step14") ||
      this.router.url.includes("/app/refinance-step15") ||
      this.router.url.includes("/app/refinance-step16") ||
      this.router.url.includes("/app/refinance-step17") ||
      this.router.url.includes("/app/refinance-step18") ||
      this.router.url.includes("/app/refinance-step19")
    );
  }

  get IsBuyaHome(): boolean {
    return (
      this.router.url.includes("/app/buy-a-home-animated") ||
      this.router.url.includes("/app/buy-a-home-animated-step1") ||
      this.router.url.includes("/app/buy-a-home-animated-step2") ||
      this.router.url.includes("/app/buy-a-home-animated-step3") ||
      this.router.url.includes("/app/buy-a-home-animated-step4") ||
      this.router.url.includes("/app/buy-a-home-animated-step5") ||
      this.router.url.includes("/app/buy-a-home-animated-step6") ||
      this.router.url.includes("/app/buy-a-home-animated-step7") ||
      this.router.url.includes("/app/buy-a-home-animated-step8") ||
      this.router.url.includes("/app/buy-a-home-animated-step9") ||
      this.router.url.includes("/app/buy-a-home-animated-step10") ||
      this.router.url.includes("/app/buy-a-home-animated-step11") ||
      this.router.url.includes("/app/buy-a-home-animated-step12") ||
      this.router.url.includes("/app/buy-a-home-animated-step13") ||
      this.router.url.includes("/app/buy-a-home-animated-step14") ||
      this.router.url.includes("/app/buy-a-home-animated-step15") ||
      this.router.url.includes("/app/buy-a-home-animated-step16") ||
      this.router.url.includes("/app/buy-a-home-animated-step17") ||
      this.router.url.includes("/app/buy-a-home-animated-step18") ||
      this.router.url.includes("/app/buy-a-home-animated-step19") ||
      this.router.url.includes("/app/buy-a-home-loan-options-animated-step1") ||
      this.router.url.includes("/app/buy-a-home-loan-options-animated-step2") ||
      this.router.url.includes("/app/buy-a-home-loan-options-animated-step3") ||
      this.router.url.includes("/app/buy-a-home-loan-options-animated-step4") ||
      this.router.url.includes("/app/buy-a-home-loan-options-animated-step5") ||
      this.router.url.includes("/app/buy-a-home-loan-options-animated-step6") ||
      this.router.url.includes("/app/buy-a-home-loan-options-animated-step7") ||
      this.router.url.includes("/app/buy-a-home-loan-options-animated-step8") ||
      this.router.url.includes("/app/buy-a-home-loan-options-animated-step9") ||
      this.router.url.includes(
        "/app/buy-a-home-loan-options-animated-step10"
      ) ||
      this.router.url.includes(
        "/app/buy-a-home-loan-options-animated-step11"
      ) ||
      this.router.url.includes(
        "/app/buy-a-home-loan-options-animated-step12"
      ) ||
      this.router.url.includes(
        "/app/buy-a-home-loan-options-animated-step13"
      ) ||
      this.router.url.includes(
        "/app/buy-a-home-loan-options-animated-step14"
      ) ||
      this.router.url.includes(
        "/app/buy-a-home-loan-options-animated-step15"
      ) ||
      this.router.url.includes(
        "/app/buy-a-home-loan-options-animated-step16"
      ) ||
      this.router.url.includes(
        "/app/buy-a-home-loan-options-animated-step17"
      ) ||
      this.router.url.includes(
        "/app/buy-a-home-loan-options-animated-step18"
      ) ||
      this.router.url.includes(
        "/app/buy-a-home-loan-options-animated-step19"
      ) ||
      this.router.url.includes("/app/buy-a-home-loan-options-animated")
    );
  }

  ngOnInit(): void {
    this.renderer.addClass(document.body, "sidebar-mini");

    this._layoutStore.sidebarExpanded.subscribe((value) => {
      this.sidebarExpanded = value;
    });

    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      });
  }

  toggleSidebar(): void {
    this._layoutStore.setSidebarExpanded(!this.sidebarExpanded);
  }
}
