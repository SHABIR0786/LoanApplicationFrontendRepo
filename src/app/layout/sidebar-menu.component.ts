import { ChangeDetectorRef, Component, Injector, OnInit } from "@angular/core";
import { AppComponentBase } from "@shared/app-component-base";
import {
  NavigationEnd,
  PRIMARY_OUTLET,
  Router,
  RouterEvent,
} from "@angular/router";
import { BehaviorSubject } from "rxjs";
import { filter } from "rxjs/operators";
import { MenuItem } from "@shared/layout/menu-item";
@Component({
  selector: "sidebar-menu",
  templateUrl: "./sidebar-menu.component.html",
})
export class SidebarMenuComponent extends AppComponentBase implements OnInit {
  menuItems: MenuItem[];
  menuItemsMap: { [key: number]: MenuItem } = {};
  activatedMenuItems: MenuItem[] = [];
  routerEvents: BehaviorSubject<RouterEvent> = new BehaviorSubject(undefined);
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

  constructor(
    injector: Injector,
    private router: Router,
    private _changeDetectorRef: ChangeDetectorRef
  ) {
    super(injector);
    this.router.events.subscribe(this.routerEvents);
  }

  ngOnInit(): void {
    this.menuItems = this.getMenuItems();
    this.patchMenuItems(this.menuItems);
    this.routerEvents
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((event) => {
        const currentUrl = event.url !== "/" ? event.url : this.homeRoute;
        const primaryUrlSegmentGroup = this.router.parseUrl(currentUrl).root
          .children[PRIMARY_OUTLET];
        if (primaryUrlSegmentGroup) {
          this.activateMenuItems("/" + primaryUrlSegmentGroup.toString());
        }
      });
  }

  getMenuItems(): MenuItem[] {
    return [
      new MenuItem(this.l("HomePage"), "/app/home", "fas fa-home"),
      new MenuItem(
        this.l("Tenants"),
        "/app/tenants",
        this.building,
        "Pages.Tenants"
      ),
      new MenuItem(
        this.l("Users"),
        "/app/users",
        "fas fa-users",
        "Pages.Users"
      ),
      new MenuItem(
        this.l("Roles"),
        "/app/roles",
        "fas fa-theater-masks",
        "Pages.Roles"
      ),
      new MenuItem(this.l("Loan List"), "/app/loan-list", this.loanList, ""),
      new MenuItem(this.l("Apply Loan"), "", this.applyLoan, "", [
        new MenuItem(
          this.l("Loan Detail"),
          "/app/loan-detail",
          this.dollar,
          ""
        ),
        new MenuItem(
          this.l("Personal Information"),
          "/app/personal-information",
          this.user,
          ""
        ),
        new MenuItem(this.l("Expense"), "/app/expense", this.dollar2, ""),

        new MenuItem(this.l("Asset"), "/app/asset", this.coins, ""),
        new MenuItem(
          this.l("Employment Income"),
          "/app/employment-income",
          this.briefCase,
          ""
        ),
        new MenuItem(
          this.l("Order Credit"),
          "/app/order-credit",
          this.meter,
          ""
        ),
        new MenuItem(
          this.l("Additional Detail"),
          "/app/additional-detail",
          this.file,
          ""
        ),
        new MenuItem(this.l("EConsent"), "/app/econsent", this.contract, ""),
        new MenuItem(
          this.l("Declaration"),
          "/app/declaration",
          this.signature,
          ""
        ),
        new MenuItem(this.l("Summary"), "/app/summary", this.summary, ""),
      ]),
      new MenuItem(this.l("About"), "/app/about", "fas fa-info-circle"),
      new MenuItem(this.l("MultiLevelMenu"), "", "fas fa-circle", "", [
        new MenuItem("ASP.NET Boilerplate", "", "fas fa-dot-circle", "", [
          new MenuItem(
            "Home",
            "https://aspnetboilerplate.com?ref=abptmpl",
            "far fa-circle"
          ),
          new MenuItem(
            "Templates",
            "https://aspnetboilerplate.com/Templates?ref=abptmpl",
            "far fa-circle"
          ),
          new MenuItem(
            "Samples",
            "https://aspnetboilerplate.com/Samples?ref=abptmpl",
            "far fa-circle"
          ),
          new MenuItem(
            "Documents",
            "https://aspnetboilerplate.com/Pages/Documents?ref=abptmpl",
            "far fa-circle"
          ),
        ]),
        new MenuItem("ASP.NET Zero", "", "fas fa-dot-circle", "", [
          new MenuItem(
            "Home",
            "https://aspnetzero.com?ref=abptmpl",
            "far fa-circle"
          ),
          new MenuItem(
            "Features",
            "https://aspnetzero.com/Features?ref=abptmpl",
            "far fa-circle"
          ),
          new MenuItem(
            "Pricing",
            "https://aspnetzero.com/Pricing?ref=abptmpl#pricing",
            "far fa-circle"
          ),
          new MenuItem(
            "Faq",
            "https://aspnetzero.com/Faq?ref=abptmpl",
            "far fa-circle"
          ),
          new MenuItem(
            "Documents",
            "https://aspnetzero.com/Documents?ref=abptmpl",
            "far fa-circle"
          ),
        ]),
      ]),
    ];
  }

  patchMenuItems(items: MenuItem[], parentId?: number): void {
    items.forEach((item: MenuItem, index: number) => {
      item.id = parentId ? Number(parentId + "" + (index + 1)) : index + 1;
      if (parentId) {
        item.parentId = parentId;
      }
      if (parentId || item.children) {
        this.menuItemsMap[item.id] = item;
      }
      if (item.children) {
        this.patchMenuItems(item.children, item.id);
      }
    });
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
    this.activatedMenuItems.push(item);
    if (item.parentId) {
      this.activateMenuItem(this.menuItemsMap[item.parentId]);
    }

    this._changeDetectorRef.markForCheck();
  }

  isMenuItemVisible(item: MenuItem): boolean {
    if (!item.permissionName) {
      return true;
    }
    return this.permission.isGranted(item.permissionName);
  }
}
