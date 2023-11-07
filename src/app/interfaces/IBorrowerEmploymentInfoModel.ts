export interface IBorrowerEmploymentInfoModel {
  id?: number;
  isSelfEmployed?: boolean;
  employerName?: string;
  position?: string;
  address1?: string;
  address2?: string;
  city?: string;
  stateId?: number;
  zipCode?: string;
  startDate?: string;
  endDate?: string;
  borrowerTypeId?: number;
  stateIdName?: string;
}
