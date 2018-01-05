import { Frequency } from './frequency';

export interface Income {
  name: string;
  description: string;
  amount: number;
  frequency: Frequency;
}

export interface Expense {
  name: string;
  description: string;
  amount: number;
  frequency: Frequency;
}

export interface Asset {
  name: string;
  description: string;
  value: number;
}

export interface Liability {
  name: string;
  description: string;
  value: number;
}

