import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Injector,
  OnInit,
} from "@angular/core";

import {
  NavigationEnd,
  PRIMARY_OUTLET,
  Router,
  RouterEvent,
} from "@angular/router";
import { MenuItem } from "@shared/layout/menu-item";
import { BehaviorSubject } from "rxjs";
import { filter } from "rxjs/operators";
import { AppComponentBase } from "@shared/app-component-base";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "loan-side-bar",
  templateUrl: "./side-bar.html",
  styleUrls: ["./side-bar.css"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoanSideBar extends AppComponentBase implements OnInit {
  menuItems: MenuItem[];
  menuItemsMap: { [key: number]: MenuItem } = {};
  activatedMenuItems: MenuItem[] = [];
  routerEvents: BehaviorSubject<RouterEvent> = new BehaviorSubject(undefined);
  isAlreadyActive: Boolean = false;
  homeRoute = "/app/home";
  building = "fas fa-building";
  dollar = " fas fa-dollar-sign";
  user = " fas fa-user";
  dollar2 = " fas fa-comments-dollar";
  coins = " fas fa-coins";
  briefCase = " fas fa-briefcase";
  meter = " fas fa-tachometer-alt";
  file = " fas fa-file-alt";
  contract = " fas fa-file-contract";
  signature = " fas fa-file-signature";
  summary = " fas fa-tasks";
  applyLoan = " fas fa-funnel-dollar";
  loanList = " fas fa-clipboard-list";
  Id = 8;

  constructor(
    injector: Injector,
    private router: Router,
    private _changeDetectorRef: ChangeDetectorRef,
    private _activatedRoute: ActivatedRoute
  ) {
    super(injector);
    this.router.events.subscribe(this.routerEvents);
  }

  ngOnInit(): void {
    this._activatedRoute.queryParams.subscribe(async (params) => {
      this.Id = params["id"];
    });
    this.menuItems = this.getMenuItems();
    var currentUrl = this.router.url !== "/" ? this.router.url : this.homeRoute;
    const primaryUrlSegmentGroup = this.router.parseUrl(currentUrl).root
      .children[PRIMARY_OUTLET];
    if (primaryUrlSegmentGroup) {
      this.activateMenuItems("/" + primaryUrlSegmentGroup.toString());
    }
    this.routerEvents
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((event) => {
        this.isAlreadyActive = false;
        const currentUrl = event.url !== "/" ? event.url : this.homeRoute;
        const primaryUrlSegmentGroup = this.router.parseUrl(currentUrl).root
          .children[PRIMARY_OUTLET];
        if (primaryUrlSegmentGroup) {
          this.activateMenuItems("/" + primaryUrlSegmentGroup.toString());
        }
        this.setBackgroundColor(this.menuItems);
      });
    this.setBackgroundColor(this.menuItems);
  }

  getMenuItems(): MenuItem[] {
    return [
      new MenuItem(this.l("Welcome"), "/app/welcome", this.dollar, ""),
      new MenuItem(
        this.l("Property Info"),
        "/app/loan-detail",
        this.dollar,
        ""
      ),
      new MenuItem(
        this.l("Personal Info"),
        "/app/personal-information",
        this.user,
        ""
      ),
      new MenuItem(this.l("Income"), "/app/expense", this.dollar2, ""),
      new MenuItem(this.l("Assets"), "/app/asset", this.coins, ""),
      new MenuItem(this.l("Government"), "/app/asset", this.coins, ""),
      new MenuItem(this.l("Credit Scores"), "/app/asset", this.coins, ""),

      // new MenuItem(
      //   this.l("Employment Income"),
      //   "/app/employment-income",
      //   this.briefCase,
      //   ""
      // ),
      // new MenuItem(this.l("Order Credit"), "/app/order-credit", this.meter, ""),
      // new MenuItem(
      //   this.l("Additional Detail"),
      //   "/app/additional-detail",
      //   this.file,
      //   ""
      // ),
      // new MenuItem(this.l("EConsent"), "/app/econsent", this.contract, ""),
      // new MenuItem(
      //   this.l("Declaration"),
      //   "/app/declaration",
      //   this.signature,
      //   ""
      // ),
      // new MenuItem(this.l("Summary"), "/app/summary", this.summary, "")
    ];
  }

  activateMenuItems(url: string): void {
    this.deactivateMenuItems(this.menuItems);
    this.activatedMenuItems = [];
    const foundedItems = this.findMenuItemsByUrl(url, this.menuItems);
    foundedItems.forEach((item) => {
      this.activateMenuItem(item);
    });
  }

  deactivateMenuItems(items: MenuItem[]): void {
    items.forEach((item: MenuItem) => {
      item.isActive = false;
      item.isCollapsed = true;
      if (item.children) {
        this.deactivateMenuItems(item.children);
      }
    });
  }

  findMenuItemsByUrl(
    url: string,
    items: MenuItem[],
    foundedItems: MenuItem[] = []
  ): MenuItem[] {
    items.forEach((item: MenuItem) => {
      if (item.route === url) {
        foundedItems.push(item);
      } else if (item.children) {
        this.findMenuItemsByUrl(url, item.children, foundedItems);
      }
    });
    return foundedItems;
  }

  activateMenuItem(item: MenuItem): void {
    item.isActive = true;

    if (item.children) {
      item.isCollapsed = false;
    }

    item.isBackgroundcolor = true;
    this.activatedMenuItems.push(item);
    if (item.parentId) {
      this.activateMenuItem(this.menuItemsMap[item.parentId]);
    }
    this._changeDetectorRef.markForCheck();
  }
  NextRoute(item) {
    this._activatedRoute.queryParams.subscribe(async (params) => {
      const id = params["id"];
      if (id) {
        this.router.navigate([item.route], {
          queryParams: {
            id: parseInt(id),
          },
        });
      }
    });
  }

  setBackgroundColor(items: MenuItem[]): void {
    var foundcurrentURL = false;
    const currentUrl = window.location.pathname;
    items.forEach((item: MenuItem) => {
      if (item.route == currentUrl) {
        foundcurrentURL = true;
      } else {
        if (foundcurrentURL) {
          item.isBackgroundcolor = false;
        } else {
          item.isBackgroundcolor = true;
        }
      }
    });
    this.menuItems = JSON.parse(JSON.stringify(items));
  }
}
