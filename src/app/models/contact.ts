import { Frequency } from './frequency';

export interface Contact {
  name?: string;
  firstname?: string;
  lastname?: string;
  dob?: string;
  country?: string;
  mobile?: string;
  phone?: string;
  email?: string;
  isSmoker?: boolean;
  employer?: string;
  payRate?: number;
  payFrequency?: Frequency;
  occupation?: string;
  occupationDuration?: number;
  previousEmployers?: string[];
  height?: number;
  weight?: number;
  preferences?: {
    homeLoan?: {
      interestRate?: boolean;
      lumpSum?: boolean;
      flexibility?: boolean;
      notes?: string;
    };
    protection?: {
      lifeInsurance?: {
        amount?: number;
        premiums?: number;
        maturityDate?: string;
        insurer?: string;
      };
      incomeProtection?: {
        amount?: number;
        premiums?: number;
        insurer?: string;
      };
      traumaInsurance?: {
        amount?: number;
        premiums?: number;
        insurer?: string;
      }
    }
  };
}
