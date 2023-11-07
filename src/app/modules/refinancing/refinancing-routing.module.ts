import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AssetsInfoComponent } from "./assets-info/assets-info.component";
import { CreditScoreComponent } from "./credit-score/credit-score.component";
import { GovInfoComponent } from "./gov-info/gov-info.component";
import { IncomeInfoComponent } from "./income-info/income-info.component";
import { IndexComponent } from "./index.component";
import { MilitaryInfoComponent } from "./military-info/military-info.component";
import { PersonalInfoComponent } from "./personal-info/personal-info.component";
import { PropertyInfoComponent } from "./property-info/property-info.component";
import { ThanksComponent } from "./thanks/thanks.component";
import { WelcomeComponent } from "./welcome/welcome.component";

const routes: Routes = [
  {
    path: "",
    component: IndexComponent,
    children: [
      {
        path: "",
        redirectTo: "welcome/1",
        pathMatch: "full",
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
        path: "military-info/:number",
        component: MilitaryInfoComponent,
      },
      {
        path: "personal-info/:number",
        component: PersonalInfoComponent,
      },
      {
        path: "income/:number",
        component: IncomeInfoComponent,
      },
      {
        path: "assets-info/:number",
        component: AssetsInfoComponent,
      },
      {
        path: "gov/:number",
        component: GovInfoComponent,
      },
      {
        path: "credit-score/:number",
        component: CreditScoreComponent,
      },
      {
        path: "thanks",
        component: ThanksComponent,
      }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RefinancingRoutingModule {}
