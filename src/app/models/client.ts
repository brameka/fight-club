


import { Address } from './address';
import { Dependant } from './dependant';
import { Optional } from './optional';
import { Contact } from './contact';

export interface Client {
  id?: string;
  name?: string;
  contacts?: Contact[];
  address?: Address;
  previousAddress?: Address[];
  dependants?: Dependant[];
  taxNumber?: string;
  notes?: string;
  bank?: string;
  options?: {
    guarantor?: Optional;
    adverseCreditHistory?: Optional;
    futureImpact?: Optional
  };
}

