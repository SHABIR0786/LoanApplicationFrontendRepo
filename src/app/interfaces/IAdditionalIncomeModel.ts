import { IBorrowerEmploymentInfoModel } from "./IBorrowerEmploymentInfoModel";
import { IBorrowerMonthlyIncomeModel } from "./IBorrowerMonthlyIncomeModel";

export interface IAdditionalIncomeModel {

  id?: number;
  borrowerTypeId?: number;
  incomeSourceId?: number;
  amount?: number;
  incomeSourceIdName?: string;
}
