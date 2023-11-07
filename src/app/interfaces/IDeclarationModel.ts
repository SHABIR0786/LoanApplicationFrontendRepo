import { IBorrowerDemographicModel } from "./IBorrowerDemographicModel";
import { IBorrowerDeclarationModel } from "./IBorrowerDeclarationModel";

export interface IDeclarationModel {
  id?: number;
  borrowerDeclaration?: IBorrowerDeclarationModel;
  borrowerDemographic?: IBorrowerDemographicModel;

  coBorrowerDeclaration?: IBorrowerDeclarationModel;
  coBorrowerDemographic?: IBorrowerDemographicModel;
}
