import { InputMaskModule } from "primeng/inputmask";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AdminRoutingModule } from "./admin-routing.module";
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
import { ModalModule } from "ngx-bootstrap/modal";
import { AdminPanelComponent } from "@app/admin-panel/admin-panel.component";
import { NotificationDialogComponent } from "./notification-dialog/notification-dialog.component";
import { BsDropdownConfig, BsDropdownModule } from "ngx-bootstrap/dropdown";
import { CollapseModule } from "ngx-bootstrap/collapse";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { InputNumberModule } from "primeng/inputnumber";
import { GoogleMapsModule } from "@angular/google-maps";
import { GooglePlaceModule } from "ngx-google-places-autocomplete";

@NgModule({
  declarations: [
    AdminPanelLayoutComponent,
    AdminProfilePageComponent,
    BorrowerInfoComponent,
    AdminSideMenuComponent,
    AdminPanelComponent,
    NotificationDialogComponent,
    FinancialInfoAssetsLiabilitiesComponent,
    FinancialInfoRealEstateComponent,
    LoanPropertyInfoComponent,
    DeclarationsComponent,
    AcknowledgementsAgreementsComponent,
    MilitaryServiceComponent,
    DemographicInfoComponent,
    LoanOriginatorInformationComponent,
  ],
  imports: [
    GooglePlaceModule,
    InputMaskModule,
    InputNumberModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AdminRoutingModule,
    ModalModule.forChild(),
    BsDropdownModule,
    CollapseModule,
  ],
  providers: [],
})
export class AdminModule {}
