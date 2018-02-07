import { Frequency } from './frequency';

export interface Income {
  salary?: number;
  overtime?: number;
  investment?: number;
  super?: number;
  other?: number;
}

export interface Expenses {
  rent?: number;
  insurance?: {
    protection?: number;
    trauma?: number;
    life?: number;
    medical?: number;
    contents?: number;
    house?: number;
    investment?: number;
    vehicle?: number;
  };
  rates?: {
    water?: number;
    land?: number;
  };
  vehicle?: {
    fuel?: number;
    rego?: number;
    service?: number;
  };
  utilities?: {
    power?: number;
    mobile?: number;
    internet?: number;
  };
  super?: number;
  food?: number;
  clothing?: number;
  general?: number;
  cosmetics?: number;
  doctor?: number;
  dependants?: {
    childSupport?: number;
    daycare?: number;
    schoolFees?: number;
    other?: number;
  };
  professionalFees?: number;
  other?: number;
}

export interface Assets {
  bank?: number;
  vehicles?: number;
  personalEffects?: number;
  kiwisaver?: number;
  otherSavings?: number;
  property?: number;
  boats?: number;
  other?: number;
}

export interface Liability {
  homeLoans: HomeLoan[];
  creditCards: Loan[];
  personalLoans: Loan[];
  studentLoans: Loan[];
  overdrafts: Loan;
  otherFinance: Loan;
}

export interface Loan {
  limit?: number;
  balance?: number;
  monthlyRepayment?: number;
  interestRate?: number;
  isRepay?: boolean;
}

export interface HomeLoan {
  bank?: string;
  startDate?: string;
  limit?: number;
  balance?: number;
  monthlyRepayment?: number;
  interestRate?: number;
  isRepay?: boolean;
}

