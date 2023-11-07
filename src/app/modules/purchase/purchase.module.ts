import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { PurchaseRoutingModule } from "./purchase-routing.module";
import { IndexComponent } from "./index.component";
import { ApplyNowComponent } from "./apply-now/apply-now.component";
import { SignedPurchaseComponent } from "./signed-purchase/signed-purchase.component";
import { PurchaseNoComponent } from "./purchase-no/purchase-no.component";
import { PurchasePropYesComponent } from "./purchase-prop-yes/purchase-prop-yes.component";
import { PurchaseMilitaryInfoComponent } from "./purchase-military-info/purchase-military-info.component";
import { PurchaseMilitaryPersonalComponent } from "./purchase-military-personal/purchase-military-personal.component";
import { PurchaseNonMilComponent } from "./purchase-non-mil/purchase-non-mil.component";
import { WelcomeComponent } from "./welcome/welcome.component";
import { PropertyInfoComponent } from "./property-info/property-info.component";
import { IncomeInfoComponent } from "./income-info/income-info.component";
import { AssetsInfoComponent } from "./assets-info/assets-info.component";
import { GovernmentComponent } from "./government/government.component";
//import { ApplyNowRefinanceComponent } from './apply-now-refinance/apply-now-refinance.component';
import { OfflineService } from "./../../services/offline.service";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { ApiService } from "@app/services/api.service";
import { PersonalInfoComponent } from "./personal-info/personal-info.component";
import { SharedModule } from "@shared/shared.module";
import { MatchPasswordDirective } from "@shared/directives/match-password.directive";
import { CreditScoreComponent } from "./credit-score/credit-score.component";
import { MilitaryInfoComponent } from "./military-info/military-info.component";
import { ApplynowFooterComponent } from "./applynow-footer/applynow-footer.component";
@NgModule({
  declarations: [
    IndexComponent,
    ApplyNowComponent,
    SignedPurchaseComponent,
    PurchaseNoComponent,
    PurchasePropYesComponent,
    PurchaseMilitaryInfoComponent,
    PurchaseMilitaryPersonalComponent,
    PurchaseNonMilComponent,
    WelcomeComponent,
    PropertyInfoComponent,
    IncomeInfoComponent,
    AssetsInfoComponent,
    GovernmentComponent,
    PersonalInfoComponent,
    // MatchPasswordDirective,
    CreditScoreComponent,
    MilitaryInfoComponent,
    ApplynowFooterComponent,
  ],
  providers: [OfflineService, ApiService],
  imports: [
    CommonModule,
    PurchaseRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
  ],
})
export class PurchaseModule {}
