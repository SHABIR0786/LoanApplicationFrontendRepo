import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientJsonpModule, HttpClientModule } from "@angular/common/http";
//import { ModalModule } from "ngx-bootstrap/modal";
import { BsDropdownModule } from "ngx-bootstrap/dropdown";
import { CollapseModule } from "ngx-bootstrap/collapse";
import { TabsModule } from "ngx-bootstrap/tabs";
import { CarouselModule } from "ngx-bootstrap/carousel";
import { NgxPaginationModule } from "ngx-pagination";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { ServiceProxyModule } from "@shared/service-proxies/service-proxy.module";
import { SharedModule } from "@shared/shared.module";
import { NgxMaskModule, IConfig } from "ngx-mask";
import { HomeComponent } from "@app/home/home.component";
import { HomeMainCarousel } from "@app/home/home-main-carousel/home-main-carousel";
import { HomeTestmionals } from "@app/home/home-testmionals/home-testmionals";
import { AboutComponent } from "@app/about/about.component";
// tenants
import { TenantsComponent } from "@app/tenants/tenants.component";
import { CreateTenantDialogComponent } from "./tenants/create-tenant/create-tenant-dialog.component";
import { EditTenantDialogComponent } from "./tenants/edit-tenant/edit-tenant-dialog.component";
// roles
import { RolesComponent } from "@app/roles/roles.component";
import { CreateRoleDialogComponent } from "./roles/create-role/create-role-dialog.component";
import { EditRoleDialogComponent } from "./roles/edit-role/edit-role-dialog.component";
// users
import { UsersComponent } from "@app/users/users.component";
import { CreateUserDialogComponent } from "@app/users/create-user/create-user-dialog.component";
import { EditUserDialogComponent } from "@app/users/edit-user/edit-user-dialog.component";
import { ChangePasswordComponent } from "./users/change-password/change-password.component";
import { ResetPasswordDialogComponent } from "./users/reset-password/reset-password.component";
// layout
import { HeaderComponent } from "./layout/header.component";
import { HeaderLeftNavbarComponent } from "./layout/header-left-navbar.component";
import { HeaderLanguageMenuComponent } from "./layout/header-language-menu.component";
import { HeaderUserMenuComponent } from "./layout/header-user-menu.component";
import { FooterComponent } from "./layout/footer.component";
import { SidebarComponent } from "./layout/sidebar.component";
import { SidebarLogoComponent } from "./layout/sidebar-logo.component";
import { SidebarUserPanelComponent } from "./layout/sidebar-user-panel.component";
import { SidebarMenuComponent } from "./layout/sidebar-menu.component";
import { LoanApplicationComponent } from "./loan-application/loan-application.component";
// Wizard module
import { NgWizardConfig, NgWizardModule, THEME } from "ng-wizard";
import { LoanDetailsComponent } from "./loan-application/loan-details/loan-details.component";
import { ValidationSummaryComponent } from "./validation-summary/validation-summary.component";
import { TooltipModule } from "ngx-bootstrap/tooltip";
import { PersonalInformationComponent } from "./loan-application/personal-information/personal-information.component";
import { ExpensesComponent } from "./loan-application/expenses/expenses.component";
import { BorrowerPersonalDetailComponent } from "./loan-application/borrower-personal-detail/borrower-personal-detail.component";
import { DeclarationComponent } from "./loan-application/declaration/declaration.component";
import { EmploymentIncomeComponent } from "./loan-application/employment-income/employment-income.component";
import { AccordionModule } from "ngx-bootstrap/accordion";
import { SummaryComponent } from "./loan-application/summary/summary.component";
import { SummaryExpandDataComponent } from "./loan-application/summary/data-component/summary-expand-data.component";
import { DataService } from "./services/data.service";
import { EconsentComponent } from "./loan-application/econsent/econsent.component";
import { AssetsComponent } from "./loan-application/assets/assets.component";
import { OrderCreditComponent } from "./loan-application/order-credit/order-credit.component";
import { AdditionalDetailsComponent } from "./loan-application/additional-details/additional-details.component";
import { LoanListComponent } from "./loan-application/loan-list/loan-list.component";
import { AdminPanelComponent } from "./admin-panel/admin-panel.component";
import { LoanSideBar } from "./loan-application/side-bar/side-bar";
import { GetLoanAppResolve } from "./resolver/loan-app-get-resolve";
import { MortgageCalculatorComponent } from "./calculators/mortgage-calculator/mortgage-calculator.component";
import { HomeAffordabilityCalculatorComponent } from "./calculators/home-affordability-calculator/home-affordability-calculator.component";
import { RefinanceCalculatorComponent } from "./calculators/refinance-calculator/refinance-calculator.component";
import { AffordabilityComponent } from "./calculators/affordability/affordability.component";
import { ViewAllCalculatorsComponent } from "./calculators/view-all-calculators/view-all-calculators.component";
import { BuyingHomeGuideComponent } from "./buying-home-guide/buying-home-guide.component";
import { FirstTimeHomeBuyerComponent } from "./first-time-home-buyer/first-time-home-buyer.component";
import { BuyingSecondHomeComponent } from "./buying-second-home/buying-second-home.component";
import { PreApprovalComponent } from "./pre-approval/pre-approval.component";
import { BuyingVacationHomeComponent } from "./buying-vacation-home/buying-vacation-home.component";
import { RealStateInvestorComponent } from "./real-state-investor/real-state-investor.component";
import { MovingAndBuyingHomeComponent } from "./moving-and-buying-home/moving-and-buying-home.component";
import { HomeBuyingFreeConsultationComponent } from "./home-buying-free-consultation/home-buying-free-consultation.component";
import { LowerYourPaymentComponent } from "./refinance/lower-your-payment/lower-your-payment.component";
import { GetCashFromYourHomeComponent } from "./refinance/get-cash-from-your-home/get-cash-from-your-home.component";
import { ConsolidateYourDebitComponent } from "./refinance/consolidate-your-debit/consolidate-your-debit.component";
import { PayOffYourMortgageFasterComponent } from "./refinance/pay-off-your-mortgage-faster/pay-off-your-mortgage-faster.component";
import { RefinanceWithHARPComponent } from "./refinance/refinance-with-harp/refinance-with-harp.component";
import { KeepYourPaymentFromRaisingComponent } from "./refinance/keep-your-payment-from-raising/keep-your-payment-from-raising.component";
import { RefinanceInvestmentPropertyComponent } from "./refinance/refinance-investment-property/refinance-investment-property.component";
import { RefinanceFreeConsultationComponent } from "./refinance/refinance-free-consultation/refinance-free-consultation.component";
import { LoanOptionsComponent } from "./loan-options/loan-options.component";
import { ThirtyYearFixedMortgageComponent } from "./loan-options/thirty-year-fixed-mortgage/thirty-year-fixed-mortgage.component";
import { FifteenYearFixedMortgageComponent } from "./loan-options/fifteen-year-fixed-mortgage/fifteen-year-fixed-mortgage.component";
import { AdjustableRateMortgageComponent } from "./loan-options/adjustable-rate-mortgage/adjustable-rate-mortgage.component";
import { HarpRefinanceComponent } from "./loan-options/harp-refinance/harp-refinance.component";
import { FhaLoansComponent } from "./loan-options/fha-loans/fha-loans.component";
import { JumboLoanComponent } from "./loan-options/jumbo-loan/jumbo-loan.component";
import { BlogComponent } from "./blog/blog.component";
import { AboutUsComponent } from "./about-us/about-us.component";
import { RequestAMortgageComponent } from "./about-us/request-a-mortgage/request-a-mortgage.component";
import { ContactUsComponent } from "./about-us/contact-us/contact-us.component";
import { LicenseInfoComponent } from "./about-us/license-info/license-info.component";
import { MortgageGlossaryComponent } from "./about-us/mortgage-glossary/mortgage-glossary.component";
import { CurrentHomeLoanRatesComponent } from "./current-home-loan-rates/current-home-loan-rates.component";
import { EmailAndTextUpdatesComponent } from "./email-and-text-updates/email-and-text-updates.component";
import { FinalizingMortgagePreApprovalComponent } from "./buying-home-guide/finalizing-mortgage-pre-approval/finalizing-mortgage-pre-approval.component";
import { DecidingMortgageComponent } from "./buying-home-guide/deciding-mortgage/deciding-mortgage.component";
import { SelectionRealEstateAgentComponent } from "./buying-home-guide/selection-real-estate-agent/selection-real-estate-agent.component";
import { HouseHuntingComponent } from "./buying-home-guide/house-hunting/house-hunting.component";
import { MakingACompetitiveOfferComponent } from "./buying-home-guide/making-a-competitive-offer/making-a-competitive-offer.component";
import { UnderwritingProcessComponent } from "./buying-home-guide/underwriting-process/underwriting-process.component";
import { PreparingToCloseComponent } from "./buying-home-guide/preparing-to-close/preparing-to-close.component";
import { WalkThroughAndClosingDayComponent } from "./buying-home-guide/walk-through-and-closing-day/walk-through-and-closing-day.component";
import { MakingYourFirstMortgagePaymentComponent } from "./buying-home-guide/making-your-first-mortgage-payment/making-your-first-mortgage-payment.component";
import { ManagingYourMortgageComponent } from "./buying-home-guide/managing-your-mortgage/managing-your-mortgage.component";
import { AmortizationComponent } from "./calculators/amortization/amortization.component";
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
import { AnimatedFormHeaderComponent } from "./layout/animated-form-header.component";
import { AnimatedBuyHomeHeaderComponent } from "./layout/animated-buy-home-header.component";
import { AnimatedFormFooterComponent } from "./layout/animated-form-footer.component";
import { AnimatedLegalFooterComponent } from "./layout/animated-legal-footer.component";
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
import { PreparingForMortgageComponent } from "./buying-home-guide/preparing-for-mortgage/preparing-for-mortgage.component";
import { RefinanceGuideComponent } from "./refinance-guide/refinance-guide.component";
import { PrepareForYourMortgageRefinanceComponent } from "./refinance-guide/prepare-for-your-mortgage-refinance/prepare-for-your-mortgage-refinance.component";
import { ExploreYourRefinanceOptionsComponent } from "./refinance-guide/explore-your-refinance-options/explore-your-refinance-options.component";
import { ApplyForARefinanceLoanComponent } from "./refinance-guide/apply-for-a-refinance-loan/apply-for-a-refinance-loan.component";
import { TheAppraisalUnderwritingProcessComponent } from "./refinance-guide/the-appraisal-underwriting-process/the-appraisal-underwriting-process.component";
import { CloseOnTheLoanComponent } from "./refinance-guide/close-on-the-loan/close-on-the-loan.component";
import { ManageYourRefinanceComponent } from "./refinance-guide/manage-your-refinance/manage-your-refinance.component";
import { AdminPanelLayoutModule } from "./admin-panel/admin-panel-layout/admin-panel-layout.module";
import { LoanApplicationHeaderComponent } from "./loan-application/loan-application-header/loan-application-header.component";
import { WelcomeComponent } from "./loan-application/welcome/welcome.component";
import { HowCanWeHelpComponent } from "./animated_loan_application/welcome/how-can-we-help/how-can-we-help.component";
import { LoanAppSideBarComponent } from "./animated_loan_application/loan-app-side-bar/loan-app-side-bar.component";
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
import { LoanProgressComponent } from "./admin-panel/loan-progress/loan-progress.component";
import { AdminModule } from "./admin/admin.module";
import { NotificationComponent } from "./admin-panel/notification/notification.component";
import { LoanApplicationListComponent } from "./admin-panel/loan-application-list/loan-application-list.component";
import { MainLoanProcessComponent } from "./admin-panel/loan-progress/main-loan-process/main-loan-process.component";
import { GooglePlacesComponent } from "./google-places/google-places.component";
import { AdminProfilePageComponent } from "./admin-panel/admin-profile-page/admin-profile-page.component";

const ngWizardConfig: NgWizardConfig = {
  theme: THEME.default,
};

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HomeTestmionals,
    HomeMainCarousel,
    AboutComponent,
    // tenants
    TenantsComponent,
    CreateTenantDialogComponent,
    EditTenantDialogComponent,
    // roles
    RolesComponent,
    CreateRoleDialogComponent,
    EditRoleDialogComponent,
    // users
    UsersComponent,
    CreateUserDialogComponent,
    EditUserDialogComponent,
    ChangePasswordComponent,
    ResetPasswordDialogComponent,
    // layout
    HeaderComponent,
    HeaderLeftNavbarComponent,
    HeaderLanguageMenuComponent,
    HeaderUserMenuComponent,
    FooterComponent,
    SidebarComponent,
    SidebarLogoComponent,
    SidebarUserPanelComponent,
    SidebarMenuComponent,
    LoanApplicationComponent,
    LoanDetailsComponent,
    ValidationSummaryComponent,
    PersonalInformationComponent,
    ExpensesComponent,
    BorrowerPersonalDetailComponent,
    DeclarationComponent,
    EmploymentIncomeComponent,
    SummaryComponent,
    EconsentComponent,
    AssetsComponent,
    OrderCreditComponent,
    AdditionalDetailsComponent,
    SummaryExpandDataComponent,
    LoanListComponent,
    LoanSideBar,
    MortgageCalculatorComponent,
    HomeAffordabilityCalculatorComponent,
    RefinanceCalculatorComponent,
    AffordabilityComponent,
    ViewAllCalculatorsComponent,
    BuyingHomeGuideComponent,
    FirstTimeHomeBuyerComponent,
    BuyingSecondHomeComponent,
    PreApprovalComponent,
    BuyingVacationHomeComponent,
    RealStateInvestorComponent,
    MovingAndBuyingHomeComponent,
    HomeBuyingFreeConsultationComponent,
    LowerYourPaymentComponent,
    GetCashFromYourHomeComponent,
    ConsolidateYourDebitComponent,
    PayOffYourMortgageFasterComponent,
    RefinanceWithHARPComponent,
    KeepYourPaymentFromRaisingComponent,
    RefinanceInvestmentPropertyComponent,
    RefinanceFreeConsultationComponent,
    LoanOptionsComponent,
    ThirtyYearFixedMortgageComponent,
    FifteenYearFixedMortgageComponent,
    AdjustableRateMortgageComponent,
    HarpRefinanceComponent,
    FhaLoansComponent,
    JumboLoanComponent,
    BlogComponent,

    Step2Component,

    AnimatedComponent,

    Step1Component,

    Step3Component,

    Step4Component,

    Step5Component,

    Step6Component,

    Step7Component,

    Step8Component,

    Step9Component,

    Step10Component,

    Step11Component,

    Step12Component,

    Step13Component,

    Step14Component,

    Step15Component,

    Step16Component,

    Step17Component,

    Step18Component,

    Step19Component,
    AboutUsComponent,
    RequestAMortgageComponent,
    ContactUsComponent,
    LicenseInfoComponent,
    MortgageGlossaryComponent,
    CurrentHomeLoanRatesComponent,
    EmailAndTextUpdatesComponent,
    FinalizingMortgagePreApprovalComponent,
    DecidingMortgageComponent,
    SelectionRealEstateAgentComponent,
    HouseHuntingComponent,
    MakingACompetitiveOfferComponent,
    UnderwritingProcessComponent,
    PreparingToCloseComponent,
    WalkThroughAndClosingDayComponent,
    MakingYourFirstMortgagePaymentComponent,
    ManagingYourMortgageComponent,
    AmortizationComponent,
    VaLoanComponent,
    AmortizationResultComponent,
    RentVsBuyCalculatorComponent,
    AnimatedOneComponent,
    RefinanceLoanOptionsStep1Component,
    RefinanceLoanOptionsStep2Component,
    RefinanceLoanOptionsStep3Component,
    RefinanceLoanOptionsStep4Component,
    RefinanceLoanOptionsStep5Component,
    RefinanceLoanOptionsStep6Component,
    RefinanceLoanOptionsStep7Component,
    RefinanceLoanOptionsStep8Component,
    RefinanceLoanOptionsStep9Component,
    RefinanceLoanOptionsStep10Component,
    RefinanceLoanOptionsStep12Component,
    RefinanceLoanOptionsStep13Component,
    RefinanceLoanOptionsStep14Component,
    RefinanceLoanOptionsStep15Component,
    RefinanceLoanOptionsStep16Component,
    RefinanceLoanOptionsStep17Component,
    RefinanceLoanOptionsStep18Component,
    BuyAHomeComponent,
    AnimatedStep1Component,
    AnimatedStep2Component,
    AnimatedStep3Component,
    AnimatedStep4Component,
    AnimatedStep5Component,
    AnimatedStep6Component,
    AnimatedStep7Component,
    AnimatedStep8Component,
    AnimatedStep9Component,
    AnimatedStep10Component,
    AnimatedStep11Component,
    AnimatedStep12Component,
    AnimatedStep13Component,
    AnimatedStep14Component,
    AnimatedStep15Component,
    AnimatedStep16Component,
    AnimatedStep17Component,
    AnimatedStep18Component,
    AnimatedStep19Component,

    AnimatedFormHeaderComponent,
    AnimatedFormFooterComponent,
    LoneOptionAnimatedComponent,
    LoneOptionStep1Component,
    LoneOptionStep2Component,
    LoneOptionStep3Component,
    LoneOptionStep4Component,
    LoneOptionStep5Component,
    LoneOptionStep6Component,
    LoneOptionStep7Component,
    LoneOptionStep8Component,
    LoneOptionStep9Component,
    LoneOptionStep10Component,
    LoneOptionStep11Component,
    LoneOptionStep12Component,
    LoneOptionStep13Component,
    LoneOptionStep14Component,
    PreparingForMortgageComponent,
    RefinanceGuideComponent,
    PrepareForYourMortgageRefinanceComponent,
    ExploreYourRefinanceOptionsComponent,
    ApplyForARefinanceLoanComponent,
    TheAppraisalUnderwritingProcessComponent,
    CloseOnTheLoanComponent,
    ManageYourRefinanceComponent,
    LoanApplicationHeaderComponent,
    WelcomeComponent,
    HowCanWeHelpComponent,
    LoanAppSideBarComponent,
    WhatStageAreYouInComponent,
    AlreadyWorkingWithSomeoneFromEzComponent,
    AddressOfNewHomeComponent,
    DetailsAboutTheContractComponent,
    PurchasePriceComponent,
    CreditScoreComponent,
    FullLegalNameComponent,
    WhatTypeOfHomeComponent,
    HOADuesComponent,
    PlanOnUsingNewHomeComponent,
    CurrentOrFormerMemberOfMilitaryComponent,
    PropertyInfoConfirmationComponent,
    PersonalInfoConfirmationComponent,
    CurrentMilitaryServiceComponent,
    BranchOfMilitaryComponent,
    EtsDateComponent,
    VaLoanPreviouslyComponent,
    WhoWillBeWillingInHomeComponent,
    TellUsALittleBitAboutYourselfComponent,
    DidSomeoneRefferYouComponent,
    ApplyingJointlyOrOwnComponent,
    MartialStatusComponent,
    DependentsWillBeLivingInYourHomeComponent,
    CurrentlyLivingComponent,
    MonthlyExpensesComponent,
    BorrowerInfoComponent,
    EmployementHistoryComponent,
    MostCurrentEmployerComponent,
    TitleAndCompensationComponent,
    AnyOtherFormEmploymentComponent,
    OtherSourcesOfIncomeComponent,
    ReviewAndConfirmComponent,
    AboutYourAssetsComponent,
    AnyOtherAssetsComponent,
    ReviewAndConfirmAssetsComponent,
    UsGovernmentRequireQuestionsComponent,
    JustFewMoreYesOrNoQuestionsComponent,
    AgreeToFollowingComponent,
    CreditConfirmationComponent,
    ThanksForApplyingComponent,
    AnimatedBuyHomeHeaderComponent,
    AnimatedLegalFooterComponent,
    LoanProgressComponent,
    NotificationComponent,
    LoanApplicationListComponent,
    MainLoanProcessComponent,
    GooglePlacesComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    HttpClientJsonpModule,
    //ModalModule.forChild(),
    TooltipModule.forRoot(),
    BsDropdownModule,
    CollapseModule,
    TabsModule,
    CarouselModule.forRoot(),
    AppRoutingModule,
    ServiceProxyModule,
    SharedModule,
    NgxPaginationModule,
    NgWizardModule.forRoot(ngWizardConfig),
    AccordionModule.forRoot(),
    NgxMaskModule.forRoot(),
    AdminModule,
    AdminPanelLayoutModule,
  ],
  providers: [DataService, GetLoanAppResolve],
  entryComponents: [
    // tenants
    CreateTenantDialogComponent,
    EditTenantDialogComponent,
    // roles
    CreateRoleDialogComponent,
    EditRoleDialogComponent,
    // users
    CreateUserDialogComponent,
    EditUserDialogComponent,
    ResetPasswordDialogComponent,
  ],
  exports: [CommonModule],
})
export class AppModule {}
