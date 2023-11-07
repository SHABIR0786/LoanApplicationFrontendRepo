import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { ApplyNowComponent } from "./apply-now/apply-now.component";
import { AssetsInfoComponent } from "./assets-info/assets-info.component";
import { GovernmentComponent } from "./government/government.component";
import { IncomeInfoComponent } from "./income-info/income-info.component";
import { IndexComponent } from "./index.component";
import { PropertyInfoComponent } from "./property-info/property-info.component";
import { PurchaseMilitaryInfoComponent } from "./purchase-military-info/purchase-military-info.component";
import { PurchaseMilitaryPersonalComponent } from "./purchase-military-personal/purchase-military-personal.component";
import { PurchaseNoComponent } from "./purchase-no/purchase-no.component";
import { PurchaseNonMilComponent } from "./purchase-non-mil/purchase-non-mil.component";
import { PurchasePropYesComponent } from "./purchase-prop-yes/purchase-prop-yes.component";
import { SignedPurchaseComponent } from "./signed-purchase/signed-purchase.component";
import { WelcomeComponent } from "./welcome/welcome.component";
import { PersonalInfoComponent } from "./personal-info/personal-info.component";
import { CreditScoreComponent } from "./credit-score/credit-score.component";
import { MilitaryInfoComponent } from "./military-info/military-info.component";
const routes: Routes = [
  {
    path: "",
    component: IndexComponent,
    children: [
      {
        path: "",
        component: ApplyNowComponent,
      },
      {
        path: "welcome/:number",
        component: WelcomeComponent,
      },
      {
        path: "property-info/:number",
        component: PropertyInfoComponent,
      },
      {
        path: "personal-info/:number",
        component: PersonalInfoComponent,
      },
      {
        path: "military-info/:number",
        component: MilitaryInfoComponent,
      },
      {
        path: "income-info/:number",
        component: IncomeInfoComponent,
      },
      {
        path: "assets-info/:number",
        component: AssetsInfoComponent,
      },
      {
        path: "gov/:number",
        component: GovernmentComponent,
      },
      {
        path: "credit-score/:number",
        component: CreditScoreComponent,
      },
      {
        path: "signed-purchase",
        component: SignedPurchaseComponent,
      },
      {
        path: "purchase-non-mil",
        component: PurchaseNonMilComponent,
      },
      {
        path: "purchase-mil-personal-info",
        component: PurchaseMilitaryPersonalComponent,
      },
      {
        path: "purchase-mil-info/:number",
        component: PurchaseMilitaryInfoComponent,
      },
      {
        path: "purchase-no-mil",
        component: PurchasePropYesComponent,
      },
      {
        path: "purchasing-no/:number",
        component: PurchaseNoComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PurchaseRoutingModule {}
