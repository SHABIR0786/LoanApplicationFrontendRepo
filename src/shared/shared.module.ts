import { CommonModule } from "@angular/common";
import { NgModule, ModuleWithProviders } from "@angular/core";
import { RouterModule } from "@angular/router";
import { NgxPaginationModule } from "ngx-pagination";

import { AppSessionService } from "./session/app-session.service";
import { AppUrlService } from "./nav/app-url.service";
import { AppAuthService } from "./auth/app-auth.service";
import { AppRouteGuard } from "./auth/auth-route-guard";
import { LocalizePipe } from "@shared/pipes/localize.pipe";
import { EthnicityOtherValuePipe } from "@shared/pipes/OtherValue.pipe";
import { EthnicityYesNoPipe } from "@shared/pipes/YesNo.pipe";
import { DateDifferencePipe } from "@shared/pipes/date-difference.pipe";

import { AbpPaginationControlsComponent } from "./components/pagination/abp-pagination-controls.component";
import { AbpValidationSummaryComponent } from "./components/validation/abp-validation.summary.component";
import { AbpModalHeaderComponent } from "./components/modal/abp-modal-header.component";
import { AbpModalFooterComponent } from "./components/modal/abp-modal-footer.component";
import { LayoutStoreService } from "./layout/layout-store.service";

import { BusyDirective } from "./directives/busy.directive";
import { EqualValidator } from "./directives/equal-validator.directive";
import { BootstrapValidationCssDirective } from "./directives/bootstrap-validation-css.directive";
import { PhoneMaskDirective } from "../shared/directives/phone-mask.directive";
import { MatchPasswordDirective } from "../shared/directives/match-password.directive";
@NgModule({
  imports: [CommonModule, RouterModule, NgxPaginationModule],
  declarations: [
    AbpPaginationControlsComponent,
    AbpValidationSummaryComponent,
    AbpModalHeaderComponent,
    AbpModalFooterComponent,
    LocalizePipe,
    EthnicityOtherValuePipe,
    EthnicityYesNoPipe,
    DateDifferencePipe,
    BusyDirective,
    EqualValidator,
    BootstrapValidationCssDirective,
    PhoneMaskDirective,
    MatchPasswordDirective,
  ],
  exports: [
    AbpPaginationControlsComponent,
    AbpValidationSummaryComponent,
    AbpModalHeaderComponent,
    AbpModalFooterComponent,
    LocalizePipe,
    EthnicityOtherValuePipe,
    EthnicityYesNoPipe,
    DateDifferencePipe,
    BusyDirective,
    EqualValidator,
    BootstrapValidationCssDirective,
    PhoneMaskDirective,
    MatchPasswordDirective,
  ],
})
export class SharedModule {
  static forRoot(): ModuleWithProviders<SharedModule> {
    return {
      ngModule: SharedModule,
      providers: [
        AppSessionService,
        AppUrlService,
        AppAuthService,
        AppRouteGuard,
        LayoutStoreService,
      ],
    };
  }
}
