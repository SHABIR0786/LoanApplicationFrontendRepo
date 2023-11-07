import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { Routes, RouterModule } from "@angular/router";
import { AdminDashboardComponent } from "@app/admin-panel/admin-dashboard/admin-dashboard.component";
import { AdminPanelLayoutComponent } from "@app/admin-panel/admin-panel-layout/admin-panel-layout.component";
import { AdminProfilePageComponent } from "@app/admin-panel/admin-profile-page/admin-profile-page.component";
import { BorrowerInfoComponent } from "@app/admin-panel/incomplete-loan-application/borrower-info/borrower-info.component";
import { FinancialInfoAssetsLiabilitiesComponent } from "@app/admin-panel/incomplete-loan-application/financial-info-assets-liabilities/financial-info-assets-liabilities.component";
import { FinancialInfoRealEstateComponent } from "@app/admin-panel/incomplete-loan-application/financial-info-real-estate/financial-info-real-estate.component";
import { LoanPropertyInfoComponent } from "@app/admin-panel/incomplete-loan-application/loan-property-info/loan-property-info.component";
import { DeclarationsComponent } from "@app/admin-panel/incomplete-loan-application/declarations/declarations.component";
import { AcknowledgementsAgreementsComponent } from "@app/admin-panel/incomplete-loan-application/acknowledgements-agreements/acknowledgements-agreements.component";
import { MilitaryServiceComponent } from "@app/admin-panel/incomplete-loan-application/military-service/military-service.component";
import { DemographicInfoComponent } from "@app/admin-panel/incomplete-loan-application/demographic-info/demographic-info.component";
import { LoanOriginatorInformationComponent } from "@app/admin-panel/incomplete-loan-application/loan-originator-information/loan-originator-information.component";
import { AdminSideMenuComponent } from "@app/admin-panel/admin-side-menu/admin-side-menu.component";
import { LoanApplicationListComponent } from "@app/admin-panel/loan-application-list/loan-application-list.component";
import { LoanProgressComponent } from "@app/admin-panel/loan-progress/loan-progress.component";
import { MainLoanProcessComponent } from "@app/admin-panel/loan-progress/main-loan-process/main-loan-process.component";
import { NotificationComponent } from "@app/admin-panel/notification/notification.component";
import { AppRouteGuard } from "@shared/auth/auth-route-guard";

const routes: Routes = [];

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: "",
        component: AdminPanelLayoutComponent,
        children: [
          {
            path: "home",
            component: AdminDashboardComponent,
            canActivate: [AppRouteGuard],
          },
          {
            path: "profile",
            component: AdminProfilePageComponent,
            canActivate: [AppRouteGuard],
          },
          {
            path: "loan-process",
            component: LoanProgressComponent,
            canActivate: [AppRouteGuard],
          },
          {
            path: "notification",
            component: NotificationComponent,
            canActivate: [AppRouteGuard],
          },
          {
            path: "loan-application-list",
            component: LoanApplicationListComponent,
            canActivate: [AppRouteGuard],
          },
          {
            path: "main-loan-process",
            component: MainLoanProcessComponent,
            canActivate: [AppRouteGuard],
          },
          {
            path: "incomplete-loan-application/borrower-info",
            component: BorrowerInfoComponent,
            canActivate: [AppRouteGuard],
          },
          {
            path:
              "incomplete-loan-application/financial-info-assets-liabilities",
            component: FinancialInfoAssetsLiabilitiesComponent,
            canActivate: [AppRouteGuard],
          },
          {
            path: "incomplete-loan-application/financial-info-real-estate",
            component: FinancialInfoRealEstateComponent,
            canActivate: [AppRouteGuard],
          },
          {
            path: "incomplete-loan-application/loan-property-info",
            component: LoanPropertyInfoComponent,
            canActivate: [AppRouteGuard],
          },
          {
            path: "incomplete-loan-application/declarations",
            component: DeclarationsComponent,
            canActivate: [AppRouteGuard],
          },
          {
            path: "incomplete-loan-application/acknowledgements-agreements",
            component: AcknowledgementsAgreementsComponent,
            canActivate: [AppRouteGuard],
          },
          {
            path: "incomplete-loan-application/military-service",
            component: MilitaryServiceComponent,
            canActivate: [AppRouteGuard],
          },
          {
            path: "incomplete-loan-application/demographic-info",
            component: DemographicInfoComponent,
            canActivate: [AppRouteGuard],
          },
          {
            path: "incomplete-loan-application/loan-originator-info",
            component: LoanOriginatorInformationComponent,
            canActivate: [AppRouteGuard],
          },
        ],
      },
    ]),
  ],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
