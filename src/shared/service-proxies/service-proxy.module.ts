import { NgModule } from "@angular/core";
import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { AbpHttpInterceptor } from "abp-ng2-module";

import * as ApiServiceProxies from "./service-proxies";

@NgModule({
  providers: [
    ApiServiceProxies.RoleServiceProxy,
    ApiServiceProxies.SessionServiceProxy,
    ApiServiceProxies.TenantServiceProxy,
    ApiServiceProxies.UserServiceProxy,
    ApiServiceProxies.TokenAuthServiceProxy,
    ApiServiceProxies.AccountServiceProxy,
    ApiServiceProxies.ConfigurationServiceProxy,
    ApiServiceProxies.StateServiceServiceProxy,
    ApiServiceProxies.IncomeTypeServiceServiceProxy,
    ApiServiceProxies.LeadAssetTypesServiceServiceProxy,
    ApiServiceProxies.LeadEmploymentTypesServiceServiceProxy,
    ApiServiceProxies.LeadIncomeTypesServiceServiceProxy,
    ApiServiceProxies.AdminLoanDetailServiceServiceProxy,
    ApiServiceProxies.AdminLoanProgramServiceServiceProxy,
    ApiServiceProxies.AdminLoanStatusServiceServiceProxy,
    ApiServiceProxies.AdminLoanSummaryStatusServiceServiceProxy,
    ApiServiceProxies.AdminNotificationsServiceProxy,
    ApiServiceProxies.FinancialServiceServiceProxy,
    ApiServiceProxies.CitizenshipTypeServiceServiceProxy,
    ApiServiceProxies.LeadEmploymentDetailsServiceServiceProxy,
    ApiServiceProxies.AdminLoanApplicationDocumentServiceServiceProxy,
    ApiServiceProxies.AdminDisclosureServiceServiceProxy,
    { provide: HTTP_INTERCEPTORS, useClass: AbpHttpInterceptor, multi: true },
  ],
})
export class ServiceProxyModule {}
