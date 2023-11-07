import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { RefinancingRoutingModule } from "./refinancing-routing.module";
import { IndexComponent } from "./index.component";
import { ApplyNowRefinanceComponent } from "./apply-now-refinance/apply-now-refinance.component";
//import { ApplyNowPersonalInfoCoborrowerComponent } from './apply-now-personal-info-coborrower/apply-now-personal-info-coborrower.component';
import { WelcomeComponent } from "./welcome/welcome.component";
import { PropertyInfoComponent } from "./property-info/property-info.component";
import { PersonalInfoComponent } from "./personal-info/personal-info.component";
import { IncomeInfoComponent } from "./income-info/income-info.component";
import { AssetsInfoComponent } from "./assets-info/assets-info.component";
import { GovInfoComponent } from "./gov-info/gov-info.component";
import { CreditScoreComponent } from "./credit-score/credit-score.component";
import { ThanksComponent } from "./thanks/thanks.component";
import { OfflineService } from "./../../services/offline.service";
import { FormsModule } from "@angular/forms";
import { ApiService } from "@app/services/api.service";
import { SharedModule } from "@shared/shared.module";
import { MilitaryInfoComponent } from "./military-info/military-info.component";
@NgModule({
  declarations: [
    IndexComponent,
    ApplyNowRefinanceComponent,
    WelcomeComponent,
    PropertyInfoComponent,
    PersonalInfoComponent,
    IncomeInfoComponent,
    AssetsInfoComponent,
    GovInfoComponent,
    CreditScoreComponent,
    ThanksComponent,
    MilitaryInfoComponent,
  ],
  providers: [OfflineService, ApiService],
  imports: [CommonModule, RefinancingRoutingModule, FormsModule, SharedModule],
})
export class RefinancingModule {}
