export interface IBorrowerMonthlyIncomeModel {
  id?: number;
  base?: number;
  overtime?: number;
  bonuses?: number;
  commissions?: number;
  dividends?: number;
  borrowerTypeId?: number;
}
