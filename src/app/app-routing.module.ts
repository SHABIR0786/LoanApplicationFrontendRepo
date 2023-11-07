import { GetLoanAppResolve } from "./resolver/loan-app-get-resolve";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { AppComponent } from "./app.component";
import { AppRouteGuard } from "@shared/auth/auth-route-guard";
import { HomeComponent } from "./home/home.component";
import { AboutComponent } from "./about/about.component";
import { UsersComponent } from "./users/users.component";
import { TenantsComponent } from "./tenants/tenants.component";
import { RolesComponent } from "app/roles/roles.component";
import { ChangePasswordComponent } from "./users/change-password/change-password.component";
import { LoanApplicationComponent } from "./loan-application/loan-application.component";
import { WelcomeComponent } from "./loan-application/welcome/welcome.component";
import { LoanDetailsComponent } from "./loan-application/loan-details/loan-details.component";
import { PersonalInformationComponent } from "./loan-application/personal-information/personal-information.component";
import { ExpensesComponent } from "./loan-application/expenses/expenses.component";
import { AssetsComponent } from "./loan-application/assets/assets.component";
import { EmploymentIncomeComponent } from "./loan-application/employment-income/employment-income.component";
import { SummaryComponent } from "./loan-application/summary/summary.component";
import { DeclarationComponent } from "./loan-application/declaration/declaration.component";
import { EconsentComponent } from "./loan-application/econsent/econsent.component";
import { OrderCreditComponent } from "./loan-application/order-credit/order-credit.component";
import { AdditionalDetailsComponent } from "./loan-application/additional-details/additional-details.component";
import { LoanListComponent } from "./loan-application/loan-list/loan-list.component";
import { AdminPanelComponent } from "./admin-panel/admin-panel.component";
// New routes added by shabir
import { HomeAffordabilityCalculatorComponent } from "./calculators/home-affordability-calculator/home-affordability-calculator.component";
import { MortgageCalculatorComponent } from "./calculators/mortgage-calculator/mortgage-calculator.component";
import { RefinanceCalculatorComponent } from "./calculators/refinance-calculator/refinance-calculator.component";
import { AmortizationComponent } from "./calculators/amortization/amortization.component";
import { AffordabilityComponent } from "./calculators/affordability/affordability.component";
import { ViewAllCalculatorsComponent } from "./calculators/view-all-calculators/view-all-calculators.component";
import { BuyingHomeGuideComponent } from "./buying-home-guide/buying-home-guide.component";
import { FirstTimeHomeBuyerComponent } from "./first-time-home-buyer/first-time-home-buyer.component";
import { BuyingSecondHomeComponent } from "./buying-second-home/buying-second-home.component";
import { BuyingVacationHomeComponent } from "./buying-vacation-home/buying-vacation-home.component";
import { HomeBuyingFreeConsultationComponent } from "./home-buying-free-consultation/home-buying-free-consultation.component";
import { MovingAndBuyingHomeComponent } from "./moving-and-buying-home/moving-and-buying-home.component";
import { PreApprovalComponent } from "./pre-approval/pre-approval.component";
import { RealStateInvestorComponent } from "./real-state-investor/real-state-investor.component";
import { LowerYourPaymentComponent } from "./refinance/lower-your-payment/lower-your-payment.component";
import { GetCashFromYourHomeComponent } from "./refinance/get-cash-from-your-home/get-cash-from-your-home.component";
import { ConsolidateYourDebitComponent } from "./refinance/consolidate-your-debit/consolidate-your-debit.component";
import { KeepYourPaymentFromRaisingComponent } from "./refinance/keep-your-payment-from-raising/keep-your-payment-from-raising.component";
import { PayOffYourMortgageFasterComponent } from "./refinance/pay-off-your-mortgage-faster/pay-off-your-mortgage-faster.component";
import { RefinanceFreeConsultationComponent } from "./refinance/refinance-free-consultation/refinance-free-consultation.component";
import { RefinanceInvestmentPropertyComponent } from "./refinance/refinance-investment-property/refinance-investment-property.component";
import { RefinanceWithHARPComponent } from "./refinance/refinance-with-harp/refinance-with-harp.component";
// Loan Options
import { LoanOptionsComponent } from "./loan-options/loan-options.component";
import { AdjustableRateMortgageComponent } from "./loan-options/adjustable-rate-mortgage/adjustable-rate-mortgage.component";
import { FhaLoansComponent } from "./loan-options/fha-loans/fha-loans.component";
import { FifteenYearFixedMortgageComponent } from "./loan-options/fifteen-year-fixed-mortgage/fifteen-year-fixed-mortgage.component";
import { HarpRefinanceComponent } from "./loan-options/harp-refinance/harp-refinance.component";
import { JumboLoanComponent } from "./loan-options/jumbo-loan/jumbo-loan.component";
import { ThirtyYearFixedMortgageComponent } from "./loan-options/thirty-year-fixed-mortgage/thirty-year-fixed-mortgage.component";
import { BlogComponent } from "./blog/blog.component";
import { AnimatedComponent } from "./refinance/animated/animated.component";
import { Step1Component } from "./refinance/step1/step1.component";
import { Step2Component } from "./refinance/step2/step2.component";
import { Step3Component } from "./refinance/step3/step3.component";
import { Step4Component } from "./refinance/step4/step4.component";
import { Step5Component } from "./refinance/step5/step5.component";
import { Step6Component } from "./refinance/step6/step6.component";
import { Step7Component } from "./refinance/step7/step7.component";
import { Step8Component } from "./refinance/step8/step8.component";
import { Step9Component } from "./refinance/step9/step9.component";
import { Step10Component } from "./refinance/step10/step10.component";
import { Step11Component } from "./refinance/step11/step11.component";
import { Step12Component } from "./refinance/step12/step12.component";
import { Step13Component } from "./refinance/step13/step13.component";
import { Step14Component } from "./refinance/step14/step14.component";
import { Step15Component } from "./refinance/step15/step15.component";
import { Step16Component } from "./refinance/step16/step16.component";
import { Step17Component } from "./refinance/step17/step17.component";
import { Step18Component } from "./refinance/step18/step18.component";
import { Step19Component } from "./refinance/step19/step19.component";
import { AboutUsComponent } from "./about-us/about-us.component";
import { RequestAMortgageComponent } from "./about-us/request-a-mortgage/request-a-mortgage.component";
import { ContactUsComponent } from "./about-us/contact-us/contact-us.component";
import { LicenseInfoComponent } from "./about-us/license-info/license-info.component";
import { MortgageGlossaryComponent } from "./about-us/mortgage-glossary/mortgage-glossary.component";
import { CurrentHomeLoanRatesComponent } from "./current-home-loan-rates/current-home-loan-rates.component";
import { EmailAndTextUpdatesComponent } from "./email-and-text-updates/email-and-text-updates.component";
import { FinalizingMortgagePreApprovalComponent } from "./buying-home-guide/finalizing-mortgage-pre-approval/finalizing-mortgage-pre-approval.component";
import { DecidingMortgageComponent } from "./buying-home-guide/deciding-mortgage/deciding-mortgage.component";
import { PreparingForMortgageComponent } from "./buying-home-guide/preparing-for-mortgage/preparing-for-mortgage.component";
import { SelectionRealEstateAgentComponent } from "./buying-home-guide/selection-real-estate-agent/selection-real-estate-agent.component";
import { HouseHuntingComponent } from "./buying-home-guide/house-hunting/house-hunting.component";
import { MakingACompetitiveOfferComponent } from "./buying-home-guide/making-a-competitive-offer/making-a-competitive-offer.component";
import { UnderwritingProcessComponent } from "./buying-home-guide/underwriting-process/underwriting-process.component";
import { PreparingToCloseComponent } from "./buying-home-guide/preparing-to-close/preparing-to-close.component";
import { WalkThroughAndClosingDayComponent } from "./buying-home-guide/walk-through-and-closing-day/walk-through-and-closing-day.component";
import { MakingYourFirstMortgagePaymentComponent } from "./buying-home-guide/making-your-first-mortgage-payment/making-your-first-mortgage-payment.component";
import { ManagingYourMortgageComponent } from "./buying-home-guide/managing-your-mortgage/managing-your-mortgage.component";
import { VaLoanComponent } from "./loan-options/va-loan/va-loan.component";
import { AmortizationResultComponent } from "./calculators/amortization/amortization-result/amortization-result.component";
import { RentVsBuyCalculatorComponent } from "./calculators/rent-vs-buy-calculator/rent-vs-buy-calculator.component";
import { RefinanceLoanOptionsStep1Component } from "./Refinance_loan_option_animated/step1/step1.component";
import { RefinanceLoanOptionsStep2Component } from "./Refinance_loan_option_animated/step2/step2.component";
import { RefinanceLoanOptionsStep3Component } from "./Refinance_loan_option_animated/step3/step3.component";
import { RefinanceLoanOptionsStep4Component } from "./Refinance_loan_option_animated/step4/step4.component";
import { RefinanceLoanOptionsStep5Component } from "./Refinance_loan_option_animated/step5/step5.component";
import { AnimatedOneComponent } from "./Refinance_loan_option_animated/animated/animated.component";
import { RefinanceLoanOptionsStep6Component } from "./Refinance_loan_option_animated/step6/step6.component";
import { RefinanceLoanOptionsStep7Component } from "./Refinance_loan_option_animated/step7/step7.component";
import { RefinanceLoanOptionsStep8Component } from "./Refinance_loan_option_animated/step8/step8.component";
import { RefinanceLoanOptionsStep9Component } from "./Refinance_loan_option_animated/step9/step9.component";
import { RefinanceLoanOptionsStep10Component } from "./Refinance_loan_option_animated/step10/step10.component";
import { RefinanceLoanOptionsStep11Component } from "./Refinance_loan_option_animated/step11/step11.component";
import { RefinanceLoanOptionsStep12Component } from "./Refinance_loan_option_animated/step12/step12.component";
import { RefinanceLoanOptionsStep13Component } from "./Refinance_loan_option_animated/step13/step13.component";
import { RefinanceLoanOptionsStep14Component } from "./Refinance_loan_option_animated/step14/step14.component";
import { RefinanceLoanOptionsStep15Component } from "./Refinance_loan_option_animated/step15/step15.component";
import { RefinanceLoanOptionsStep16Component } from "./Refinance_loan_option_animated/step16/step16.component";
import { RefinanceLoanOptionsStep17Component } from "./Refinance_loan_option_animated/step17/step17.component";
import { RefinanceLoanOptionsStep18Component } from "./Refinance_loan_option_animated/step18/step18.component";
import { BuyAHomeComponent } from "./buy-a-home/buy-a-home.component";
import { AnimatedStep1Component } from "./buy-a-home/animated-step1/animated-step1.component";
import { AnimatedStep2Component } from "./buy-a-home/animated-step2/animated-step2.component";
import { AnimatedStep3Component } from "./buy-a-home/animated-step3/animated-step3.component";
import { AnimatedStep4Component } from "./buy-a-home/animated-step4/animated-step4.component";
import { AnimatedStep5Component } from "./buy-a-home/animated-step5/animated-step5.component";
import { AnimatedStep6Component } from "./buy-a-home/animated-step6/animated-step6.component";
import { AnimatedStep7Component } from "./buy-a-home/animated-step7/animated-step7.component";
import { AnimatedStep8Component } from "./buy-a-home/animated-step8/animated-step8.component";
import { AnimatedStep9Component } from "./buy-a-home/animated-step9/animated-step9.component";
import { AnimatedStep10Component } from "./buy-a-home/animated-step10/animated-step10.component";
import { AnimatedStep11Component } from "./buy-a-home/animated-step11/animated-step11.component";
import { AnimatedStep12Component } from "./buy-a-home/animated-step12/animated-step12.component";
import { AnimatedStep13Component } from "./buy-a-home/animated-step13/animated-step13.component";
import { AnimatedStep14Component } from "./buy-a-home/animated-step14/animated-step14.component";
import { AnimatedStep15Component } from "./buy-a-home/animated-step15/animated-step15.component";
import { AnimatedStep16Component } from "./buy-a-home/animated-step16/animated-step16.component";
import { AnimatedStep17Component } from "./buy-a-home/animated-step17/animated-step17.component";
import { AnimatedStep18Component } from "./buy-a-home/animated-step18/animated-step18.component";
import { AnimatedStep19Component } from "./buy-a-home/animated-step19/animated-step19.component";
import { LoneOptionAnimatedComponent } from "./Buy_a_Home_Loan _Options/lone-option-animated/lone-option-animated.component";
import { LoneOptionStep1Component } from "./Buy_a_Home_Loan _Options/lone-option-step1/lone-option-step1.component";
import { LoneOptionStep2Component } from "./Buy_a_Home_Loan _Options/lone-option-step2/lone-option-step2.component";
import { LoneOptionStep3Component } from "./Buy_a_Home_Loan _Options/lone-option-step3/lone-option-step3.component";
import { LoneOptionStep4Component } from "./Buy_a_Home_Loan _Options/lone-option-step4/lone-option-step4.component";
import { LoneOptionStep5Component } from "./Buy_a_Home_Loan _Options/lone-option-step5/lone-option-step5.component";
import { LoneOptionStep6Component } from "./Buy_a_Home_Loan _Options/lone-option-step6/lone-option-step6.component";
import { LoneOptionStep7Component } from "./Buy_a_Home_Loan _Options/lone-option-step7/lone-option-step7.component";
import { LoneOptionStep8Component } from "./Buy_a_Home_Loan _Options/lone-option-step8/lone-option-step8.component";
import { LoneOptionStep9Component } from "./Buy_a_Home_Loan _Options/lone-option-step9/lone-option-step9.component";
import { LoneOptionStep10Component } from "./Buy_a_Home_Loan _Options/lone-option-step10/lone-option-step10.component";
import { LoneOptionStep11Component } from "./Buy_a_Home_Loan _Options/lone-option-step11/lone-option-step11.component";
import { LoneOptionStep12Component } from "./Buy_a_Home_Loan _Options/lone-option-step12/lone-option-step12.component";
import { LoneOptionStep13Component } from "./Buy_a_Home_Loan _Options/lone-option-step13/lone-option-step13.component";
import { LoneOptionStep14Component } from "./Buy_a_Home_Loan _Options/lone-option-step14/lone-option-step14.component";
import { RefinanceGuideComponent } from "./refinance-guide/refinance-guide.component";
import { PrepareForYourMortgageRefinanceComponent } from "./refinance-guide/prepare-for-your-mortgage-refinance/prepare-for-your-mortgage-refinance.component";
import { ExploreYourRefinanceOptionsComponent } from "./refinance-guide/explore-your-refinance-options/explore-your-refinance-options.component";
import { ApplyForARefinanceLoanComponent } from "./refinance-guide/apply-for-a-refinance-loan/apply-for-a-refinance-loan.component";
import { TheAppraisalUnderwritingProcessComponent } from "./refinance-guide/the-appraisal-underwriting-process/the-appraisal-underwriting-process.component";
import { CloseOnTheLoanComponent } from "./refinance-guide/close-on-the-loan/close-on-the-loan.component";
import { ManageYourRefinanceComponent } from "./refinance-guide/manage-your-refinance/manage-your-refinance.component";
import { AdminPanelLayoutComponent } from "./admin-panel/admin-panel-layout/admin-panel-layout.component";
import { AdimPanelPageComponent } from "./admin-panel/adim-panel-page/adim-panel-page.component";
// New Application component ..
import { HowCanWeHelpComponent } from "./animated_loan_application/welcome/how-can-we-help/how-can-we-help.component";
import { WhatStageAreYouInComponent } from "./animated_loan_application/welcome/what-stage-are-you-in/what-stage-are-you-in.component";
import { AlreadyWorkingWithSomeoneFromEzComponent } from "./animated_loan_application/welcome/already-working-with-someone-from-ez/already-working-with-someone-from-ez.component";
import { AddressOfNewHomeComponent } from "./animated_loan_application/property-info/address-of-new-home/address-of-new-home.component";
import { DetailsAboutTheContractComponent } from "./animated_loan_application/property-info/details-about-the-contract/details-about-the-contract.component";
import { PurchasePriceComponent } from "./animated_loan_application/property-info/purchase-price/purchase-price.component";
import { CreditScoreComponent } from "./animated_loan_application/property-info/credit-score/credit-score.component";
import { FullLegalNameComponent } from "./animated_loan_application/property-info/full-legal-name/full-legal-name.component";
import { WhatTypeOfHomeComponent } from "./animated_loan_application/property-info/what-type-of-home/what-type-of-home.component";
import { HOADuesComponent } from "./animated_loan_application/property-info/hoa-dues/hoa-dues.component";
import { PlanOnUsingNewHomeComponent } from "./animated_loan_application/property-info/plan-on-using-new-home/plan-on-using-new-home.component";
import { CurrentOrFormerMemberOfMilitaryComponent } from "./animated_loan_application/military-info/current-or-former-member-of-military/current-or-former-member-of-military.component";
import { PropertyInfoConfirmationComponent } from "./animated_loan_application/property-info/property-info-confirmation/property-info-confirmation.component";
import { PersonalInfoConfirmationComponent } from "./animated_loan_application/personal-info/personal-info-confirmation/personal-info-confirmation.component";
import { CurrentMilitaryServiceComponent } from "./animated_loan_application/military-info/current-military-service/current-military-service.component";
import { BranchOfMilitaryComponent } from "./animated_loan_application/military-info/branch-of-military/branch-of-military.component";
import { EtsDateComponent } from "./animated_loan_application/military-info/ets-date/ets-date.component";
import { VaLoanPreviouslyComponent } from "./animated_loan_application/military-info/va-loan-previously/va-loan-previously.component";
import { WhoWillBeWillingInHomeComponent } from "./animated_loan_application/military-info/who-will-be-willing-in-home/who-will-be-willing-in-home.component";
import { TellUsALittleBitAboutYourselfComponent } from "./animated_loan_application/personal-info/tell-us-a-little-bit-about-yourself/tell-us-a-little-bit-about-yourself.component";
import { DidSomeoneRefferYouComponent } from "./animated_loan_application/personal-info/did-someone-reffer-you/did-someone-reffer-you.component";
import { ApplyingJointlyOrOwnComponent } from "./animated_loan_application/personal-info/applying-jointly-or-own/applying-jointly-or-own.component";
import { MartialStatusComponent } from "./animated_loan_application/personal-info/martial-status/martial-status.component";
import { DependentsWillBeLivingInYourHomeComponent } from "./animated_loan_application/personal-info/dependents-will-be-living-in-your-home/dependents-will-be-living-in-your-home.component";
import { CurrentlyLivingComponent } from "./animated_loan_application/personal-info/currently-living/currently-living.component";
import { MonthlyExpensesComponent } from "./animated_loan_application/personal-info/monthly-expenses/monthly-expenses.component";
import { BorrowerInfoComponent } from "./animated_loan_application/personal-info/borrower-info/borrower-info.component";
import { EmployementHistoryComponent } from "./animated_loan_application/income/employement-history/employement-history.component";
import { MostCurrentEmployerComponent } from "./animated_loan_application/income/most-current-employer/most-current-employer.component";
import { TitleAndCompensationComponent } from "./animated_loan_application/income/title-and-compensation/title-and-compensation.component";
import { AnyOtherFormEmploymentComponent } from "./animated_loan_application/income/any-other-form-employment/any-other-form-employment.component";
import { OtherSourcesOfIncomeComponent } from "./animated_loan_application/income/other-sources-of-income/other-sources-of-income.component";
import { ReviewAndConfirmComponent } from "./animated_loan_application/income/review-and-confirm/review-and-confirm.component";
import { AboutYourAssetsComponent } from "./animated_loan_application/assets/about-your-assets/about-your-assets.component";
import { AnyOtherAssetsComponent } from "./animated_loan_application/assets/any-other-assets/any-other-assets.component";
import { ReviewAndConfirmAssetsComponent } from "./animated_loan_application/assets/review-and-confirm-assets/review-and-confirm-assets.component";
import { UsGovernmentRequireQuestionsComponent } from "./animated_loan_application/us-government/us-government-require-questions/us-government-require-questions.component";
import { JustFewMoreYesOrNoQuestionsComponent } from "./animated_loan_application/us-government/just-few-more-yes-or-no-questions/just-few-more-yes-or-no-questions.component";
import { AgreeToFollowingComponent } from "./animated_loan_application/credit-score/agree-to-following/agree-to-following.component";
import { CreditConfirmationComponent } from "./animated_loan_application/credit-score/credit-confirmation/credit-confirmation.component";
import { ThanksForApplyingComponent } from "./animated_loan_application/thanks-for-applying/thanks-for-applying.component";
import { AdminProfilePageComponent } from "./admin-panel/admin-profile-page/admin-profile-page.component";
import { LoanProgressComponent } from "./admin-panel/loan-progress/loan-progress.component";

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: "purchase",
        loadChildren: () =>
          import("./../app/modules/purchase/purchase.module").then(
            (x) => x.PurchaseModule
          ),
      },
      {
        path: "refinance",
        loadChildren: () =>
          import("./../app/modules/refinancing/refinancing.module").then(
            (x) => x.RefinancingModule
          ),
      },
      {
        path: "",
        component: AppComponent,
        children: [
          {
            path: "home",
            component: HomeComponent,
            canActivate: [AppRouteGuard],
          },
          {
            path: "users",
            component: UsersComponent,
            data: { permission: "Pages.Users" },
            canActivate: [AppRouteGuard],
          },
          {
            path: "roles",
            component: RolesComponent,
            data: { permission: "Pages.Roles" },
            canActivate: [AppRouteGuard],
          },
          {
            path: "tenants",
            component: TenantsComponent,
            data: { permission: "Pages.Tenants" },
            canActivate: [AppRouteGuard],
          },
          {
            path: "loan-list",
            component: LoanListComponent,
            data: { permission: "" },
            canActivate: [AppRouteGuard],
          },
          {
            path: "apply-loan",
            component: LoanApplicationComponent,
            data: { permission: "" },
            canActivate: [AppRouteGuard],
          },
          {
            path: "welcome",
            component: WelcomeComponent,
            data: { permission: "" },
            canActivate: [AppRouteGuard],
            resolve: {
              loanApp: GetLoanAppResolve,
            },
          },
          {
            path: "loan-detail",
            component: LoanDetailsComponent,
            data: { permission: "" },
            canActivate: [AppRouteGuard],
            resolve: {
              loanApp: GetLoanAppResolve,
            },
          },
          {
            path: "personal-information",
            component: PersonalInformationComponent,
            data: { permission: "" },
            canActivate: [AppRouteGuard],
            resolve: {
              loanApp: GetLoanAppResolve,
            },
          },
          {
            path: "expense",
            component: ExpensesComponent,
            data: { permission: "" },
            canActivate: [AppRouteGuard],
            resolve: {
              loanApp: GetLoanAppResolve,
            },
          },
          {
            path: "asset",
            component: AssetsComponent,
            data: { permission: "" },
            canActivate: [AppRouteGuard],
            resolve: {
              loanApp: GetLoanAppResolve,
            },
          },
          {
            path: "employment-income",
            component: EmploymentIncomeComponent,
            data: { permission: "" },
            canActivate: [AppRouteGuard],
            resolve: {
              loanApp: GetLoanAppResolve,
            },
          },
          {
            path: "order-credit",
            component: OrderCreditComponent,
            data: { permission: "" },
            canActivate: [AppRouteGuard],
            resolve: {
              loanApp: GetLoanAppResolve,
            },
          },
          {
            path: "additional-detail",
            component: AdditionalDetailsComponent,
            data: { permission: "" },
            canActivate: [AppRouteGuard],
            resolve: {
              loanApp: GetLoanAppResolve,
            },
          },
          {
            path: "econsent",
            component: EconsentComponent,
            data: { permission: "" },
            canActivate: [AppRouteGuard],
            resolve: {
              loanApp: GetLoanAppResolve,
            },
          },
          {
            path: "declaration",
            component: DeclarationComponent,
            data: { permission: "" },
            canActivate: [AppRouteGuard],
            resolve: {
              loanApp: GetLoanAppResolve,
            },
          },
          {
            path: "summary",
            component: SummaryComponent,
            data: { permission: "" },
            canActivate: [AppRouteGuard],
            resolve: {
              loanApp: GetLoanAppResolve,
            },
          },
          { path: "about", component: AboutComponent },
          { path: "update-password", component: ChangePasswordComponent },
          {
            path: "admin-panel",
            component: AdminPanelComponent,
          },
          {
            path: "home-affordability-calculator",
            component: HomeAffordabilityCalculatorComponent,
            canActivate: [AppRouteGuard],
          },
          {
            path: "mortgage-calculator",
            component: MortgageCalculatorComponent,
            canActivate: [AppRouteGuard],
          },
          {
            path: "refinance-calculator",
            component: RefinanceCalculatorComponent,
            canActivate: [AppRouteGuard],
          },
          {
            path: "amortization",
            component: AmortizationComponent,
            canActivate: [AppRouteGuard],
          },
          {
            path: "affordability",
            component: AffordabilityComponent,
            canActivate: [AppRouteGuard],
          },
          {
            path: "view-all-calculators",
            component: ViewAllCalculatorsComponent,
            canActivate: [AppRouteGuard],
          },
          {
            path: "buying-home-guide",
            component: BuyingHomeGuideComponent,
            canActivate: [AppRouteGuard],
          },
          {
            path: "buying-second-home",
            component: BuyingSecondHomeComponent,
            canActivate: [AppRouteGuard],
          },
          {
            path: "buying-vacation-home",
            component: BuyingVacationHomeComponent,
            canActivate: [AppRouteGuard],
          },
          {
            path: "first-time-home-buyer",
            component: FirstTimeHomeBuyerComponent,
            canActivate: [AppRouteGuard],
          },
          {
            path: "home-buying-free-consultation",
            component: HomeBuyingFreeConsultationComponent,
            canActivate: [AppRouteGuard],
          },
          {
            path: "moving-and-buying-home",
            component: MovingAndBuyingHomeComponent,
            canActivate: [AppRouteGuard],
          },
          {
            path: "pre-approval",
            component: PreApprovalComponent,
            canActivate: [AppRouteGuard],
          },
          {
            path: "real-state-investor",
            component: RealStateInvestorComponent,
            canActivate: [AppRouteGuard],
          },
          {
            path: "consolidate-your-debt",
            component: ConsolidateYourDebitComponent,
            canActivate: [AppRouteGuard],
          },
          {
            path: "get-cash-from-home",
            component: GetCashFromYourHomeComponent,
            canActivate: [AppRouteGuard],
          },
          {
            path: "keep-your-payment-raising",
            component: KeepYourPaymentFromRaisingComponent,
            canActivate: [AppRouteGuard],
          },
          {
            path: "lower-your-payment",
            component: LowerYourPaymentComponent,
            canActivate: [AppRouteGuard],
          },
          {
            path: "pay-off-your-mortgage-faster",
            component: PayOffYourMortgageFasterComponent,
            canActivate: [AppRouteGuard],
          },
          {
            path: "refinance-free-consultation",
            component: RefinanceFreeConsultationComponent,
            canActivate: [AppRouteGuard],
          },
          {
            path: "refinance-investment-property",
            component: RefinanceInvestmentPropertyComponent,
            canActivate: [AppRouteGuard],
          },
          {
            path: "refinance-with-harp",
            component: RefinanceWithHARPComponent,
            canActivate: [AppRouteGuard],
          },
          {
            path: "adjustable-rate-mortgage",
            component: AdjustableRateMortgageComponent,
            canActivate: [AppRouteGuard],
          },
          {
            path: "fha-loans",
            component: FhaLoansComponent,
            canActivate: [AppRouteGuard],
          },
          {
            path: "fifteen-year-fixed-mortgage",
            component: FifteenYearFixedMortgageComponent,
            canActivate: [AppRouteGuard],
          },
          {
            path: "jumbo-loan",
            component: JumboLoanComponent,
            canActivate: [AppRouteGuard],
          },
          {
            path: "thirty-year-fixed-mortgage",
            component: ThirtyYearFixedMortgageComponent,
            canActivate: [AppRouteGuard],
          },
          {
            path: "loan-options",
            component: LoanOptionsComponent,
            canActivate: [AppRouteGuard],
          },
          {
            path: "va-loan",
            component: VaLoanComponent,
            canActivate: [AppRouteGuard],
          },
          {
            path: "blog",
            component: BlogComponent,
            canActivate: [AppRouteGuard],
          },

          {
            path: "about-us",
            component: AboutUsComponent,
            canActivate: [AppRouteGuard],
          },
          {
            path: "request-a-mortgage",
            component: RequestAMortgageComponent,
            canActivate: [AppRouteGuard],
          },
          {
            path: "contact-us",
            component: ContactUsComponent,
            canActivate: [AppRouteGuard],
          },
          {
            path: "license-info",
            component: LicenseInfoComponent,
            canActivate: [AppRouteGuard],
          },
          {
            path: "mortgage-glossary",
            component: MortgageGlossaryComponent,
            canActivate: [AppRouteGuard],
          },
          {
            path: "current-home-loan-rates",
            component: CurrentHomeLoanRatesComponent,
            canActivate: [AppRouteGuard],
          },
          {
            path: "email-and-text-updates",
            component: EmailAndTextUpdatesComponent,
            canActivate: [AppRouteGuard],
          },
          {
            path: "finalizing-mortgage-pre-approval",
            component: FinalizingMortgagePreApprovalComponent,
            canActivate: [AppRouteGuard],
          },
          {
            path: "preparing-for-morgage",
            component: PreparingForMortgageComponent,
            canActivate: [AppRouteGuard],
          },
          {
            path: "deciding-mortgage",
            component: DecidingMortgageComponent,
            canActivate: [AppRouteGuard],
          },
          {
            path: "selection-real-estate-agent",
            component: SelectionRealEstateAgentComponent,
            canActivate: [AppRouteGuard],
          },
          {
            path: "house-hunting",
            component: HouseHuntingComponent,
            canActivate: [AppRouteGuard],
          },
          {
            path: "making-a-competitive-offer",
            component: MakingACompetitiveOfferComponent,
            canActivate: [AppRouteGuard],
          },
          {
            path: "underwriting-process",
            component: UnderwritingProcessComponent,
            canActivate: [AppRouteGuard],
          },
          {
            path: "preparing-to-close",
            component: PreparingToCloseComponent,
            canActivate: [AppRouteGuard],
          },
          {
            path: "walk-through-and-closing-day",
            component: WalkThroughAndClosingDayComponent,
            canActivate: [AppRouteGuard],
          },
          {
            path: "making-your-first-mortgage-payment",
            component: MakingYourFirstMortgagePaymentComponent,
            canActivate: [AppRouteGuard],
          },
          {
            path: "managing-your-mortgage",
            component: ManagingYourMortgageComponent,
            canActivate: [AppRouteGuard],
          },
          {
            path: "amortization-result",
            component: AmortizationResultComponent,
            canActivate: [AppRouteGuard],
          },
          {
            path: "rent-vs-buy-calculator",
            component: RentVsBuyCalculatorComponent,
            canActivate: [AppRouteGuard],
          },
          {
            path: "animated",
            component: AnimatedComponent,
            canActivate: [AppRouteGuard],
          },
          {
            path: "refinance-step1",
            component: Step1Component,
            canActivate: [AppRouteGuard],
          },
          {
            path: "refinance-step2",
            component: Step2Component,
            canActivate: [AppRouteGuard],
          },
          {
            path: "refinance-step3",
            component: Step3Component,
            canActivate: [AppRouteGuard],
          },
          {
            path: "refinance-step4",
            component: Step4Component,
            canActivate: [AppRouteGuard],
          },
          {
            path: "refinance-step5",
            component: Step5Component,
            canActivate: [AppRouteGuard],
          },
          {
            path: "refinance-step6",
            component: Step6Component,
            canActivate: [AppRouteGuard],
          },
          {
            path: "refinance-step7",
            component: Step7Component,
            canActivate: [AppRouteGuard],
          },
          {
            path: "refinance-step8",
            component: Step8Component,
            canActivate: [AppRouteGuard],
          },
          {
            path: "refinance-step9",
            component: Step9Component,
            canActivate: [AppRouteGuard],
          },
          {
            path: "refinance-step10",
            component: Step10Component,
            canActivate: [AppRouteGuard],
          },
          {
            path: "refinance-step11",
            component: Step11Component,
            canActivate: [AppRouteGuard],
          },
          {
            path: "refinance-step12",
            component: Step12Component,
            canActivate: [AppRouteGuard],
          },
          {
            path: "refinance-step13",
            component: Step13Component,
            canActivate: [AppRouteGuard],
          },
          {
            path: "refinance-step14",
            component: Step14Component,
            canActivate: [AppRouteGuard],
          },
          {
            path: "refinance-step15",
            component: Step15Component,
            canActivate: [AppRouteGuard],
          },
          {
            path: "refinance-step16",
            component: Step16Component,
            canActivate: [AppRouteGuard],
          },
          {
            path: "refinance-step17",
            component: Step17Component,
            canActivate: [AppRouteGuard],
          },
          {
            path: "refinance-step18",
            component: Step18Component,
            canActivate: [AppRouteGuard],
          },
          {
            path: "refinance-step19",
            component: Step19Component,
            canActivate: [AppRouteGuard],
          },
          // Refinance Loan Options Steps
          {
            path: "refinance-animated",
            component: AnimatedOneComponent,
            canActivate: [AppRouteGuard],
          },
          {
            path: "refinance-loan-option-step1",
            component: RefinanceLoanOptionsStep1Component,
            canActivate: [AppRouteGuard],
          },
          {
            path: "refinance-loan-option-step2",
            component: RefinanceLoanOptionsStep2Component,
            canActivate: [AppRouteGuard],
          },
          {
            path: "refinance-loan-option-step3",
            component: RefinanceLoanOptionsStep3Component,
            canActivate: [AppRouteGuard],
          },
          {
            path: "refinance-loan-option-step4",
            component: RefinanceLoanOptionsStep4Component,
            canActivate: [AppRouteGuard],
          },
          {
            path: "refinance-loan-option-step5",
            component: RefinanceLoanOptionsStep5Component,
            canActivate: [AppRouteGuard],
          },
          {
            path: "refinance-loan-option-step6",
            component: RefinanceLoanOptionsStep6Component,
            canActivate: [AppRouteGuard],
          },
          {
            path: "refinance-loan-option-step7",
            component: RefinanceLoanOptionsStep7Component,
            canActivate: [AppRouteGuard],
          },
          {
            path: "refinance-loan-option-step8",
            component: RefinanceLoanOptionsStep8Component,
            canActivate: [AppRouteGuard],
          },
          {
            path: "refinance-loan-option-step9",
            component: RefinanceLoanOptionsStep9Component,
            canActivate: [AppRouteGuard],
          },
          {
            path: "refinance-loan-option-step10",
            component: RefinanceLoanOptionsStep10Component,
            canActivate: [AppRouteGuard],
          },
          {
            path: "refinance-loan-option-step11",
            component: RefinanceLoanOptionsStep11Component,
            canActivate: [AppRouteGuard],
          },
          {
            path: "refinance-loan-option-step12",
            component: RefinanceLoanOptionsStep12Component,
            canActivate: [AppRouteGuard],
          },
          {
            path: "refinance-loan-option-step13",
            component: RefinanceLoanOptionsStep13Component,
            canActivate: [AppRouteGuard],
          },
          {
            path: "refinance-loan-option-step14",
            component: RefinanceLoanOptionsStep14Component,
            canActivate: [AppRouteGuard],
          },
          {
            path: "refinance-loan-option-step15",
            component: RefinanceLoanOptionsStep15Component,
            canActivate: [AppRouteGuard],
          },
          {
            path: "refinance-loan-option-step16",
            component: RefinanceLoanOptionsStep16Component,
            canActivate: [AppRouteGuard],
          },
          {
            path: "refinance-loan-option-step17",
            component: RefinanceLoanOptionsStep17Component,
            canActivate: [AppRouteGuard],
          },
          {
            path: "refinance-loan-option-step18",
            component: RefinanceLoanOptionsStep18Component,
            canActivate: [AppRouteGuard],
          },
          {
            path: "buy-a-home-animated",
            component: BuyAHomeComponent,
            canActivate: [AppRouteGuard],
          },
          {
            path: "buy-a-home-animated-step1",
            component: AnimatedStep1Component,
            canActivate: [AppRouteGuard],
          },
          {
            path: "buy-a-home-animated-step2",
            component: AnimatedStep2Component,
            canActivate: [AppRouteGuard],
          },
          {
            path: "buy-a-home-animated-step3",
            component: AnimatedStep3Component,
            canActivate: [AppRouteGuard],
          },
          {
            path: "buy-a-home-animated-step4",
            component: AnimatedStep4Component,
            canActivate: [AppRouteGuard],
          },
          {
            path: "buy-a-home-animated-step5",
            component: AnimatedStep5Component,
            canActivate: [AppRouteGuard],
          },
          {
            path: "buy-a-home-animated-step6",
            component: AnimatedStep6Component,
            canActivate: [AppRouteGuard],
          },
          {
            path: "buy-a-home-animated-step7",
            component: AnimatedStep7Component,
            canActivate: [AppRouteGuard],
          },
          {
            path: "buy-a-home-animated-step8",
            component: AnimatedStep8Component,
            canActivate: [AppRouteGuard],
          },
          {
            path: "buy-a-home-animated-step9",
            component: AnimatedStep9Component,
            canActivate: [AppRouteGuard],
          },
          {
            path: "buy-a-home-animated-step10",
            component: AnimatedStep10Component,
            canActivate: [AppRouteGuard],
          },
          {
            path: "buy-a-home-animated-step11",
            component: AnimatedStep11Component,
            canActivate: [AppRouteGuard],
          },
          {
            path: "buy-a-home-animated-step12",
            component: AnimatedStep12Component,
            canActivate: [AppRouteGuard],
          },
          {
            path: "buy-a-home-animated-step13",
            component: AnimatedStep13Component,
            canActivate: [AppRouteGuard],
          },
          {
            path: "buy-a-home-animated-step14",
            component: AnimatedStep14Component,
            canActivate: [AppRouteGuard],
          },
          {
            path: "buy-a-home-animated-step15",
            component: AnimatedStep15Component,
            canActivate: [AppRouteGuard],
          },
          {
            path: "buy-a-home-animated-step16",
            component: AnimatedStep16Component,
            canActivate: [AppRouteGuard],
          },
          {
            path: "buy-a-home-animated-step17",
            component: AnimatedStep17Component,
            canActivate: [AppRouteGuard],
          },
          {
            path: "buy-a-home-animated-step18",
            component: AnimatedStep18Component,
            canActivate: [AppRouteGuard],
          },
          {
            path: "buy-a-home-animated-step19",
            component: AnimatedStep19Component,
            canActivate: [AppRouteGuard],
          },
          {
            path: "buy-a-home-loan-options-animated",
            component: LoneOptionAnimatedComponent,
            canActivate: [AppRouteGuard],
          },
          {
            path: "buy-a-home-loan-options-animated-step1",
            component: LoneOptionStep1Component,
            canActivate: [AppRouteGuard],
          },
          {
            path: "buy-a-home-loan-options-animated-step2",
            component: LoneOptionStep2Component,
            canActivate: [AppRouteGuard],
          },
          {
            path: "buy-a-home-loan-options-animated-step3",
            component: LoneOptionStep3Component,
            canActivate: [AppRouteGuard],
          },
          {
            path: "buy-a-home-loan-options-animated-step4",
            component: LoneOptionStep4Component,
            canActivate: [AppRouteGuard],
          },
          {
            path: "buy-a-home-loan-options-animated-step5",
            component: LoneOptionStep5Component,
            canActivate: [AppRouteGuard],
          },
          {
            path: "buy-a-home-loan-options-animated-step6",
            component: LoneOptionStep6Component,
            canActivate: [AppRouteGuard],
          },
          {
            path: "buy-a-home-loan-options-animated-step7",
            component: LoneOptionStep7Component,
            canActivate: [AppRouteGuard],
          },
          {
            path: "buy-a-home-loan-options-animated-step8",
            component: LoneOptionStep8Component,
            canActivate: [AppRouteGuard],
          },
          {
            path: "buy-a-home-loan-options-animated-step9",
            component: LoneOptionStep9Component,
            canActivate: [AppRouteGuard],
          },
          {
            path: "buy-a-home-loan-options-animated-step10",
            component: LoneOptionStep10Component,
            canActivate: [AppRouteGuard],
          },
          {
            path: "buy-a-home-loan-options-animated-step11",
            component: LoneOptionStep11Component,
            canActivate: [AppRouteGuard],
          },
          {
            path: "buy-a-home-loan-options-animated-step12",
            component: LoneOptionStep12Component,
            canActivate: [AppRouteGuard],
          },
          {
            path: "buy-a-home-loan-options-animated-step13",
            component: LoneOptionStep13Component,
            canActivate: [AppRouteGuard],
          },
          {
            path: "buy-a-home-loan-options-animated-step14",
            component: LoneOptionStep14Component,
            canActivate: [AppRouteGuard],
          },
          {
            path: "refinance-guide",
            component: RefinanceGuideComponent,
            canActivate: [AppRouteGuard],
          },
          {
            path: "prepare-for-your-mortgage-refinance",
            component: PrepareForYourMortgageRefinanceComponent,
            canActivate: [AppRouteGuard],
          },
          {
            path: "explore-your-refinance-options",
            component: ExploreYourRefinanceOptionsComponent,
            canActivate: [AppRouteGuard],
          },
          {
            path: "apply-for-a-refinance-loan",
            component: ApplyForARefinanceLoanComponent,
            canActivate: [AppRouteGuard],
          },
          {
            path: "the-appraisal-underwriting-process",
            component: TheAppraisalUnderwritingProcessComponent,
            canActivate: [AppRouteGuard],
          },
          {
            path: "close-on-the-loan",
            component: CloseOnTheLoanComponent,
            canActivate: [AppRouteGuard],
          },
          {
            path: "manage-your-refinance",
            component: ManageYourRefinanceComponent,
            canActivate: [AppRouteGuard],
          },
          // These are the pages for the new loan application
          {
            path: "welcome/how-can-we-help",
            component: HowCanWeHelpComponent,
            canActivate: [AppRouteGuard],
          },
          {
            path: "welcome/already-working-with-someone-from-ez",
            component: AlreadyWorkingWithSomeoneFromEzComponent,
            canActivate: [AppRouteGuard],
          },
          {
            path: "welcome/what-stage-are-you-in",
            component: WhatStageAreYouInComponent,
            canActivate: [AppRouteGuard],
          },
          {
            path: "assets/about-your-assets",
            component: AboutYourAssetsComponent,
            canActivate: [AppRouteGuard],
          },
          {
            path: "assets/any-other-assets",
            component: AnyOtherAssetsComponent,
            canActivate: [AppRouteGuard],
          },
          {
            path: "assets/review-and-confirm-assets",
            component: ReviewAndConfirmAssetsComponent,
            canActivate: [AppRouteGuard],
          },
          {
            path: "credit-score/agree-to-following",
            component: AgreeToFollowingComponent,
            canActivate: [AppRouteGuard],
          },
          {
            path: "credit-score/credit-confirmation",
            component: CreditConfirmationComponent,
            canActivate: [AppRouteGuard],
          },
          {
            path: "income/any-other-from-employement",
            component: AnyOtherFormEmploymentComponent,
            canActivate: [AppRouteGuard],
          },
          {
            path: "income/employment-history",
            component: EmployementHistoryComponent,
            canActivate: [AppRouteGuard],
          },
          {
            path: "income/most-current-employer",
            component: MostCurrentEmployerComponent,
            canActivate: [AppRouteGuard],
          },
          {
            path: "income/other-sources-of-income",
            component: OtherSourcesOfIncomeComponent,
            canActivate: [AppRouteGuard],
          },
          {
            path: "income/review-and-confirm",
            component: ReviewAndConfirmComponent,
            canActivate: [AppRouteGuard],
          },
          {
            path: "income/title-and-compensaton",
            component: TitleAndCompensationComponent,
            canActivate: [AppRouteGuard],
          },
          {
            path: "military-info/branch-of-military",
            component: BranchOfMilitaryComponent,
            canActivate: [AppRouteGuard],
          },
          {
            path: "military-info/current-military-service",
            component: CurrentMilitaryServiceComponent,
            canActivate: [AppRouteGuard],
          },
          {
            path: "military-info/current-or-former-member-of-military",
            component: CurrentOrFormerMemberOfMilitaryComponent,
            canActivate: [AppRouteGuard],
          },
          {
            path: "military-info/ets-date",
            component: EtsDateComponent,
            canActivate: [AppRouteGuard],
          },
          {
            path: "military-info/va-loan-previously",
            component: VaLoanPreviouslyComponent,
            canActivate: [AppRouteGuard],
          },
          {
            path: "military-info/who-will-be-willing-in-home",
            component: WhoWillBeWillingInHomeComponent,
            canActivate: [AppRouteGuard],
          },
          {
            path: "peronsal-info/applying-jointly-or-own",
            component: ApplyingJointlyOrOwnComponent,
            canActivate: [AppRouteGuard],
          },
          {
            path: "personal-info/borrower-info",
            component: BorrowerInfoComponent,
            canActivate: [AppRouteGuard],
          },
          {
            path: "personal-info/currently-living",
            component: CurrentlyLivingComponent,
            canActivate: [AppRouteGuard],
          },
          {
            path: "personal-info/dependents-will-be-living-in-your-home",
            component: DependentsWillBeLivingInYourHomeComponent,
            canActivate: [AppRouteGuard],
          },
          {
            path: "personal-info/did-someone-reffer-you",
            component: DidSomeoneRefferYouComponent,
            canActivate: [AppRouteGuard],
          },
          {
            path: "personal-info/martial-status",
            component: MartialStatusComponent,
            canActivate: [AppRouteGuard],
          },
          {
            path: "personal-info/monthly-expenses",
            component: MonthlyExpensesComponent,
            canActivate: [AppRouteGuard],
          },
          {
            path: "personal-info/tell-us-a-little-bit-about-youself",
            component: TellUsALittleBitAboutYourselfComponent,
            canActivate: [AppRouteGuard],
          },
          {
            path: "property-info/address-of-new-home",
            component: AddressOfNewHomeComponent,
            canActivate: [AppRouteGuard],
          },
          {
            path: "property-info/credit-score",
            component: CreditScoreComponent,
            canActivate: [AppRouteGuard],
          },
          {
            path: "property-info/details-about-the-contract",
            component: DetailsAboutTheContractComponent,
            canActivate: [AppRouteGuard],
          },
          {
            path: "property-info/full-legal-name",
            component: FullLegalNameComponent,
            canActivate: [AppRouteGuard],
          },
          {
            path: "property-info/hoa-dues",
            component: HOADuesComponent,
            canActivate: [AppRouteGuard],
          },
          {
            path: "property-info/plan-on-using-new-home",
            component: PlanOnUsingNewHomeComponent,
            canActivate: [AppRouteGuard],
          },
          {
            path: "property-info/property-info-confirmation",
            component: PropertyInfoConfirmationComponent,
            canActivate: [AppRouteGuard],
          },
          {
            path: "property-info/purchase-price",
            component: PurchasePriceComponent,
            canActivate: [AppRouteGuard],
          },
          {
            path: "property-info/what-type-of-home",
            component: WhatTypeOfHomeComponent,
            canActivate: [AppRouteGuard],
          },
          {
            path: "thanks-for-applying",
            component: ThanksForApplyingComponent,
            canActivate: [AppRouteGuard],
          },
          {
            path: "us-government/just-few-more-yes-or-no-questions",
            component: JustFewMoreYesOrNoQuestionsComponent,
            canActivate: [AppRouteGuard],
          },
          {
            path: "us-government/us-government-require-questions",
            component: UsGovernmentRequireQuestionsComponent,
            canActivate: [AppRouteGuard],
          },
        ],
      },
      {
        path: "admin",
        loadChildren: () =>
          import("./../app/admin/admin.module").then((x) => x.AdminModule),
      },
    ]),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
