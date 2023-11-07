import { IBorrowerEmploymentInfoModel } from "./IBorrowerEmploymentInfoModel";
import { IBorrowerMonthlyIncomeModel } from "./IBorrowerMonthlyIncomeModel";
import { IAdditionalIncomeModel } from "./IAdditionalIncomeModel";

export interface IEmploymentIncomeModel {
  id?: number;
  borrowerEmploymentInfo?: IBorrowerEmploymentInfoModel[];
  coBorrowerEmploymentInfo?: IBorrowerEmploymentInfoModel[];
  borrowerMonthlyIncome?: IBorrowerMonthlyIncomeModel;
  coBorrowerMonthlyIncome?: IBorrowerMonthlyIncomeModel;
  additionalIncomes?: IAdditionalIncomeModel[];
}
