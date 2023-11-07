import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AdminPanelLayoutComponent } from "./admin-panel-layout.component";
import { AdimPanelPageComponent } from "../adim-panel-page/adim-panel-page.component";
import { AdminSideMenuComponent } from "../admin-side-menu/admin-side-menu.component";
import { AdminProfilePageComponent } from "../admin-profile-page/admin-profile-page.component";
import { AdminDashboardComponent } from "../admin-dashboard/admin-dashboard.component";
import { Router } from "@angular/router";

@NgModule({
  declarations: [AdminDashboardComponent],
  imports: [CommonModule],
})
export class AdminPanelLayoutModule {}
