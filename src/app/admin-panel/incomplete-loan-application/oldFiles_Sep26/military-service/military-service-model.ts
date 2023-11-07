export class MilitaryServiceModel {
  id: number;
  creationTime: Date;
  creatorUserId: number;
  lastModificationTime: Date;
  lastModifierUserId: number;
  isDeleted: boolean;
  deleterUserId: number;
  deletionTime: Date;
  personalInformationId: number;
  isServeUSForces: boolean;
  isCurrentlyServing: boolean;
  projectedExpirationServiceDate: Date;
  isCurrentlyRetired: boolean;
  isNonActivatedMember: boolean;
  isSurvivingSpouse: boolean;
}
