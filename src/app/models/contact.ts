import { Role } from './role';

export interface Contact {
  name: string;
  firstname: string;
  lastname: string;
  mobile: string;
  homePhone: string;
  workPhone: string;
  email: string;
  role: Role;
}