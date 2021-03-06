import { Frequency } from './frequency';

export interface Insurance {
  name: string;
  type: InsuranceType;
  excess: string;
  insurer: string;
  policyNumber: string;
  commencementDate: string;
  premiums: number;
  frequency: Frequency;
}

export enum InsuranceType {
  Life,
  Trauma,
  Car,
  House,
  Income
}
